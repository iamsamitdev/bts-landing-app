"use client"

import { useState, useEffect } from "react"

const bannerSlides = [
  {
    title: "BTS SkyTrain",
    subtitle: "ระบบขนส่งมวลชนที่ดีที่สุด สะดวก รวดเร็ว ปลอดภัย",
    bgColor: "from-[#003B71] to-[#002855]",
    emoji: "🚄",
  },
  {
    title: "แพ็กเกจ XTREME SAVINGS",
    subtitle: "ประหยัดค่าเดินทางสูงสุด! เพียงเติมเงินขั้นต่ำ สนุกกับส่วนลดพิเศษ",
    bgColor: "from-[#0056A6] to-[#003B71]",
    emoji: "💰",
  },
  {
    title: "ดาวน์โหลดแอป THE SKYTRAINs",
    subtitle: "วางแผนการเดินทาง เช็คเส้นทาง เวลาเดินรถ ครบจบในแอปเดียว",
    bgColor: "from-[#004D8F] to-[#0056A6]",
    emoji: "📱",
  },
]

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-28 lg:pt-32">
      <div className={`relative bg-linear-to-r ${bannerSlides[currentSlide].bgColor} transition-all duration-700`}>
        <div className="container mx-auto px-4 py-16 lg:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left text-white">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
                {bannerSlides[currentSlide].title}
              </h1>
              <p className="text-blue-100 text-base lg:text-xl mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
                {bannerSlides[currentSlide].subtitle}
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="/routemap"
                  className="px-6 py-3 bg-white text-[#003B71] rounded-full hover:bg-blue-50 transition-colors font-semibold"
                >
                  ค้นหาเส้นทาง
                </a>
                <a
                  href="/about"
                  className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors font-semibold"
                >
                  เกี่ยวกับเรา
                </a>
              </div>
            </div>

            {/* Right - Emoji/Icon */}
            <div className="flex-1 flex justify-center">
              <div className="text-[120px] lg:text-[180px] animate-pulse">
                {bannerSlides[currentSlide].emoji}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Prev/Next */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white"
        >
          ◀
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white"
        >
          ▶
        </button>
      </div>
    </section>
  )
}