// components/OurImpact.tsx

import React from "react";

const OurImpact = () => {
  const points = [
    "🌱 Diverting tons of food waste from landfills",
    "🌱 Reducing greenhouse gas emissions",
    "🌱 Supporting thousands of farmers with affordable, sustainable inputs",
    "🌱 Building a greener, healthier food system"
  ];

  return (
    <section id="impact" className="relative bg-white text-gray-800 py-16 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#00ADB5] mb-6 text-center">
          <span className="text-[#222831]">Our</span> <span className="bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">Impact</span>
        </h2>

        <p className="text-lg sm:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          In partnership with <span className="font-semibold text-[#00ADB5]">ICAR-CIFA</span>, <span className="font-semibold text-[#00ADB5]">ICAR-CRRI</span>, and through incubation with <span className="font-semibold text-[#00ADB5]">IITs</span>, Tensift is pioneering this model in India and Nepal—serving farmers, improving food systems, and creating green jobs.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-800">
          {points.map((point, idx) => (
            <li
              key={idx}
              className="bg-white/70 backdrop-blur-lg border border-black/10 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurImpact;
