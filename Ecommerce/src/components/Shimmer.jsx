import React from "react";

function Shimmer() {
  return (
    <>
      {Array(5).fill().map((_, i) => (
        <div className="p-5" key={i}>
          <div className="animate-pulse flex flex-col space-x-4">
            <div className="rounded my-2 border w-full h-[150px] bg-slate-700/40"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Shimmer;