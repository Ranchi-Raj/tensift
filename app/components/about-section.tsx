import { Target, Crown, Sparkles, Award, Users } from "lucide-react"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-[#EEEEEE] via-white to-[#EEEEEE] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00ADB5] to-[#180161]"></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00ADB5]/10 to-[#180161]/10 backdrop-blur-sm border border-[#00ADB5]/20 rounded-full px-6 py-3 mb-6">
            <Crown className="h-5 w-5 text-[#00ADB5]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
              About Our Excellence
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-[#222831] mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
              Tensift Farmers
            </span>
          </h2>
          <p className="text-xl text-[#393E46] max-w-4xl mx-auto leading-relaxed">
            Tensift Farmers Fertilizer Pvt. Ltd. is an innovative agri-tech startup from Odisha, India, transforming food and kitchen waste into high-quality, eco-friendly fish feed. Recognized by{" "}
            <span className="text-[#00ADB5] font-semibold">Startup Odisha</span> and{" "}
            <span className="text-[#00ADB5] font-semibold">DPIIT</span>, Government of India, our breakthrough technology empowers farmers and protects the environment through sustainable circular economy practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mx-auto w-full">
          {/* Content */}
          <div className="space-y-10">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#00ADB5]/10 to-[#180161]/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl border-2 border-[#00ADB5]/20 shadow-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-[#00ADB5] to-[#180161] p-3 rounded-full">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#222831]">Our Royal Mission</h3>
                </div>
                <p className="text-lg text-[#393E46] leading-relaxed">
                  Our mission is to help farmers, fish growers, and the environment by creating nutrient-rich fish feed through the Black Soldier Fly (BSF) bioconversion process — a zero-waste, sustainable method that turns organic waste into valuable farming input. We aim to revolutionize aquaculture with eco-friendly, cost-effective, and nutritionally rich alternatives to traditional feed systems, ensuring a cleaner planet and prosperous farming community with{" "}
                  <span className="text-[#180161] font-semibold">unmatched quality</span>.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            {/* <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Innovation",
                  desc: "Cutting-edge bioconversion technology",
                  gradient: "from-[#00ADB5] to-[#180161]",
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Community",
                  desc: "Supporting farmers across regions",
                  gradient: "from-[#180161] to-[#00ADB5]",
                },
                {
                  icon: <Leaf className="h-8 w-8" />,
                  title: "Sustainability",
                  desc: "Eco-friendly waste management",
                  gradient: "from-[#00ADB5] to-[#393E46]",
                },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#00ADB5]/20 to-[#180161]/20 rounded-2xl blur group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-[#00ADB5]/20 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <div
                      className={`bg-gradient-to-r ${item.gradient} p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <h4 className="font-bold text-[#222831] mb-3 text-lg">{item.title}</h4>
                    <p className="text-sm text-[#393E46] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Vision Card */}
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-[#00ADB5]/30 to-[#180161]/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-[#00ADB5] via-[#180161] to-[#222831] rounded-3xl p-12 text-white shadow-2xl border border-[#00ADB5]/30">
              
              <div className="absolute top-6 right-6">
                <Crown className="h-8 w-8 text-white/30" />
              </div>
              <div className="absolute bottom-6 left-6">
                <Sparkles className="h-6 w-6 text-white/30" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <Award className="h-10 w-10 text-white" />
                  <h3 className="text-3xl font-bold">Our Royal Vision</h3>
                </div>

                <p className="text-xl leading-relaxed mb-10 text-white/90">
                  To become the leading provider of sustainable aquaculture solutions in South Asia, creating a circular
                  economy that benefits farmers, communities, and the environment with
                  <span className="text-white font-semibold"> exceptional standards</span>.
                </p>

                <div className="grid grid-cols-2 gap-8">
                  {[
                    { number: "500+", label: "Farmers Supported", icon: <Users className="h-6 w-6" /> },
                    { number: "2", label: "Countries Served", icon: <Crown className="h-6 w-6" /> },
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                        <div className="flex justify-center mb-3">{stat.icon}</div>
                        <div className="text-4xl font-bold mb-2">{stat.number}</div>
                        <div className="text-sm opacity-90 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
