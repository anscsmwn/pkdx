const Loading = () => {
  return (
    <div className="space-y-3 max-w-xs">
      <div className="grid grid-cols-3 gap-4">
        <div className="h-2 bg-[#D4D4D4]/20 rounded col-span-2"></div>
        <div className="h-2 bg-[#D4D4D4]/20 rounded col-span-1"></div>
      </div>
      <div className="h-2 bg-[#D4D4D4]/20 rounded"></div>
    </div>
  );
};

export default Loading;
