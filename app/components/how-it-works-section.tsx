import { Trash2, Bug, Fish, Truck, Crown, Star, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Trash2 className="h-12 w-12" />,
      title: "Collection of Food & Kitchen Waste",
      description: "We collect organic waste from restaurants, hotels, and food processing units with royal efficiency",
      gradient: "from-red-500 via-orange-500 to-red-600",
      badge: "Step 1"
    },
    {
      icon: <Bug className="h-12 w-12" />,
      title: "Bioconversion using Black Soldier Fly Larvae",
      description: "Waste is processed through our advanced bioconversion facility using premium BSF larvae technology",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      badge: "Step 2"
    },
    {
      icon: <Fish className="h-12 w-12" />,
      title: "Larvae Processed into Nutrient-Rich Fish Feed",
      description: "Mature larvae are harvested and processed into high-protein fish feed with royal quality standards",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      badge: "Step 3"
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Feed Supplied to Fish Farmers",
      description: "Premium feed is distributed to fish farmers across India and Nepal with excellence guarantee",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      badge: "Step 4"
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-[#EEEEEE] via-white to-[#EEEEEE] relative overflow-hidden">
      {/* Background Glow Patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00ADB5] to-[#180161]" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-[#00ADB5] to-[#180161] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-[#180161] to-[#00ADB5] rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#00ADB5]/10 to-[#180161]/10 backdrop-blur-sm border border-[#00ADB5]/20 rounded-full px-8 py-4 mb-8">
            <Crown className="h-6 w-6 text-[#00ADB5]" />
            <span className="text-lg font-bold bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
              Royal Process Excellence
            </span>
            <Star className="h-6 w-6 text-[#180161]" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-[#222831] mb-6">
            How It <span className="bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-[#393E46] max-w-4xl mx-auto leading-relaxed">
            Our innovative process transforms food waste into premium fish feed through sustainable bioconversion
            technology with <span className="text-[#00ADB5] font-semibold">royal precision</span>.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative">
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-[#00ADB5]/20 to-[#180161]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl text-center h-full border-2 border-[#00ADB5]/20 group-hover:border-[#00ADB5]/40 transition-all duration-500">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#00ADB5] to-[#180161] px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg border border-white/20">
                      {step.badge}
                    </div>
                  </div>
                  <div className="absolute -top-6 -left-6 bg-gradient-to-r from-[#00ADB5] to-[#180161] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-xl border-4 border-white">
                    {index + 1}
                  </div>
                  <div className="relative mb-8 mt-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                    <div className={`relative bg-gradient-to-r ${step.gradient} p-6 rounded-full inline-block shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{step.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#222831] mb-4 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#393E46] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 text-center">
                    <div className="bg-gradient-to-r from-[#00ADB5] to-[#180161] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-3">
                      {index + 1}
                    </div>
                    <div className={`bg-gradient-to-r ${step.gradient} p-3 rounded-full inline-block`}>
                      <div className="text-white">{step.icon}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#222831] mb-3">{step.title}</h3>
                    <p className="text-[#393E46] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>

              {/* Arrow between mobile steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="bg-gradient-to-r from-[#00ADB5] to-[#180161] p-2 rounded-full">
                    <ArrowRight className="h-6 w-6 text-white transform rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Bottom Box */}
        <div className="mt-20 bg-gradient-to-r from-[#00ADB5] to-[#180161] rounded-2xl p-10 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Circular Economy in Action</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our process creates a sustainable circular economy where waste becomes valuable resources, benefiting both
            the environment and farming communities.
          </p>
        </div>
      </div>
    </section>
  );
}
