import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="h-screen flex items-center">
      <div className="flex w-full ">
        <div className="w-1/2 p-8 ">
          
          <h2 className="w-[496px] mt-5 font-serif text-[40px] leading-[65.8px] tracking-wider h-[189] top-316px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h2>
          <p className="font-serif text-xl text-gray-700 mt-5 w-[500px] leading-relaxed">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="mt-5 py-4 px-8 rounded-tl-lg bg-[#A29875] text-white font-libre-bodoni text-lg leading-[37.5px]">
            Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="w-[380.1px] md:w-[400px] lg:w-[462px] h-auto mt-10 lg:mt-0 lg:ml-16 ">
          <div className="border-4 border-white rounded-tl-[150px] rounded-br-[200px] overflow-hidden w-[490px] h-[667px]">
            <Image
              src="/rs-layer-wrap ⏵ rs-layer.png"
              alt="image"
              width={380.1}
              height={525.43}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
