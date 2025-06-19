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
      icon: <Leaf className="h-10 w-10" />,
      title: "Food Waste to Fish Feed",
      description:
        "We collect organic waste and convert it via Black Soldier Fly farming into protein-rich fish feed that enhances fish growth and reduces environmental impact.",
      gradient: "from-[#00ADB5] to-[#180161]",
    },
    {
      icon: <Microscope className="h-10 w-10" />,
      title: "Bioconversion Technology",
      description:
        "Advanced Black Soldier Fly larvae cultivation for efficient protein conversion",
      gradient: "from-[#00ADB5] to-[#180161]",
    },
    {
      icon: <Recycle className="h-10 w-10" />,
      title: "Waste-to-Feed Process",
      description:
        "Proprietary technology converting food waste into high-quality aquaculture feed",
      gradient: "from-[#180161] to-[#00ADB5]",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Scalable Production",
      description:
        "Modular systems designed for easy scaling and replication across regions",
      gradient: "from-[#00ADB5] to-[#393E46]",
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Research & Development",
      description:
        "Continuous innovation backed by partnerships with premier research institutions",
      gradient: "from-[#393E46] to-[#180161]",
    },
  ]

  const highlights = [
    "Black Soldier Fly larvae bioconversion",
    "Automated waste processing systems",
    "Quality control and testing protocols",
    "Sustainable production methodologies",
  ]

  return (
    <section
      id="innovation"
      className="py-24 bg-gradient-to-br from-[#222831] via-[#393E46] to-[#180161] text-[#EEEEEE]"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#00ADB5]/20 to-[#180161]/20 backdrop-blur-sm border border-[#00ADB5]/30 rounded-full px-8 py-4 mb-8">
            <Crown className="h-6 w-6 text-[#00ADB5]" />
            <span className="text-lg font-bold bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
              Royal Innovation Excellence
            </span>
            <Sparkles className="h-6 w-6 text-[#180161]" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#EEEEEE] to-[#EEEEEE]/80 bg-clip-text text-transparent">Our</span>
            <br />
            <span className="bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-xl text-[#EEEEEE]/80 max-w-4xl mx-auto">
            Pioneering sustainable aquaculture through cutting-edge bioconversion and eco-driven waste transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Innovation Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {innovations.map((innovation, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#00ADB5]/20 to-[#180161]/20 rounded-2xl blur group-hover:blur-lg transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-[#393E46] to-[#222831] p-8 rounded-2xl border border-[#00ADB5]/20 group-hover:border-[#00ADB5]/40 transition-all duration-500 shadow-xl">
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${innovation.gradient} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                    />
                    <div
                      className={`relative bg-gradient-to-r ${innovation.gradient} p-4 rounded-full inline-block shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{innovation.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
                    {innovation.title}
                  </h3>
                  <p className="text-sm text-[#EEEEEE]/80 leading-relaxed">
                    {innovation.description}
                  </p>
                  <Star className="absolute top-3 right-3 h-4 w-4 text-[#00ADB5]/50 group-hover:text-[#00ADB5] transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Technology Highlights + Research */}
          <div className="space-y-10">
            <div className="bg-gradient-to-br from-[#00ADB5] via-[#180161] to-[#00ADB5] p-10 rounded-3xl shadow-xl border border-[#00ADB5]/30 relative">
              <h3 className="text-3xl font-bold mb-8 flex items-center space-x-3">
                <Lightbulb className="h-8 w-8" />
                <span>Technology Highlights</span>
              </h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    </div>
                    <span className="text-base">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#393E46] to-[#222831] p-8 rounded-2xl border-2 border-[#00ADB5]/20 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Microscope className="h-6 w-6 text-[#00ADB5]" />
                <h3 className="text-xl font-bold text-[#00ADB5]">Research Partnerships</h3>
              </div>
              <p className="text-sm text-[#EEEEEE]/80">
                Our innovation is backed by research with{" "}
                <span className="font-semibold text-[#00ADB5]">ICAR-CIFA</span> and{" "}
                <span className="font-semibold text-[#00ADB5]">IIT Bhubaneswar</span>, ensuring scientific rigor in every step.
              </p>
              <div className="flex space-x-4 mt-4">
                {["ICAR-CIFA", "IIT Bhubaneswar"].map((partner) => (
                  <span
                    key={partner}
                    className="bg-gradient-to-r from-[#00ADB5]/20 to-[#180161]/20 px-4 py-1 rounded-full text-sm font-medium text-[#00ADB5] border border-[#00ADB5]/30"
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
