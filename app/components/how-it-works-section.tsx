import { Trash2, Bug, Fish, Truck, Crown, Star } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Trash2 className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Collection of Food & Kitchen Waste",
      description: "We collect organic waste from restaurants, hotels, and food units with royal efficiency.",
      gradient: "from-red-500 via-orange-500 to-red-600",
      badge: "Step 1",
    },
    {
      icon: <Bug className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Bioconversion using Black Soldier Fly",
      description: "Waste is processed using advanced BSF larvae technology in our bioconversion facility.",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      badge: "Step 2",
    },
    {
      icon: <Fish className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Larvae into Nutrient-Rich Fish Feed",
      description: "Harvested larvae are transformed into high-protein fish feed with premium quality.",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      badge: "Step 3",
    },
    {
      icon: <Truck className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Feed Supplied to Fish Farmers",
      description: "Our feed is delivered across India and Nepal with efficiency and reliability.",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      badge: "Step 4",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-gradient-to-br from-[#EEEEEE] via-white to-[#EEEEEE] relative overflow-hidden">
      {/* Background Glow Patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00ADB5] to-[#180161]" />
        <div className="absolute top-20 right-10 w-56 h-56 bg-gradient-to-br from-[#00ADB5] to-[#180161] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-[#180161] to-[#00ADB5] rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00ADB5]/10 to-[#180161]/10 backdrop-blur-sm border border-[#00ADB5]/20 rounded-full px-4 py-2 mb-4">
            <Crown className="h-4 w-4 text-[#00ADB5]" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
              Royal Process
            </span>
            <Star className="h-4 w-4 text-[#180161]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#222831] mb-4">
            How It <span className="bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-sm sm:text-base text-[#393E46] max-w-2xl mx-auto leading-relaxed">
            We transform food waste into premium fish feed using sustainable bioconversion with{" "}
            <span className="text-[#00ADB5] font-semibold">precision</span>.
          </p>
        </div>

        {/* Cards (Responsive Layout) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00ADB5]/10 to-[#180161]/10 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300" />
              <div className="relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#00ADB5]/20 shadow-xl text-center group-hover:border-[#00ADB5]/40 transition-all duration-300">
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#00ADB5] to-[#180161] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full border border-white/20 shadow">
                    {step.badge}
                  </div>
                </div>

                {/* Step Icon */}
                <div className="relative my-4">
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-full blur-md opacity-40`} />
                  <div className={`relative bg-gradient-to-r ${step.gradient} p-4 sm:p-5 rounded-full inline-block shadow-lg`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-semibold text-[#222831] mb-2">{step.title}</h3>
                <p className="text-sm text-[#393E46] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-[#00ADB5] to-[#180161] rounded-xl sm:rounded-2xl p-6 sm:p-10 text-white text-center shadow-xl">
          <h3 className="text-lg sm:text-2xl font-bold mb-3">Circular Economy in Action</h3>
          <p className="text-sm sm:text-lg text-white/90 max-w-2xl mx-auto">
            We turn waste into value—supporting farmers, protecting the planet, and building a sustainable aquaculture future.
          </p>
        </div>
      </div>
    </section>
  );
}
