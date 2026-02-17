"use client"

import { useState } from "react"
import Link from "next/link"

const newsItems = [
  {
    title: "บีทีเอส กรุ๊ปฯ จับมือ กทม. ขับเคลื่อนโครงการ Green List Plus \"โปรสู้ฝุ่น ลด PM2.5\"",
    date: "10 กุมภาพันธ์ 2569",
    category: "ข่าวประชาสัมพันธ์",
    emoji: "🌿",
  },
  {
    title: "บีทีเอส ร่วมพิธีสดุดีทหารผ่านศึก และกำลังพลผู้เสียชีวิต",
    date: "10 กุมภาพันธ์ 2569",
    category: "กิจกรรม CSR",
    emoji: "🎖️",
  },
  {
    title: "BTS เปิดให้บริการสถานีใหม่ เชื่อมต่อระบบขนส่งมวลชนครบวงจร",
    date: "5 กุมภาพันธ์ 2569",
    category: "ข่าวบริการ",
    emoji: "🚉",
  },
  {
    title: "แจ้งปรับเวลาให้บริการรถไฟฟ้า BTS ช่วงเทศกาลสงกรานต์",
    date: "1 กุมภาพันธ์ 2569",
    category: "ประกาศ",
    emoji: "📢",
  },
]

export default function NewsEvents() {
  const [visibleCount, setVisibleCount] = useState(3)

  return (
    <section id="news" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              📰 ข่าวสารและกิจกรรม
            </h2>
            <p className="text-gray-600 dark:text-gray-300">ติดตามข่าวสารล่าสุดจาก BTS SkyTrain</p>
          </div>
          <Link
            href="#"
            className="hidden md:inline-flex items-center gap-1 text-[#003B71] dark:text-blue-400 hover:underline font-medium"
          >
            ดูเพิ่มเติม →
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.slice(0, visibleCount).map((news, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 group cursor-pointer"
            >
              <div className="flex gap-4">
                <div className="text-4xl shrink-0 group-hover:scale-110 transition-transform">
                  {news.emoji}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-[#003B71] dark:text-blue-400 text-xs rounded-full font-medium">
                      {news.category}
                    </span>
                    <span className="text-gray-400 text-xs">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-[#003B71] dark:group-hover:text-blue-400 transition-colors leading-relaxed">
                    {news.title}
                  </h3>
                  <span className="inline-block mt-3 text-[#003B71] dark:text-blue-400 text-sm font-medium">
                    อ่านเพิ่มเติม →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleCount < newsItems.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(newsItems.length)}
              className="px-6 py-3 border-2 border-[#003B71] dark:border-blue-400 text-[#003B71] dark:text-blue-400 rounded-full hover:bg-[#003B71] hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors font-medium"
            >
              ดูข่าวทั้งหมด
            </button>
          </div>
        )}
      </div>
    </section>
  )
}