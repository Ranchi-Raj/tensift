import { Shield, Leaf, Crown, Star, Sparkles, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
export default function ProductsSection() {
  const products = [
  {
    // icon: <Fish className="h-12 w-12" />,
    title: "CIFATIL Grower",
    description: "Scientifically formulated grower fish feed promoting superior weight gain and health in carp species.",
    features: ["Enhanced Weight Gain", "Supports Carp Health", "Balanced Nutrients"],
    badge: "New Launch",
    gradient: "from-[#00ADB5] to-[#180161]",
    image: "/grower.jpg", // replace with actual image
  },
  {
    // icon: <Zap className="h-12 w-12" />,
    title: "Zinc Selenium Nanoplus",
    description: "Advanced nano-mineral supplement to boost immunity, growth, and disease resistance.",
    features: ["Nano-Mineral Formula", "Boosts Immunity", "Improves Disease Resistance"],
    badge: "Advanced",
    gradient: "from-[#180161] to-[#00ADB5]",
    image: "/zinc.jpg",
  },
  {
    // icon: <Shield className="h-12 w-12" />,
    title: "CIFABROOD",
    description: "High-protein brood stock feed that enhances fertility, spawning performance, and fry quality.",
    features: ["Broodstock Optimized", "Fertility Boost", "Improved Fry Quality"],
    badge: "High Protein",
    gradient: "from-[#00ADB5] to-[#393E46]",
    image: "/cifabrood.jpg",
  },
  {
    // icon: <Leaf className="h-12 w-12" />,
    title: "CIFA Carp Grower",
    description: "Balanced nutrition to optimize growth and feed conversion ratio (FCR) in growing carp.",
    features: ["Optimal FCR", "Fast Growth", "Nutritionally Balanced"],
    badge: "Performance",
    gradient: "from-[#00ADB5] to-[#180161]",
    image: "/carp-grower.jpg",
  },
  {
    // icon: <Sparkles className="h-12 w-12" />,
    title: "CIFA Carp Starter",
    description: "Specialized starter feed for fry and fingerlings to support early-stage growth and survival.",
    features: ["Fry Support", "High Survival Rate", "Essential Early Nutrition"],
    badge: "Starter",
    gradient: "from-[#180161] to-[#00ADB5]",
    image: "/carp-starter.jpg",
  },
  // existing three products...
]


  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-br from-[#EEEEEE] via-white to-[#EEEEEE] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00ADB5] to-[#180161] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#180161] to-[#00ADB5] rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#00ADB5]/10 to-[#180161]/10 backdrop-blur-sm border border-[#00ADB5]/20 rounded-full px-8 py-4 mb-8">
            <Crown className="h-6 w-6 text-[#00ADB5]" />
            <span className="text-lg font-bold bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
              Premium Product Portfolio
            </span>
            <Star className="h-6 w-6 text-[#180161]" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-[#222831] mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
              Royal Products
            </span>
          </h2>
          <p className="text-xl text-[#393E46] max-w-4xl mx-auto leading-relaxed">
            Innovative, sustainable products designed to enhance aquaculture productivity while supporting environmental
            conservation with <span className="text-[#00ADB5] font-semibold">unmatched quality</span>.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {products.map((product, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#00ADB5]/20 to-[#180161]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              <Card className="relative bg-white/90 backdrop-blur-sm border-2 border-[#00ADB5]/20 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl overflow-hidden group-hover:border-[#00ADB5]/40">
                {/* Badge */}
                <div className="absolute -top-3 right-6 z-10">
                  <div
                    className={`bg-gradient-to-r ${product.gradient} px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg border border-white/20`}
                  >
                    {product.badge}
                  </div>
                </div>

                <CardHeader className="text-center pb-6 pt-8 relative">
                  {/* Background Decoration */}
                  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#00ADB5]/5 to-[#180161]/5 rounded-t-3xl"></div>

                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${product.gradient} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                      ></div>
                    </div>

                    {product.image && (
                      <div className="mb-4 rounded-xl overflow-hidden shadow-md">
                        <Image width={1000} height={1000} src={product.image} alt={product.title} className="  w-full object-cover" />
                      </div>
                    )}
                    <CardTitle className="text-2xl text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-[#393E46] text-base leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-4 group/item">
                        <div className="bg-gradient-to-r from-[#00ADB5]/20 to-[#180161]/20 p-2 rounded-full group-hover/item:from-[#00ADB5]/40 group-hover/item:to-[#180161]/40 transition-all duration-300">
                          <Leaf className="h-5 w-5 text-[#00ADB5]" />
                        </div>
                        <span className="text-[#393E46] font-medium group-hover/item:text-[#222831] transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-4 right-4">
                    <Sparkles className="h-5 w-5 text-[#00ADB5]/30 group-hover:text-[#00ADB5] transition-colors duration-300" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-r from-[#00ADB5]/30 to-[#180161]/30 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-r from-[#00ADB5] via-[#180161] to-[#00ADB5] rounded-3xl p-12 text-white shadow-2xl border border-[#00ADB5]/30">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6">
              <Crown className="h-10 w-10 text-white/20" />
            </div>
            <div className="absolute top-6 right-6">
              <Award className="h-10 w-10 text-white/20" />
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <Sparkles className="h-8 w-8 text-white/20" />
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-4xl font-bold mb-6">Why Choose Our Royal Products?</h3>
              <div className="grid md:grid-cols-3 gap-10 mt-10">
                {[
                  { stat: "25%", label: "Cost Reduction", icon: <Shield className="h-8 w-8" /> },
                  { stat: "40%", label: "Better Growth Rate", icon: <Star className="h-8 w-8" /> },
                  { stat: "100%", label: "Sustainable", icon: <Leaf className="h-8 w-8" /> },
                ].map((item, index) => (
                  <div key={index} className="group/stat text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group-hover/stat:bg-white/20 transition-all duration-300">
                      <div className="flex justify-center mb-4">
                        <div className="bg-white/20 p-3 rounded-full group-hover/stat:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                      </div>
                      <div className="text-5xl font-bold mb-3">{item.stat}</div>
                      <div className="text-lg opacity-90 font-medium">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
