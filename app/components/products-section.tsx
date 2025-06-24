"use client"

import { Shield, Leaf, Crown, Star, Sparkles, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export default function ProductsSection() {
  const [openDialog, setOpenDialog] = useState<number | null>(null)

  const products = [
    {
      title: "CIFATIL Grower",
      description: "Scientifically formulated grower fish feed promoting superior weight gain and health in carp species.",
      detailedDescription: "Our CIFATIL Grower is a premium aquaculture feed specifically designed for growing carp. It contains high-quality proteins, essential amino acids, and vitamins that promote rapid growth while maintaining excellent health standards. The feed is formulated using advanced nutritional science to ensure optimal feed conversion ratios and cost-effective farming operations.",
      features: ["Enhanced Weight Gain", "Supports Carp Health", "Balanced Nutrients"],
      specifications: [
        "Protein: 28-32%",
        "Fat: 6-8%", 
        "Fiber: 6-8%",
        "Ash: 10-12%",
        "Moisture: 10-12%"
      ],
      badge: "New Launch",
      gradient: "from-[#00ADB5] to-[#180161]",
      image: "/grower.jpg",
    },
    {
      title: "Zinc Selenium Nanoplus",
      description: "Advanced nano-mineral supplement to boost immunity, growth, and disease resistance.",
      detailedDescription: "Zinc Selenium Nanoplus utilizes cutting-edge nanotechnology to deliver essential minerals in their most bioavailable form. This revolutionary supplement enhances immune system function, improves growth rates, and significantly increases disease resistance in aquatic species. The nano-formulation ensures maximum absorption and utilization by fish.",
      features: ["Nano-Mineral Formula", "Boosts Immunity", "Improves Disease Resistance"],
      specifications: [
        "Zinc: 5000-7000 ppm",
        "Selenium: 200-300 ppm",
        "Nano-particle size: <100nm",
        "Bioavailability: >95%",
        "Dosage: 2-3g/kg feed"
      ],
      badge: "Advanced",
      gradient: "from-[#180161] to-[#00ADB5]",
      image: "/zinc.jpg",
    },
    {
      title: "CIFABROOD",
      description: "High-protein brood stock feed that enhances fertility, spawning performance, and fry quality.",
      detailedDescription: "CIFABROOD is a specialized nutrition solution for broodstock management. Enriched with reproductive vitamins, omega-3 fatty acids, and high-quality proteins, this feed significantly improves spawning performance, egg quality, and fry survival rates. Essential for successful breeding programs in commercial aquaculture.",
      features: ["Broodstock Optimized", "Fertility Boost", "Improved Fry Quality"],
      specifications: [
        "Protein: 38-42%",
        "Fat: 8-12%",
        "Omega-3: 2-3%",
        "Vitamin E: 200-300 IU/kg",
        "Phosphorus: 1.2-1.5%"
      ],
      badge: "High Protein",
      gradient: "from-[#00ADB5] to-[#393E46]",
      image: "/cifabrood.jpg",
    },
    {
      title: "CIFA Carp Grower",
      description: "Balanced nutrition to optimize growth and feed conversion ratio (FCR) in growing carp.",
      detailedDescription: "CIFA Carp Grower provides complete and balanced nutrition specifically formulated for optimal carp growth. With carefully selected ingredients and precise nutrient ratios, this feed ensures excellent feed conversion efficiency, reducing farming costs while maximizing growth potential. Suitable for intensive and semi-intensive farming systems.",
      features: ["Optimal FCR", "Fast Growth", "Nutritionally Balanced"],
      specifications: [
        "Protein: 30-35%",
        "Fat: 5-7%",
        "FCR: 1.2-1.5",
        "Digestibility: >85%",
        "Pellet Size: 2-6mm"
      ],
      badge: "Performance",
      gradient: "from-[#00ADB5] to-[#180161]",
      image: "/carp-grower.jpg",
    },
    {
      title: "CIFA Carp Starter",
      description: "Specialized starter feed for fry and fingerlings to support early-stage growth and survival.",
      detailedDescription: "CIFA Carp Starter is meticulously designed for the critical early life stages of carp. This highly digestible feed contains micro-nutrients essential for proper organ development, immune system establishment, and rapid initial growth. The small pellet size and enhanced palatability ensure high acceptance rates among young fish.",
      features: ["Fry Support", "High Survival Rate", "Essential Early Nutrition"],
      specifications: [
        "Protein: 35-40%",
        "Fat: 6-9%",
        "Pellet Size: 0.5-2mm",
        "Survival Rate: >90%",
        "Digestibility: >90%"
      ],
      badge: "Starter",
      gradient: "from-[#180161] to-[#00ADB5]",
      image: "/carp-starter.jpg",
    },
    {
      title : "CIFA FISH FEED",
      description: "Premium fish feed for various species, ensuring optimal growth and health.",
      detailedDescription: "CIFA Fish Feed is a versatile and high-quality feed suitable for a wide range of fish species. Formulated with balanced nutrients, it promotes healthy growth, enhances immune response, and improves overall fish health. Ideal for both freshwater and marine aquaculture systems.",
      features: ["Versatile Nutrition", "Healthy Growth", "Immune Support"],  
      specifications: [
        "Protein: 30-35%",
        "Fat: 5-8%",
        "Fiber: 4-6%",
        "Ash: 10-12%",
        "Moisture: <10%"
      ],
      badge: "Fish Feed",
      gradient: "from-[#00ADB5] to-[#180161]",
      image: "/fish-feed.jpg",
    },
    {
      title : "FISH FEED and FERTILIZER",
      description: "Dual-purpose feed and fertilizer for aquaculture systems, enhancing both fish growth and water quality.",
      detailedDescription: "This innovative product serves as both a high-quality fish feed and an organic fertilizer, enriching the aquatic environment while promoting optimal fish growth. The nutrient-rich formulation supports healthy fish development and improves water quality, making it ideal for integrated aquaculture systems.",
      features: ["Dual Purpose", "Water Quality Improvement", "Sustainable Aquaculture"],
      specifications: [
        "Protein: 25-30%",
        "Fat: 4-6%",
        "Organic Matter: 20-25%",
        "Nutrient Release: Slow",
        "Application Rate: 1-2% of water volume"
      ],
      badge: "Eco-Friendly",
      gradient: "from-[#180161] to-[#00ADB5]",
      image: "/inno-fish-feed.jpg",
    }
  ]

  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-br from-[#EEEEEE] via-background to-[#EEEEEE] relative overflow-hidden"
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

          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
              Tensift Products
            </span>
          </h2>
          <p className="text-md text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Innovative, sustainable products designed to enhance aquaculture productivity while supporting environmental
            conservation with <span className="text-[#00ADB5] font-semibold">unmatched quality</span>.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
    {products.map((product, index) => (
      <div key={index} className="group relative">
        {/* Glow Effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-[#00ADB5]/10 to-[#180161]/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500" />

        <Card className="relative bg-card/80 backdrop-blur-sm border border-[#00ADB5]/10 hover:border-[#00ADB5]/30 transition-all duration-500 rounded-2xl overflow-hidden shadow-lg">
          {/* Badge */}
          <div className="absolute -top-2 right-4 z-10">
            <div className={`bg-gradient-to-r ${product.gradient} px-3 py-1 rounded-full text-xs font-bold text-white shadow border border-white/10`}>
              {product.badge}
            </div>
          </div>

          <CardHeader className="text-center pb-5 pt-6 relative">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-[#00ADB5]/5 to-[#180161]/5 rounded-t-2xl" />
            <div className="relative z-10">
              <div className="relative mb-4">
                <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity`} />
              </div>
              <CardTitle className="text-lg sm:text-xl text-foreground mb-2 group-hover:text-[#00ADB5] transition-colors">
                {product.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground text-sm sm:text-base leading-snug">
                {product.description}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="px-6 pb-6">
            <Dialog open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
              <DialogTrigger asChild>
                <Button className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-all hover:scale-[1.02]`}>
                  View Details
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-[#00ADB5]/20">
                <DialogHeader className="relative">
                  <div className="absolute -top-5 -left-5 -right-5 h-16 bg-gradient-to-r from-[#00ADB5]/10 to-[#180161]/10 rounded-t-2xl" />
                  <div className="relative z-10 pt-3">
                    <div className="flex items-center justify-center mb-3">
                      <div className={`bg-gradient-to-r ${product.gradient} px-4 py-1 rounded-full text-xs font-bold text-white shadow`}>
                        {product.badge}
                      </div>
                    </div>
                    <DialogTitle className="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent mb-3">
                      {product.title}
                    </DialogTitle>
                  </div>
                </DialogHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden shadow border border-[#00ADB5]/10">
                      <Image
                        width={500}
                        height={500}
                        src={product.image}
                        alt={product.title}
                        className="w-full h-64 sm:h-64 object-fit"
                      />
                    </div>

                    <div className="bg-gradient-to-br from-[#00ADB5]/5 to-[#180161]/5 rounded-xl p-4 border border-[#00ADB5]/10">
                      <h4 className="text-base font-bold text-foreground mb-3 flex items-center">
                        <Star className="h-4 w-4 text-[#00ADB5] mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Leaf className="h-4 w-4 text-[#00ADB5] flex-shrink-0" />
                            <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-foreground mb-3 flex items-center">
                        <Shield className="h-4 w-4 text-[#00ADB5] mr-2" />
                        Product Overview
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.detailedDescription}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#00ADB5]/5 to-[#180161]/5 rounded-xl p-4 border border-[#00ADB5]/10">
                      <h4 className="text-base font-bold text-foreground mb-3 flex items-center">
                        <Award className="h-4 w-4 text-[#00ADB5] mr-2" />
                        Technical Specifications
                      </h4>
                      <ul className="space-y-2">
                        {product.specifications.map((spec, idx) => (
                          <li key={idx} className="flex flex-col sm:flex-row sm:justify-between border-b border-[#00ADB5]/10 py-2 last:border-b-0">
                            <span className="text-sm text-muted-foreground font-medium">{spec.split(":")[0]}:</span>
                            <span className="text-sm font-semibold text-foreground">{spec.split(":")[1]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-[#00ADB5] to-[#180161] rounded-xl p-4 text-white text-center">
                      <Crown className="h-6 w-6 mx-auto mb-2" />
                      <h5 className="text-base font-bold mb-1">Premium Quality Assured</h5>
                      <p className="text-xs opacity-90">Scientifically formulated for optimal results</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <Sparkles className="h-5 w-5 text-[#00ADB5]/30" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Sparkles className="h-4 w-4 text-[#180161]/30" />
                </div>
              </DialogContent>
            </Dialog>

            <div className="absolute bottom-3 right-3">
              <Sparkles className="h-4 w-4 text-[#00ADB5]/30 group-hover:text-[#00ADB5] transition-colors duration-300" />
            </div>
          </CardContent>
        </Card>
      </div>
    ))}
  </div>


        {/* Bottom Stats */}

        {/* <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-r from-[#00ADB5]/30 to-[#180161]/30 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-r from-[#00ADB5] via-[#180161] to-[#00ADB5] rounded-3xl p-12 text-white shadow-2xl border border-[#00ADB5]/30">
            
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
        </div> */}
        
      </div>
    </section>
  )
}