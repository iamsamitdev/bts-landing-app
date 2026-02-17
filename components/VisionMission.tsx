const visionData = [
  {
    icon: "🔭",
    title: "วิสัยทัศน์",
    content: "เป็นผู้นำในการให้บริการระบบรถไฟฟ้าขนส่งมวลชนที่ดีที่สุด",
    bgColor: "bg-[#003B71]",
  },
  {
    icon: "🎯",
    title: "ภารกิจ",
    content: "มุ่งพัฒนาระบบ การดำเนินการ และบุคลากร ตลอดจนการบริหารทรัพยากรอย่างมีประสิทธิภาพ เพื่อให้บริการระบบรถไฟฟ้าขนส่งมวลชนเป็นระบบที่ทันสมัย รวดเร็ว ปลอดภัย มีประสิทธิภาพ และเชื่อถือได้",
    bgColor: "bg-[#0056A6]",
  },
  {
    icon: "💎",
    title: "ค่านิยมร่วม",
    content: "ยึดมั่นในบรรษัทภิบาล เชื่อมั่นในบุคลากร มุ่งมั่นสู่ความเป็นเลิศในการให้บริการ สร้างความพึงพอใจสูงสุดแก่ผู้โดยสาร",
    bgColor: "bg-[#004D8F]",
  },
]

export default function VisionMission() {
  return (
    <section id="vision-mission" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🚇 รถไฟฟ้าบีทีเอส
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ระบบรถไฟฟ้าขนส่งมวลชนกรุงเทพ ให้บริการมาตั้งแต่ปี 2542
          </p>
        </div>

        {/* Vision / Mission / Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionData.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-3xl p-8 text-white hover:shadow-xl transition-shadow`}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-blue-100 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar (คล้ายสถิติผู้โดยสาร BTS) */}
        <div className="mt-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#003B71] dark:text-blue-400">25+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">ปีให้บริการ</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#003B71] dark:text-blue-400">4.6B+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">เที่ยวคน (สะสม)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#003B71] dark:text-blue-400">62</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">สถานี</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#003B71] dark:text-blue-400">68.25</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">กม. ระยะทางรวม</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}