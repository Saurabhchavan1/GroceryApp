import React from "react";

const Processpage = () => {
  const steps = [
    {
      id: 1,
      title: "Browse Products",
      desc: "Explore a wide range of fresh groceries, fruits, vegetables, and essentials from our catalog.",
      icon: "🛒",
    },
    {
      id: 2,
      title: "Add to Cart",
      desc: "Select the items you need and add them to your cart with just one click.",
      icon: "🧺",
    },
    {
      id: 3,
      title: "Secure Checkout",
      desc: "Proceed to checkout and make a secure payment through multiple trusted methods.",
      icon: "💳",
    },
    {
      id: 4,
      title: "Fast Delivery",
      desc: "Sit back and relax while we deliver your order fresh and on time to your doorstep.",
      icon: "🚚",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-[16vh] pb-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
          Our <span className="text-orange-500">Process</span>
        </h1>
        <p className="text-zinc-600 text-lg md:text-xl">
          Simple steps to make your grocery shopping fast, easy, and enjoyable.
        </p>
      </div>

      {/* Steps */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
          >
            {/* Icon */}
            <div className="text-5xl mb-4">{step.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-orange-500 mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-zinc-600 text-sm leading-relaxed">{step.desc}</p>

            {/* Step Number */}
            <div className="mt-6 flex justify-center">
              <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                {step.id}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-zinc-800 mb-4">
          Start Your <span className="text-orange-500">Grocify</span> Journey Today
        </h2>
        <p className="text-zinc-600 mb-6">
          Shop smarter, eat healthier, and save time — we deliver freshness right to your door.
        </p>
        <button className="bg-gradient-to-b from-red-600 to-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Processpage;
