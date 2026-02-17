"use client"

import { useState } from "react"
import Link from "next/link"

const stations = [
  "หมอชิต (N8)", "สะพานควาย (N7)", "อารีย์ (N5)", "สนามเป้า (N4)",
  "อนุสาวรีย์ชัยสมรภูมิ (N3)", "พญาไท (N2)", "ราชเทวี (N1)",
  "สยาม (CEN)", "ชิดลม (E1)", "เพลินจิต (E2)", "นานา (E3)",
  "อโศก (E4)", "พร้อมพงษ์ (E5)", "ทองหล่อ (E6)", "เอกมัย (E7)",
  "พระโขนง (E8)", "อ่อนนุช (E9)", "บางจาก (E10)", "ปุณณวิถี (E11)",
  "สำโรง (E15)", "แบริ่ง (E14)",
  "สนามกีฬาแห่งชาติ (W1)", "ราชดำริ (S1)", "ศาลาแดง (S2)",
  "ช่องนนทรี (S3)", "สุรศักดิ์ (S5)", "สะพานตากสิน (S6)",
  "กรุงธนบุรี (S7)", "วงเวียนใหญ่ (S8)", "บางหว้า (S12)",
]

// Quick Service Cards (อ้างอิงจากเว็บ BTS จริง)
const serviceCards = [
  { icon: "🚆", title: "เส้นทาง\nและอัตราค่าโดยสาร", href: "/routemap" },
  { icon: "💡", title: "สถานที่และกิจกรรม", href: "/news" },
  { icon: "🗺️", title: "แผนที่บริเวณสถานี", href: "/routemap" },
  { icon: "🅿️", title: "ที่จอดรถ", href: "/routemap" },
  { icon: "🕐", title: "เวลาและความถี่\nการเดินรถ", href: "/train-lines" },
  { icon: "📦", title: "ทรัพย์สินสูญหาย", href: "/contact" },
]

export default function RouteFinder() {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")

  const handleSwap = () => {
    setOrigin(destination)
    setDestination(origin)
  }

  const handleSearch = () => {
    if (origin && destination) {
      alert(`ค้นหาเส้นทาง: ${origin} → ${destination}\n(ในโปรเจกต์จริงจะแสดงเส้นทางและค่าโดยสาร)`)
    }
  }

  return (
    <section
      id="route-finder"
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://www.bts.co.th/assets/images/home/bg-image.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          เส้นทางและอัตราค่าโดยสาร
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left - Search Form Card */}
          <div className="w-full lg:w-85 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 shrink-0">
            <h3 className="text-lg font-bold text-bts-navy dark:text-blue-400 mb-4">
              ค้นหาสถานีและสถานที่
            </h3>

            {/* Origin */}
            <div className="mb-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                ต้นทาง (Origin) :
              </label>
              <select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-bts-navy focus:border-transparent"
              >
                <option value="">เลือกสถานีต้นทาง</option>
                {stations.map((station) => (
                  <option key={station} value={station}>{station}</option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <div className="flex justify-end my-1">
              <button
                onClick={handleSwap}
                className="text-gray-500 hover:text-bts-navy transition-colors text-xl"
                title="สลับสถานี"
              >
                ⇅
              </button>
            </div>

            {/* Destination */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                ปลายทาง (Destination) :
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-bts-navy focus:border-transparent"
              >
                <option value="">เลือกสถานีปลายทาง</option>
                {stations.map((station) => (
                  <option key={station} value={station}>{station}</option>
                ))}
              </select>
            </div>

            {/* Search Button - สีเขียว BTS */}
            <button
              onClick={handleSearch}
              className="w-full py-3 bg-bts-green text-white rounded-full hover:bg-bts-green-dark transition-colors font-semibold text-sm"
            >
              ค้นหาเส้นทาง
            </button>
          </div>

          {/* Right - Service Cards Grid 2x3 */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {serviceCards.map((card, index) => (
              <Link
                key={index}
                href={card.href}
                className="flex items-center gap-4 bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-14 h-14 bg-bts-green rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="text-2xl">{card.icon}</span>
                </div>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug whitespace-pre-line">
                  {card.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}