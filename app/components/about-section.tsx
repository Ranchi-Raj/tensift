import { Target, Crown, Sparkles, Award, Users } from "lucide-react"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-gradient-to-br from-[#f4f4f4] via-white to-[#f4f4f4] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00ADB5] to-[#180161]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00ADB5]/10 to-[#180161]/10 backdrop-blur-sm border border-[#00ADB5]/20 rounded-full px-4 py-2 mb-4 sm:mb-6">
            <Crown className="h-4 w-4 text-[#00ADB5]" />
            <span className="text-xs font-semibold bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
              About Our Excellence
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#222831] mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
              Tensift Farmers
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#393E46] max-w-2xl mx-auto leading-relaxed">
            Tensift Farmers Fertilizer Pvt. Ltd. is an innovative agri-tech startup from Odisha, India, transforming food
            and kitchen waste into high-quality, eco-friendly fish feed. Recognized by{" "}
            <span className="text-[#00ADB5] font-semibold">Startup Odisha</span> and{" "}
            <span className="text-[#00ADB5] font-semibold">DPIIT</span>, our breakthrough technology empowers farmers and
            protects the environment through sustainable circular economy practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Mission */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00ADB5]/10 to-[#180161]/10 rounded-2xl blur-xl" />
              <div className="relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#00ADB5]/20 shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-[#00ADB5] to-[#180161] p-2 rounded-full">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#222831]">Our Mission</h3>
                </div>
                <p className="text-sm sm:text-base text-[#393E46] leading-relaxed">
                  Our mission is to help farmers and the environment by creating nutrient-rich fish feed through the
                  Black Soldier Fly (BSF) bioconversion process — a zero-waste, sustainable method that turns organic
                  waste into valuable input. We aim to revolutionize aquaculture with eco-friendly, cost-effective
                  alternatives to traditional feed, ensuring a cleaner planet and prosperous farming with{" "}
                  <span className="text-[#180161] font-semibold">unmatched quality</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-[#00ADB5]/20 to-[#180161]/20 rounded-2xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-[#00ADB5] via-[#180161] to-[#222831] rounded-2xl p-6 sm:p-8 text-white shadow-2xl border border-[#00ADB5]/30">
              {/* Floating Icons */}
              <div className="absolute top-4 right-4">
                <Crown className="h-6 w-6 text-white/30" />
              </div>
              <div className="absolute bottom-4 left-4">
                <Sparkles className="h-5 w-5 text-white/30" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-6">
                  <Award className="h-7 w-7 text-white" />
                  <h3 className="text-xl sm:text-2xl font-bold">Our Vision</h3>
                </div>

                <p className="text-sm sm:text-base leading-relaxed mb-6 text-white/90">
                  To become the leading provider of sustainable aquaculture solutions in South Asia, creating a circular
                  economy that benefits farmers, communities, and the environment with
                  <span className="text-white font-semibold"> exceptional standards</span>.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "500+", label: "Farmers Supported", icon: <Users className="h-5 w-5" /> },
                    { number: "2", label: "Countries Served", icon: <Crown className="h-5 w-5" /> },
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                        <div className="flex justify-center mb-2">{stat.icon}</div>
                        <div className="text-xl font-bold mb-1">{stat.number}</div>
                        <div className="text-xs sm:text-sm opacity-90 font-medium">{stat.label}</div>
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
