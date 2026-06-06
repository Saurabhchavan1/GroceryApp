import React from 'react'
import Heading from '../Heading/Heading'
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { BsTruck } from "react-icons/bs";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";

// Step data
const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: 'Sourcing',
    para: 'It is a long established fact that a reader',
    icon: <PiPlant />
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: 'Manufacturing',
    para: 'It is a long established fact that a reader',
    icon: <PiFactory />
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: 'Quality Control',
    para: 'It is a long established fact that a reader',
    icon: <SlBadge />
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: 'Logistics',
    para: 'It is a long established fact that a reader',
    icon: <BsTruck />
  }
];

const Process = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-10 py-10 sm:py-16 md:py-20">

        {/* ✅ Centered Heading */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <Heading highlight="Our" Heading="Process" />
        </div>

        {/* ✅ Steps — all aligned in one row */}
        <div className="flex flex-wrap justify-center items-start gap-y-10 sm:gap-y-14 md:gap-y-0">
          {steps.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 md:w-1/4 px-4"
            >
              {/* Step Number */}
              <span className="flex justify-center items-center mx-auto w-16 h-16 sm:w-18 sm:h-18 text-6xl sm:text-7xl md:text-8xl bg-zinc-800 text-white rounded-full outline-offset-4 outline-zinc-800 outline-dashed">
                {item.number}
              </span>

              {/* Step Details */}
              <div className="flex items-center gap-x-4 sm:gap-x-5 mt-6 sm:mt-10">
                <span className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full">
                  {item.icon}
                </span>
                <div className="flex-1">
                  <h4 className="text-zinc-800 text-lg sm:text-xl md:text-2xl font-bold">
                    {item.title}
                  </h4>
                  <p className="text-zinc-600 mt-2 text-sm sm:text-base">
                    {item.para}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
