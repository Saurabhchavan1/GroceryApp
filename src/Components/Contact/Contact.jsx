import React from "react";
import Heading from "../Heading/Heading"; // optional if you have a Heading component

const Contact = () => {
  return (
    <section className="w-full pt-[120px] pb-16 bg-orange-50">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-600">Contact Us</h1>
        <p className="text-zinc-700 mt-3 max-w-lg mx-auto">
          We’d love to hear from you! Feel free to reach out with any questions,
          feedback, or collaboration ideas.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-8">
        {/* Contact Form */}
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-orange-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-orange-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full border border-orange-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-b from-red-600 to-orange-400 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-2xl font-bold text-orange-600">
            Get In Touch
          </h2>
          <p className="text-zinc-700">
            Have any questions about our products or services? Feel free to get in
            touch via phone, email, or visit our office.
          </p>

          <div>
            <p className="text-zinc-800 font-semibold">📍 Address:</p>
            <p className="text-zinc-700">123 Grocery Street, Pune, Maharashtra, India</p>
          </div>

          <div>
            <p className="text-zinc-800 font-semibold">📞 Phone:</p>
            <p className="text-zinc-700">+91 98765 43210</p>
          </div>

          <div>
            <p className="text-zinc-800 font-semibold">✉️ Email:</p>
            <p className="text-zinc-700">support@grocify.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
