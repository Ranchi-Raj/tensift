"use client";

import { Crown, Sparkles, Fish, Waves } from "lucide-react";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
     <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#0077be] via-[#00a8cc] to-[#4dd0e1] text-white overflow-hidden"
    >
      {/* Animated Water Background - Fixed */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        {/* Water surface effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-blue-900/20"></div>
        
        {/* Improved Floating Fish Animations */}
        <div className="absolute top-[10%] left-[10%] animate-float z-50">
          <Fish className="h-8 w-8 text-white/30" />
        </div>
        <div className="absolute top-[30%] right-[15%] animate-float-delayed z-50">
          <Fish className="h-6 w-6 text-white/20" />
        </div>
        <div className="absolute bottom-[30%] left-[25%] animate-float-slow z-50">
          <Fish className="h-10 w-10 text-white/25" />
        </div>
        <div className="absolute top-[40%] right-[30%] animate-float z-50">
          <Fish className="h-7 w-7 text-white/30" />
        </div>
        <div className="absolute bottom-[40%] right-[10%] animate-float-delayed z-50">
          <Fish className="h-9 w-9 text-white/20" />
        </div>
        
        {/* Improved Floating Bubbles */}
        <div className="absolute top-[20%] left-[30%] w-4 h-4 bg-white/10 rounded-full animate-bubble z-40"></div>
        <div className="absolute bottom-[25%] right-[25%] w-6 h-6 bg-white/15 rounded-full animate-bubble-delayed z-40"></div>
        <div className="absolute top-[75%] left-[50%] w-3 h-3 bg-white/20 rounded-full animate-bubble-slow z-40"></div>
        
        {/* Improved Wave Effects */}
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-blue-900/30 to-transparent">
            <Waves className="absolute bottom-4 left-4 h-8 w-8 text-white/20 animate-wave" />
            <Waves className="absolute bottom-6 right-8 h-6 w-6 text-white/15 animate-wave-delayed" />
          </div>
        </div>
      </div>

      {/* Enhanced Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-0 flex flex-col min-h-screen">
        {/* Enhanced Full-width Banner */}
        <div className="w-full bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-3xl text-white py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center justify-center border-b border-white/10">
          <div className="max-w-6xl w-full text-center relative">
            
            {/* Floating Elements Around Title */}
            <div className="absolute -top-8 left-1/4 animate-float">
              <div className="w-3 h-3 bg-cyan-400/50 rounded-full blur-sm"></div>
            </div>
            <div className="absolute -top-4 right-1/3 animate-float-delayed">
              <div className="w-2 h-2 bg-blue-300/60 rounded-full blur-sm"></div>
            </div>

            {/* Company Name with Enhanced Styling */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-[#00e5ff] via-[#40c4ff] to-[#0091ea] bg-clip-text text-transparent drop-shadow-2xl">
              TENSIFT FARMERS
            </h1>

            {/* Highlighted Conversion Process */}
            <div className="relative mb-6 p-6 sm:p-8 bg-gradient-to-r from-white/10 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
              <h2 className="relative text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Converting{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-black">
                  Food Waste
                </span>{" "}
                <span className="inline-flex items-center mx-2 sm:mx-4">
                  <MoveRight className="h-8 w-8 sm:h-12 sm:w-12 text-cyan-400 animate-pulse drop-shadow-lg" />
                </span>{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-black">
                  Fertilizer
                </span>{" "}
                &{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent font-black">
                  Animal Feed
                </span>
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-cyan-100 font-light max-w-4xl mx-auto leading-relaxed">
              Using innovative bioconversion technology to empower sustainable aquaculture and farming solutions across India.
            </p>
          </div>

          {/* Enhanced Animated Button */}
          <div className="mt-12">
            <a href="#work" className="transition-all duration-500 group">
              <button className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-white bg-gradient-to-r from-[#00e5ff] via-[#40c4ff] to-[#0091ea] rounded-full shadow-2xl hover:scale-110 hover:shadow-cyan-500/25 transition-all duration-500 group-hover:animate-pulse">
                <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-cyan-400 opacity-20 group-hover:opacity-30"></span>
                <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-cyan-400 opacity-10 animation-delay-1000"></span>
                <span className="relative z-10 text-lg">Work with us</span>
                <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </a>
          </div>
        </div>

        {/* Enhanced Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto w-full">
          
          {/* Enhanced Description Box */}
          <div className="w-full text-center relative mb-12 sm:mb-16">
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/90 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-white/30 shadow-2xl">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed">
                <span className="font-black text-blue-600 text-xl sm:text-2xl">Revolutionizing</span> rural livelihoods by transforming
                food waste into value — from organic fertilizers to premium fish feed.{" "}
                <span className="font-black text-cyan-600 text-xl sm:text-2xl">Tensift Farmers</span> proudly supports farmers across India with
                scalable, eco-friendly solutions that deliver{" "}
                <span className="text-emerald-600 font-black text-xl sm:text-2xl">exceptional results</span>.
              </p>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-4xl mb-12 sm:mb-16">
            {[
              { number: "500+", label: "Farmers Served", color: "from-green-400 to-emerald-500" },
              { number: "25%", label: "Cost Reduction", color: "from-blue-400 to-cyan-500" },
              { number: "100%", label: "Sustainable", color: "from-purple-400 to-pink-500" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative transform hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur group-hover:blur-lg transition-all duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/40 group-hover:border-white/60 transition-all duration-500 shadow-xl">
                    <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-base sm:text-lg text-gray-700 font-semibold">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Video Section */}
          <div className="relative w-full group max-w-5xl">
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700"></div>
            <div className="relative bg-white/20 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/30 group-hover:border-white/50 transition-all duration-700">
              <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center relative overflow-hidden">
                
                {/* Enhanced Animated Elements */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-400/15 rounded-full blur-xl animate-pulse delay-1000" />
                </div>
                
                <video
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  poster="/map.png"
                  controls
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Enhanced Floating Icons */}
            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 sm:p-4 rounded-full shadow-2xl animate-bounce">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-gradient-to-r from-pink-400 to-purple-500 p-3 sm:p-4 rounded-full shadow-2xl animate-bounce delay-500">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          25% { 
            transform: translate(-5px, -15px) rotate(5deg); 
          }
          50% { 
            transform: translate(5px, -20px) rotate(-5deg); 
          }
          75% { 
            transform: translate(-5px, -15px) rotate(5deg); 
          }
        }
        
        @keyframes float-delayed {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          25% { 
            transform: translate(5px, -10px) rotate(-3deg); 
          }
          50% { 
            transform: translate(-5px, -15px) rotate(3deg); 
          }
          75% { 
            transform: translate(5px, -10px) rotate(-3deg); 
          }
        }
        
        @keyframes float-slow {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          50% { 
            transform: translate(0, -10px) rotate(2deg); 
          }
        }
        
        @keyframes bubble {
          0% { 
            transform: translateY(0) scale(1); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-30px) scale(1.1); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-60px) scale(0.8); 
            opacity: 0; 
          }
        }
        
        @keyframes bubble-delayed {
          0% { 
            transform: translateY(0) scale(1); 
            opacity: 0.5; 
          }
          50% { 
            transform: translateY(-25px) scale(1.1); 
            opacity: 0.8; 
          }
          100% { 
            transform: translateY(-50px) scale(0.8); 
            opacity: 0; 
          }
        }
        
        @keyframes bubble-slow {
          0% { 
            transform: translateY(0) scale(1); 
            opacity: 0.6; 
          }
          50% { 
            transform: translateY(-20px) scale(1.1); 
            opacity: 0.9; 
          }
          100% { 
            transform: translateY(-40px) scale(0.8); 
            opacity: 0; 
          }
        }
        
        @keyframes wave {
          0%, 100% { 
            transform: translateX(0) scale(1); 
          }
          50% { 
            transform: translateX(5px) scale(1.1); 
          }
        }
        
        @keyframes wave-delayed {
          0%, 100% { 
            transform: translateX(0) scale(1); 
          }
          50% { 
            transform: translateX(-5px) scale(1.1); 
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-bubble {
          animation: bubble 5s ease-in infinite;
        }
        
        .animate-bubble-delayed {
          animation: bubble-delayed 6s ease-in infinite;
        }
        
        .animate-bubble-slow {
          animation: bubble-slow 7s ease-in infinite;
        }
        
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
        
        .animate-wave-delayed {
          animation: wave-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
}
