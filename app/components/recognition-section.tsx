"use client"

import { Award, CheckCircle, Star, Trophy, Crown, Medal, Sparkles } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"

export default function RecognitionSection() {
  const recognitions = [
    {
      icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Startup Odisha Registered",
      description: "Officially registered under Startup Odisha initiative",
      gradient: "from-[#00ADB5] to-[#180161]",
      badge: "Government Recognition",
    },
    {
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "DPIIT Startup India Recognition",
      description: "Recognized by DPIIT, Govt. of India",
      gradient: "from-[#180161] to-[#00ADB5]",
      badge: "National Recognition",
    },
    {
      icon: <Trophy className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Technology Incubated",
      description: "With ICAR-CIFA and IIT Bhubaneswar",
      gradient: "from-[#00ADB5] to-[#393E46]",
      badge: "Academic Excellence",
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Award-Winning Innovation",
      description: "Supporting sustainable aquaculture in South Asia",
      gradient: "from-[#393E46] to-[#180161]",
      badge: "Innovation Award",
    },
  ]

  const carouselImages = [
    // "/r1.jpg",
    "/r2.jpg",
    "/r3.jpg",
    "/r4.jpg",
    // "/r5.jpg",
    "/r6.jpg",
    "/r7.jpg",
  ]

  return (
    <section
      id="recognition"
      className="py-16 sm:py-20 bg-gradient-to-br from-[#00ADB5] to-[#180161] text-white relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
            <Crown className="h-4 w-4 text-white" />
            <span className="text-xs sm:text-sm font-bold text-white/80">Royal Recognition</span>
            <Medal className="h-4 w-4 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-white">Recognition &</span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Recognized for innovation and sustainability by top institutes and government bodies — we’re proud to lead with
            <span className="text-white font-semibold"> purpose and impact</span>.
          </p>
        </div>

        {/* Carousel */}
        <div className="mb-14 sm:mb-20">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop
            className="rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto"
          >
            {carouselImages.map((src, index) => (
              <SwiperSlide key={index}>
                <Image width={100} height={100} src={src} alt={`Recognition ${index + 1}`} className="w-full h-64 sm:h-80 object-fit" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Recognition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {recognitions.map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-2 bg-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl text-center border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-xl">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/20 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white border border-white/30">
                    {item.badge}
                  </div>
                </div>
                <div className="relative mb-6 mt-4">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
                  />
                  <div
                    className={`relative bg-gradient-to-r ${item.gradient} p-4 sm:p-5 rounded-full inline-block shadow-2xl group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="text-white">{item.icon}</div>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{item.description}</p>
                <div className="absolute top-3 right-3">
                  <Sparkles className="h-4 w-4 text-white/30 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
