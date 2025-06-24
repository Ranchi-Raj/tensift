"use client"

import {
  Lightbulb,
  Microscope,
  Recycle,
  TrendingUp,
  Crown,
  Star,
  Sparkles,
  Leaf,
} from "lucide-react"

export default function InnovationSection() {
  const innovations = [
    {
      icon: <Leaf className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Food Waste to Fish Feed",
      description:
        "We convert organic waste using BSF farming into protein-rich fish feed that enhances fish growth and reduces environmental impact.",
      gradient: "from-[#00ADB5] to-[#180161]",
    },
    {
      icon: <Microscope className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Bioconversion Technology",
      description:
        "Efficient BSF larvae cultivation for high-yield protein conversion.",
      gradient: "from-[#00ADB5] to-[#180161]",
    },
    {
      icon: <Recycle className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Waste-to-Feed Process",
      description:
        "Tech that turns food waste into premium aquaculture feed.",
      gradient: "from-[#180161] to-[#00ADB5]",
    },
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Scalable Production",
      description:
        "Modular design for quick setup and regional expansion.",
      gradient: "from-[#00ADB5] to-[#393E46]",
    },
    {
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Research & Development",
      description:
        "Backed by top institutions ensuring continuous scientific innovation.",
      gradient: "from-[#393E46] to-[#180161]",
    },
  ]

  const highlights = [
    "BSF larvae bioconversion",
    "Automated waste processing",
    "Quality assurance protocols",
    "Eco-conscious production",
  ]

  return (
    <section
      id="innovation"
      className="py-16 sm:py-20 bg-gradient-to-br from-[#00ADB5] to-[#180161] text-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
            <Crown className="h-4 w-4 text-white" />
            <span className="text-xs sm:text-sm font-bold text-white/80">
              Royal Innovation
            </span>
            <Sparkles className="h-4 w-4 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-white">Our </span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Transforming food waste into value through sustainable bioconversion and cutting-edge aquaculture solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Innovation Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {innovations.map((innovation, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 sm:-inset-2 bg-white/10 rounded-2xl blur-md group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-white/5 p-6 sm:p-7 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500 backdrop-blur-md shadow-lg">
                  <div className="relative mb-4">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${innovation.gradient} rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
                    />
                    <div
                      className={`relative bg-gradient-to-r ${innovation.gradient} p-3 sm:p-4 rounded-full inline-block shadow-xl group-hover:scale-105 transition-transform duration-300`}
                    >
                      <div className="text-white">{innovation.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">
                    {innovation.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {innovation.description}
                  </p>
                  <Star className="absolute top-3 right-3 h-3 w-3 text-white/30 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Tech Highlights + Research */}
          <div className="space-y-8 sm:space-y-10">
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-white/10 relative">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center space-x-3">
                <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7" />
                <span>Technology Highlights</span>
              </h3>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-white/20 p-1.5 rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-xs sm:text-sm text-white/80">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/10 shadow-xl">
              <div className="flex items-center space-x-3 mb-3">
                <Microscope className="h-5 w-5 text-white" />
                <h3 className="text-base sm:text-lg font-bold text-white">Research Partnerships</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/80">
                Backed by{" "}
                <span className="font-semibold text-white">ICAR-CIFA</span> and{" "}
                <span className="font-semibold text-white">IIT Bhubaneswar</span> to ensure scientific rigor in every step.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["ICAR-CIFA", "IIT Bhubaneswar"].map((partner) => (
                  <span
                    key={partner}
                    className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white border border-white/20"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
