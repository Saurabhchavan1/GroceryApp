import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaSeedling, FaLeaf, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const values = [
    {
      id: 1,
      title: "Trust",
      Para: "It is a long established fact that a reader will be distracted by the readable.",
      icon: <FaHeart />,
    },
    {
      id: 2,
      title: "Always Fresh",
      Para: "It is a long established fact that a reader will be distracted by the readable.",
      icon: <FaLeaf />,
    },
    {
      id: 3,
      title: "Food Safety",
      Para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <FaShieldAlt />,
    },
    {
      id: 4,
      title: "100% Organic",
      Para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <FaSeedling />,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <Heading highlight="Our" Heading="Values" />

        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between items-center mt-10">
          {/* Left values */}
          <div className="flex flex-col gap-10">
            {values.slice(0, 2).map((item) =>(
              <div key={item.id} className="flex items-center gap-5 flex-row-reverse text-right">
                <span className="flex justify-center items-center text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-12 h-12 rounded-full">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-zinc-800 text-2xl font-bold">{item.title}</h3>
                  <p className="text-zinc-600">{item.Para}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center image */}
          <img src={Basket} alt="Basket" className="w-[45%]" />

          {/* Right values */}
          <div className="flex flex-col gap-10">
            {values.slice(2).map((item) => (
              <div key={item.id} className="flex items-center gap-5">
                <span className="flex justify-center items-center text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-12 h-12 rounded-full">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-zinc-800 text-2xl font-bold">{item.title}</h3>
                  <p className="text-zinc-600">{item.Para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-8 mt-10 lg:hidden">
          {values.map((item) => (
            <div key={item.id} className="flex items-center gap-5">
              <span className="flex justify-center items-center text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-12 h-12 rounded-full">
                {item.icon}
              </span>
              <div>
                <h3 className="text-zinc-800 text-2xl font-bold">{item.title}</h3>
                <p className="text-zinc-600">{item.Para}</p>
              </div>
            </div>
          ))}

          {/* Image in middle on mobile */}
          <img src={Basket} alt="Basket" className="w-[70%] mx-auto mt-5" />
        </div>
      </div>
    </section>
  );
};

export default Values;
