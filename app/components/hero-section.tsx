import { Crown, Sparkles } from "lucide-react";
import {MoveRight} from "lucide-react"
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f3e5f5] to-[#e0f7fa] text-gray-800 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-black/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-black/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-black/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-0 flex flex-col min-h-screen">
        {/* Full-width Banner */}
       <div className="w-full bg-black/90 backdrop-blur-2xl text-white py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full text-center">
        {/* Company Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#00ADB5] via-[#00FFF5] to-[#180161] bg-clip-text text-transparent">
          TENSIFT FARMERS
        </h1>

        {/* Highlight Text */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug">
          Converting Food Waste{" "}
          <span className="text-3xl">
            <MoveRight className="inline-block text-3xl" />
          </span>{" "}
          Fertilizer & Animal Feed
        </h2>

        <p className="mt-4 text-base sm:text-lg text-gray-200 font-light max-w-3xl mx-auto">
          Using innovative bioconversion tech to empower sustainable aquaculture and farming solutions.
        </p>
      </div>

      {/* Animated Button */}
      <div className="mt-10">
        <a href="#work" className="transition-all duration-300">
          <button className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-gradient-to-r from-[#00ADB5] to-[#180161] rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-[#00ADB5] opacity-25"></span>
            <span className="relative z-10">Work with us</span>
          </button>
        </a>
      </div>
    </div>

        {/* Compact Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 max-w-5xl mx-auto w-full">
          {/* Description Paragraph Box */}
          <div className="w-full text-center relative mb-8 sm:mb-12">
            <div className="absolute -inset-4 bg-black/5 rounded-2xl blur-xl" />
            <p className="relative text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-black/10">
              <span className="font-semibold text-black">Revolutionizing</span> rural livelihoods by transforming
              food waste into value — from organic fertilizers to premium fish feed.{" "}
              <span className="font-bold text-black">Tensift Farmers</span> proudly supports farmers across India with
              scalable, eco-friendly solutions that deliver{" "}
              <span className="text-black font-semibold">exceptional results</span>.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl mb-8 sm:mb-12">
            {[
              { number: "500+", label: "Farmers Served" },
              { number: "25%", label: "Cost Reduction" },
              { number: "100%", label: "Sustainable" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-black/5 rounded-xl blur group-hover:blur-lg transition-all duration-300" />
                  <div className="relative bg-white/60 backdrop-blur-md p-4 rounded-xl border border-black/10 group-hover:border-black/20 transition-all duration-300">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="relative w-full group">
            <div className="absolute -inset-6 bg-black/5 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-white/60 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-black/10 group-hover:border-black/20 transition-all duration-500">
              <div className="aspect-video bg-white/10 flex items-center justify-center relative overflow-hidden">
                {/* Animated Blobs */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-black/10 rounded-full blur-xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-black/5 rounded-full blur-xl animate-pulse delay-1000" />
                </div>
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  poster="/map.png"
                  controls
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-black/10 p-2 sm:p-3 rounded-full shadow-xl animate-bounce">
              <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-black/10 p-2 sm:p-3 rounded-full shadow-xl animate-bounce delay-500">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}