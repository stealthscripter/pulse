export default function GameBar() {
  return (
    <div className="flex items-center px-4 sm:px-8 md:px-16 relative mt-10">
      <div className="border border-amber-700 size-12 sm:size-14 md:size-16 rounded-full relative z-10">
        <div className="border border-amber-700 size-[calc(100%-4px)] sm:size-[calc(100%-6px)] md:size-[calc(100%-8px)] rounded-full bg-amber-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="h-10 sm:h-11 md:h-12 bg-amber-500 flex-1 -ms-6 sm:-ms-8 md:-ms-10 rounded-full"></div>
    </div>
  );
}
