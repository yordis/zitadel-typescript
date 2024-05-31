import { sessionService, managementService, oidcService } from "@/lib/zitadel";
import { SessionCookie, getAllSessions } from "@/utils/cookies";
import { NextRequest, NextResponse } from "next/server";
import {
  AuthRequest,
  Prompt,
} from "@zitadel/proto/zitadel/oidc/v2beta/authorization_pb";
import { Session } from "@zitadel/proto/zitadel/session/v2beta/session_pb";

async function loadSessions(ids: string[]): Promise<Session[]> {
  const response = await sessionService.listSessions({
    queries: [
      {
        query: {
          case: "idsQuery",
          value: { ids: ids.filter((id: string | undefined) => !!id) },
        },
      },
    ],
  });

  return response.sessions;
}

const ORG_SCOPE_REGEX = /urn:zitadel:iam:org:id:([0-9]+)/;
const ORG_DOMAIN_SCOPE_REGEX = /urn:zitadel:iam:org:domain:primary:(.+)/; // TODO: check regex for all domain character options

function findSession(
  sessions: Session[],
  authRequest: AuthRequest,
): Session | undefined {
  if (authRequest.hintUserId) {
    console.log(`find session for hintUserId: ${authRequest.hintUserId}`);
    return sessions.find((s) => s.factors?.user?.id === authRequest.hintUserId);
  }
  if (authRequest.loginHint) {
    console.log(`find session for loginHint: ${authRequest.loginHint}`);
    return sessions.find(
      (s) => s.factors?.user?.loginName === authRequest.loginHint,
    );
  }
  if (sessions.length) {
    return sessions[0];
  }
  return undefined;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const authRequestId = searchParams.get("authRequest");
  const sessionId = searchParams.get("sessionId");

  const sessionCookies: SessionCookie[] = await getAllSessions();
  const ids = sessionCookies.map((s) => s.id);
  let sessions: Session[] = [];
  if (ids && ids.length) {
    sessions = await loadSessions(ids);
  }

  if (authRequestId && sessionId) {
    console.log(
      `Login with session: ${sessionId} and authRequest: ${authRequestId}`,
    );

    let selectedSession = sessions.find((s) => s.id === sessionId);

    if (selectedSession && selectedSession.id) {
      console.log(`Found session ${selectedSession.id}`);
      const cookie = sessionCookies.find(
        (cookie) => cookie.id === selectedSession?.id,
      );

      if (cookie && cookie.id && cookie.token) {
        console.log(`Found sessioncookie ${cookie.id}`);

        const { callbackUrl } = await oidcService.createCallback({
          authRequestId,
          callbackKind: {
            case: "session",
            value: {
              sessionId: cookie?.id,
              sessionToken: cookie?.token,
            },
          },
        });
        return NextResponse.redirect(callbackUrl);
      }
    }
  }

  if (authRequestId) {
    console.log(`Login with authRequest: ${authRequestId}`);
    const { authRequest } = await oidcService.getAuthRequest({ authRequestId });
    let organization;

    if (authRequest?.scope) {
      const orgScope = authRequest.scope.find((s: string) =>
        ORG_SCOPE_REGEX.test(s),
      );

      if (orgScope) {
        const matched = ORG_SCOPE_REGEX.exec(orgScope);
        organization = matched?.[1] ?? "";
      } else {
        const orgDomainScope = authRequest.scope.find((s: string) =>
          ORG_DOMAIN_SCOPE_REGEX.test(s),
        );

        if (orgDomainScope) {
          const matched = ORG_DOMAIN_SCOPE_REGEX.exec(orgDomainScope);
          const orgDomain = matched?.[1] ?? "";
          if (orgDomain) {
            const org = await managementService.getOrgByDomainGlobal({
              domain: orgDomain,
            });
            organization = org?.org?.id ?? "";
          }
        }
      }
    }

    if (authRequest && authRequest.prompt.includes(Prompt.CREATE)) {
      const registerUrl = new URL("/register", request.url);
      if (authRequest?.id) {
        registerUrl.searchParams.set("authRequestId", authRequest?.id);
      }
      if (organization) {
        registerUrl.searchParams.set("organization", organization);
      }

      return NextResponse.redirect(registerUrl);
    }

    // use existing session and hydrate it for oidc
    if (authRequest && sessions.length) {
      // if some accounts are available for selection and select_account is set
      if (authRequest.prompt.includes(Prompt.SELECT_ACCOUNT)) {
        const accountsUrl = new URL("/accounts", request.url);
        if (authRequest?.id) {
          accountsUrl.searchParams.set("authRequestId", authRequest?.id);
        }
        if (organization) {
          accountsUrl.searchParams.set("organization", organization);
        }

        return NextResponse.redirect(accountsUrl);
      } else if (authRequest.prompt.includes(Prompt.LOGIN)) {
        // if prompt is login
        const loginNameUrl = new URL("/loginname", request.url);
        if (authRequest?.id) {
          loginNameUrl.searchParams.set("authRequestId", authRequest?.id);
        }
        if (authRequest.loginHint) {
          loginNameUrl.searchParams.set("loginName", authRequest.loginHint);
        }
        if (organization) {
          loginNameUrl.searchParams.set("organization", organization);
        }
        return NextResponse.redirect(loginNameUrl);
      } else if (authRequest.prompt.includes(Prompt.NONE)) {
        // NONE prompt - silent authentication

        let selectedSession = findSession(sessions, authRequest);

        if (selectedSession && selectedSession.id) {
          const cookie = sessionCookies.find(
            (cookie) => cookie.id === selectedSession?.id,
          );

          if (cookie && cookie.id && cookie.token) {
            const { callbackUrl } = await oidcService.createCallback({
              authRequestId,
              callbackKind: {
                case: "session",
                value: {
                  sessionId: cookie?.id,
                  sessionToken: cookie?.token,
                },
              },
            });
            return NextResponse.redirect(callbackUrl);
          } else {
            return NextResponse.json(
              { error: "No active session found" },
              { status: 400 }, // TODO: check for correct status code
            );
          }
        } else {
          return NextResponse.json(
            { error: "No active session found" },
            { status: 400 }, // TODO: check for correct status code
          );
        }
      } else {
        // check for loginHint, userId hint sessions
        let selectedSession = findSession(sessions, authRequest);

        if (selectedSession && selectedSession.id) {
          const cookie = sessionCookies.find(
            (cookie) => cookie.id === selectedSession?.id,
          );

          if (cookie && cookie.id && cookie.token) {
            const { callbackUrl } = await oidcService.createCallback({
              authRequestId,
              callbackKind: {
                case: "session",
                value: {
                  sessionId: cookie?.id,
                  sessionToken: cookie?.token,
                },
              },
            });
            return NextResponse.redirect(callbackUrl);
          } else {
            const accountsUrl = new URL("/accounts", request.url);
            accountsUrl.searchParams.set("authRequestId", authRequestId);
            if (organization) {
              accountsUrl.searchParams.set("organization", organization);
            }
            return NextResponse.redirect(accountsUrl);
          }
        } else {
          const accountsUrl = new URL("/accounts", request.url);
          accountsUrl.searchParams.set("authRequestId", authRequestId);
          if (organization) {
            accountsUrl.searchParams.set("organization", organization);
          }
          return NextResponse.redirect(accountsUrl);
        }
      }
    } else {
      const loginNameUrl = new URL("/loginname", request.url);

      loginNameUrl.searchParams.set("authRequestId", authRequestId);
      if (authRequest?.loginHint) {
        loginNameUrl.searchParams.set("loginName", authRequest.loginHint);
        loginNameUrl.searchParams.set("submit", "true"); // autosubmit
      }

      if (organization) {
        loginNameUrl.searchParams.set("organization", organization);
      }

      return NextResponse.redirect(loginNameUrl);
    }
  } else {
    return NextResponse.json(
      { error: "No authRequestId provided" },
      { status: 500 },
    );
  }
}
