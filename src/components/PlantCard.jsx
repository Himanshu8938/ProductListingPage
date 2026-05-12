import React from "react";

const PlantCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f0f0f] p-6">
      <div className="relative group">
        {/* 1. The Plant - Floating high with a deep shadow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-30 w-56 transition-transform duration-500 group-hover:scale-110">
          <img
            src="https://images.unsplash.com/photo-1637410313172-87035414bc91?q=80&w=1000&auto=format&fit=crop"
            alt="Aglaonema"
            className="drop-shadow-[0_25px_25px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* 2. The "Mask" - This hides the top border line where the plant sits */}
        <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 z-20 w-40 h-8 bg-[#0f0f0f]"></div>

        {/* 3. The Main Card */}
        <div
          className="relative w-80 h-[420px] bg-white/10 backdrop-blur-2xl rounded-[45px] p-8 flex flex-col justify-end shadow-2xl overflow-hidden
                        border-b border-l border-r border-white/20"
        >
          {/* Top Border Pieces - These only draw the border on the left and right of the dip */}
          <div className="absolute top-0 left-0 w-[22%] h-[1px] bg-white/20"></div>
          <div className="absolute top-0 right-0 w-[22%] h-[1px] bg-white/20"></div>

          {/* Content Layer */}
          <div className="relative z-10">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
              Indoor Plant
            </p>

            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-white text-3xl font-light leading-tight">
                  Aglaonema
                </h2>
                <span className="text-white/60 text-lg font-medium">plant</span>
              </div>
              <div className="mb-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-white/40 hover:stroke-white transition-colors cursor-pointer"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <button
              className="w-full py-4 bg-transparent border border-white/20 rounded-2xl text-white text-sm font-semibold 
                             hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-95"
            >
              Buy Now
            </button>

            {/* Pagination dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              <div className="h-0.5 w-6 bg-white rounded-full"></div>
              <div className="h-1 w-1 bg-white/20 rounded-full"></div>
              <div className="h-1 w-1 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
