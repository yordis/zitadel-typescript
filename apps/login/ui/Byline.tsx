import Theme from "./Theme";

export default function Byline() {
  return (
    <div className="flex items-center justify-between w-full p-3.5 lg:px-5 lg:py-3">
      <div className="flex items-center space-x-1.5">
        <div className="text-sm text-gray-600">By</div>
        <div className="text-sm font-semibold">ZITADEL</div>
      </div>
      <Theme />
    </div>
  );
}