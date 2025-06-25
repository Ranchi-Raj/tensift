// components/WorkWithUs.tsx

import React from "react";

const WorkWithUs = () => {
  return (
    <section id="work" className="relative bg-gradient-to-br from-[#00ADB5] to-[#180161] text-white backdrop-blur-sm border-t border-white/10 py-16 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold bg-white bg-clip-text text-transparent mb-6 text-center">
          Work With Us
        </h2>

        <p className="text-lg sm:text-xl text-center text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
          We welcome collaborations with <span className="font-semibold text-[#69dde3]">municipalities, food businesses, hotels</span>, and <span className="font-semibold text-[#69dde3]">restaurants</span> to expand this movement. If you’re passionate about sustainability—partner with us to close the loop between food waste and food production.
        </p>

        <p className="text-lg sm:text-xl text-center text-gray-300 max-w-3xl mx-auto leading-relaxed">
          <span className="font-semibold text-[#69dde3]">Contact us</span> to learn more about our animal feed products and sustainable waste management services.
        </p>
      </div>
    </section>
  );
};

export default WorkWithUs;
