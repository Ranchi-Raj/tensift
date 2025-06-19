import { Crown, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#222831] via-[#393E46] to-[#180161] text-[#EEEEEE] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00ADB5]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#180161]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00ADB5]/5 to-[#180161]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-10 relative">
            {/* Royal Badge */}
            {/* <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00ADB5]/20 to-[#180161]/20 backdrop-blur-sm border border-[#00ADB5]/30 rounded-full px-6 py-3">
              <Crown className="h-5 w-5 text-[#00ADB5]" />
              <span className="text-sm font-semibold bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
                Premium Aquaculture Solutions
              </span>
              <Sparkles className="h-4 w-4 text-[#180161]" />
            </div> */}

            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#EEEEEE] to-[#EEEEEE]/80 bg-clip-text text-transparent">
                  Revolutionizing
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#00ADB5] via-[#180161] to-[#00ADB5] bg-clip-text text-transparent animate-pulse">
                  Aquaculture
                </span>
                <br />
                <span className="text-[#EEEEEE]/90">with Sustainable Feed</span>
              </h1>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00ADB5]/20 to-[#180161]/20 rounded-2xl blur-xl"></div>
                <p className="relative text-xl lg:text-2xl text-[#EEEEEE]/90 leading-relaxed bg-[#222831]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#00ADB5]/20">
                  Transforming food waste into premium fish feed through innovative bioconversion technology. Supporting
                  farmers across India and Nepal with sustainable aquaculture solutions that deliver
                  <span className="text-[#00ADB5] font-semibold"> exceptional results</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-[#00ADB5] to-[#180161] hover:from-[#180161] hover:to-[#00ADB5] text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl border border-[#00ADB5]/30 transition-all duration-500"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Discover Excellence</span>
                  <Star className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-[#00ADB5] text-[#00ADB5] hover:bg-gradient-to-r hover:from-[#00ADB5] hover:to-[#180161] hover:text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-xl transition-all duration-500"
              >
                <span className="flex items-center space-x-2">
                  <span>Connect With Us</span>
                  <Crown className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: "500+", label: "Farmers Served" },
                { number: "25%", label: "Cost Reduction" },
                { number: "100%", label: "Sustainable" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5]/20 to-[#180161]/20 rounded-xl blur group-hover:blur-lg transition-all duration-300"></div>
                    <div className="relative bg-[#393E46]/50 backdrop-blur-sm p-4 rounded-xl border border-[#00ADB5]/20 group-hover:border-[#00ADB5]/40 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-sm text-[#EEEEEE]/70 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="relative">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#00ADB5]/30 to-[#180161]/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

              <div className="relative bg-gradient-to-br from-[#393E46] to-[#222831] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#00ADB5]/20 group-hover:border-[#00ADB5]/40 transition-all duration-500">
                <div className="aspect-video bg-gradient-to-br from-[#00ADB5]/20 via-[#180161]/20 to-[#00ADB5]/10 flex items-center justify-center relative overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00ADB5] to-[#180161] opacity-20"></div>
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#00ADB5]/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#180161]/30 rounded-full blur-xl animate-pulse delay-1000"></div>
                  </div>

                  {/* <div className="relative text-center space-y-6 z-10">
                    <div className="relative group/play">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5] to-[#180161] rounded-full blur-xl opacity-50 group-hover/play:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative bg-gradient-to-br from-[#00ADB5] to-[#180161] backdrop-blur-sm rounded-full p-8 shadow-2xl border border-white/20 group-hover/play:scale-110 transition-transform duration-300 cursor-pointer">
                        <Play className="h-16 w-16 text-white ml-2" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[#EEEEEE] font-bold text-xl">Watch Our Royal Story</p>
                      <p className="text-[#EEEEEE]/70 text-sm">Discover the future of aquaculture</p>
                    </div>
                  </div> */}
                </div>

                {/* Video placeholder */}
                <video
                  className="absolute inset-0 w-full h-full object-cover  hover:opacity-100 transition-opacity duration-500"
                  poster="/placeholder.svg?height=500&width=800"
                  controls
                  
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#00ADB5] to-[#180161] p-3 rounded-full shadow-xl animate-bounce">
              <Crown className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#180161] to-[#00ADB5] p-3 rounded-full shadow-xl animate-bounce delay-500">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
