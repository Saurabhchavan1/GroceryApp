import React from "react";

const About = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-[16vh] pb-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
          About <span className="text-orange-500">Grocify</span>
        </h1>
        <p className="text-zinc-600 text-lg md:text-xl">
          Your trusted destination for fresh groceries and daily essentials.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://img.freepik.com/free-photo/healthy-food-basket_23-2148536583.jpg"
          alt="About Grocify"
          className="rounded-2xl shadow-lg w-full"
        />

        <div>
          <h2 className="text-2xl font-semibold text-zinc-800 mb-4">
            Who We Are
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            At <span className="font-semibold text-orange-500">Grocify</span>, we
            are committed to providing you with the highest-quality groceries at
            affordable prices. We believe healthy eating starts with access to
            fresh and natural products.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Our mission is to make your shopping experience convenient,
            reliable, and enjoyable. Whether you’re shopping for fruits,
            vegetables, grains, or packaged goods, we ensure everything you need
            is just a click away.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            With a growing customer base, Grocify continues to expand its range
            of products and services — because your satisfaction is our top
            priority.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-zinc-800 mb-8">
          Our <span className="text-orange-500">Core Values</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Quality", desc: "Fresh and premium products always." },
            { title: "Trust", desc: "We build lasting relationships." },
            { title: "Convenience", desc: "Shop from anywhere, anytime." },
            { title: "Sustainability", desc: "Supporting eco-friendly sourcing." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-orange-500 mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
