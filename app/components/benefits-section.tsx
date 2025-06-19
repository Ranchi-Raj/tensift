"use client"
import {
  DollarSign,
  TrendingUp,
  Shield,
  Leaf,
  Users,
  Award,
} from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Reduction",
      description: "Up to 25% reduction in feed costs compared to traditional fish feed.",
      stat: "25%",
      statLabel: "Cost Savings",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Enhanced Growth",
      description: "Improved fish growth rates and better feed conversion ratios.",
      stat: "40%",
      statLabel: "Better Growth",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Consistent quality with rigorous testing and quality control measures.",
      stat: "100%",
      statLabel: "Quality Tested",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainable Solution",
      description: "Environmentally friendly feed production reducing waste and carbon footprint.",
      stat: "Zero",
      statLabel: "Waste to Landfill",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Support",
      description: "Technical assistance and consultation from our team of aquaculture experts.",
      stat: "24/7",
      statLabel: "Support Available",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Proven Results",
      description: "Trusted by hundreds of farmers across India and Nepal with proven success.",
      stat: "500+",
      statLabel: "Happy Farmers",
    },
  ]

  return (
    <section
      id="benefits"
      className="relative py-24 bg-gradient-to-br from-[#222831] via-[#393E46] to-[#180161] text-[#111] overflow-hidden"
    >
        {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-72 h-72 bg-[#00ADB5]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-[#180161]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00ADB5]/5 to-[#180161]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00ADB5] to-[#180161] text-transparent bg-clip-text">
            <span className="text-white">Benefits</span> for Farmers
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Discover how our innovative feed solutions can transform your aquaculture operations and boost profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#393E46] to-[#222831] border-2 border-[#00ADB5]/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
               <div className="relative inset-4 bg-gradient-to-r from-[#00ADB5]/40 to-[#180161]/40 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>   
              <div className="flex items-start space-x-4 mb-4">
                
                <div className="p-3 rounded-full bg-gradient-to-br from-[#00ADB5]/20 to-[#180161]/10 text-[#00ADB5]">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 text-center">
                <div className="text-3xl font-bold text-[#00ADB5]">{benefit.stat}</div>
                <div className="text-sm text-gray-300">{benefit.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-[#00ADB5] to-[#180161] text-white rounded-2xl p-10 lg:p-14 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h3>
              <p className="text-base opacity-90 mb-6">
                Join hundreds of successful farmers who have already experienced the benefits of our sustainable feed
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#00ADB5] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Started Today
                </button>
                <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  Schedule Consultation
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">₹50L+</div>
                <div className="text-sm">Farmer Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-sm">Tons Feed Produced</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm">Customer Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
