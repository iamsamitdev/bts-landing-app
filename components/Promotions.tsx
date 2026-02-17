import Link from "next/link"

const promotions = [
  {
    title: "แพ็กเกจ XTREME SAVINGS",
    description: "ประหยัดค่าเดินทางสูงสุด! สำหรับผู้โดยสารที่เดินทางเป็นประจำ เติมเงินขั้นต่ำ รับส่วนลดทันที",
    tag: "โปรโมชันยอดนิยม",
    emoji: "💳",
    color: "from-[#003B71] to-[#002855]",
  },
  {
    title: "BTS x Grab สิทธิพิเศษ",
    description: "ผู้โดยสาร XTREME SAVINGS รับส่วนลด Grab Ride และทดลองใช้ GrabUnlimited ฟรี สำหรับนักเรียน นักศึกษา",
    tag: "ร่วมกับพาร์ทเนอร์",
    emoji: "🤝",
    color: "from-[#0056A6] to-[#003B71]",
  },
  {
    title: "1 สถานี = 1 พอยท์",
    description: "สะสมพอยท์ทุกครั้งที่เดินทาง แลกรับสิทธิพิเศษมากมาย กับบัตร Rabbit",
    tag: "สะสมพอยท์",
    emoji: "⭐",
    color: "from-[#004D8F] to-[#0056A6]",
  },
]

export default function Promotions() {

  return (
    <section id="promotions" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              🎉 โปรโมชัน
            </h2>
            <p className="text-gray-600 dark:text-gray-300">ข้อเสนอพิเศษสำหรับผู้โดยสาร BTS</p>
          </div>
          <Link
            href="#"
            className="hidden md:inline-flex items-center gap-1 text-[#003B71] dark:text-blue-400 hover:underline font-medium"
          >
            ดูเพิ่มเติม →
          </Link>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className={`bg-linear-to-br ${promo.color} rounded-2xl p-6 text-white hover:shadow-xl transition-shadow cursor-pointer group`}
            >
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs mb-4">
                {promo.tag}
              </span>
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {promo.emoji}
              </div>
              <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{promo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}