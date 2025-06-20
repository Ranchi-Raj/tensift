import { Crown, Sparkles } from "lucide-react"
// import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#00ADB5] via-[#180161] to-[#00ADB5] text-white overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative  container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-10 relative">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Revolutionizing</span>
                <br />
                <span className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent animate-pulse">
                  Aquaculture
                </span>
                <br />
                <span className="text-white/80">with Sustainable Feed</span>
              </h1>

              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-xl" />
                <p className="relative text-xl lg:text-2xl text-white/80 leading-relaxed bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                  Transforming food waste into premium fish feed through innovative bioconversion technology. Supporting
                  farmers across India and Nepal with sustainable aquaculture solutions that deliver
                  <span className="text-white font-semibold"> exceptional results</span>.
                </p>
              </div>
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-[#00ADB5] to-[#180161] hover:from-[#180161] hover:to-[#00ADB5] text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl border border-white/10 transition-all duration-500"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Discover Excellence</span>
                  <Star className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-white text-white hover:bg-gradient-to-r hover:from-[#00ADB5] hover:to-[#180161] hover:text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-xl transition-all duration-500"
              >
                <span className="flex items-center space-x-2">
                  <span>Connect With Us</span>
                  <Crown className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </Button>
            </div> */}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: "500+", label: "Farmers Served" },
                { number: "25%", label: "Cost Reduction" },
                { number: "100%", label: "Sustainable" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 rounded-xl blur group-hover:blur-lg transition-all duration-300" />
                    <div className="relative bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video Section */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-8 bg-white/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                <div className="aspect-video bg-white/10 flex items-center justify-center relative overflow-hidden">
                  {/* Animated Blobs */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/30 rounded-full blur-xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse delay-1000" />
                  </div>
                </div>

                {/* Video Element */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  poster="/placeholder.svg?height=500&width=800"
                  controls
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-6 -right-6 bg-white/20 p-3 rounded-full shadow-xl animate-bounce">
              <Crown className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/20 p-3 rounded-full shadow-xl animate-bounce delay-500">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
