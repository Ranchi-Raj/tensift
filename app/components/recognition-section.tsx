import { Award, CheckCircle, Star, Trophy, Crown, Medal, Sparkles } from "lucide-react"

export default function RecognitionSection() {
  const recognitions = [
    {
      icon: <CheckCircle className="h-10 w-10" />,
      title: "Startup Odisha Registered",
      description: "Officially registered under Startup Odisha initiative",
      gradient: "from-[#00ADB5] to-[#180161]",
      badge: "Government Recognition",
    },
    {
      icon: <Star className="h-10 w-10" />,
      title: "DPIIT Startup India Recognition",
      description: "Recognized by Department for Promotion of Industry and Internal Trade",
      gradient: "from-[#180161] to-[#00ADB5]",
      badge: "National Recognition",
    },
    {
      icon: <Trophy className="h-10 w-10" />,
      title: "Technology Incubated",
      description: "Incubated with ICAR-CIFA and IIT Bhubaneswar",
      gradient: "from-[#00ADB5] to-[#393E46]",
      badge: "Academic Excellence",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Award-Winning Innovation",
      description: "Supporting farmers & sustainable aquaculture in India & Nepal",
      gradient: "from-[#393E46] to-[#180161]",
      badge: "Innovation Award",
    },
  ]

  return (
    <section
      id="recognition"
      className="py-24 bg-gradient-to-br from-[#00ADB5] to-[#180161] text-white relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-8">
            <Crown className="h-6 w-6 text-white" />
            <span className="text-lg font-bold text-white/80">
              Royal Recognition & Achievements
            </span>
            <Medal className="h-6 w-6 text-white" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Recognition &</span>
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Our commitment to innovation and sustainability has earned us recognition from leading institutions and
            government bodies, establishing us as <span className="text-white font-semibold">industry leaders</span>.
          </p>
        </div>

        {/* Recognition Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {recognitions.map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/20 px-4 py-1 rounded-full text-xs font-bold text-white border border-white/30">
                    {item.badge}
                  </div>
                </div>

                {/* Icon */}
                <div className="relative mb-8 mt-4">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
                  />
                  <div
                    className={`relative bg-gradient-to-r ${item.gradient} p-6 rounded-full inline-block shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{item.icon}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{item.description}</p>

                {/* Decorative Icon */}
                <div className="absolute top-4 right-4">
                  <Sparkles className="h-4 w-4 text-white/30 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-8 bg-white/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white/10 backdrop-blur-md p-12 rounded-3xl shadow-2xl border border-white/10">
             
              <div className="absolute top-6 left-6">
                <Crown className="h-8 w-8 text-white/20" />
              </div>
              <div className="absolute top-6 right-6">
                <Medal className="h-8 w-8 text-white/20" />
              </div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <Sparkles className="h-6 w-6 text-white/20" />
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Trusted by Industry Leaders</h3>
                <p className="text-xl text-white/80 mb-6">
                  Backed by premier institutions and government recognition
                </p>
                <div className="flex justify-center space-x-8">
                  {["Excellence", "Innovation", "Sustainability", "Quality"].map((value, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 mb-2 border border-white/20">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-white/90">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
