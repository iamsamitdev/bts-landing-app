const trainLines = [
  {
    name: "สายสุขุมวิท",
    nameEn: "Sukhumvit Line",
    color: "bg-[#00693E]",
    textColor: "text-[#00693E]",
    borderColor: "border-[#00693E]",
    stations: "คูคต - เคหะฯ",
    stationCount: 47,
    emoji: "🟢",
  },
  {
    name: "สายสีลม",
    nameEn: "Silom Line",
    color: "bg-[#00693E]",
    textColor: "text-[#00693E]",
    borderColor: "border-[#00693E]",
    stations: "สนามกีฬาแห่งชาติ - บางหว้า",
    stationCount: 13,
    emoji: "🟢",
  },
  {
    name: "สายสีทอง",
    nameEn: "Gold Line",
    color: "bg-[#C5A44E]",
    textColor: "text-[#C5A44E]",
    borderColor: "border-[#C5A44E]",
    stations: "กรุงธนบุรี - คลองสาน",
    stationCount: 3,
    emoji: "🟡",
  },
  {
    name: "สายสีเหลือง",
    nameEn: "Yellow Line",
    color: "bg-[#FDB913]",
    textColor: "text-[#FDB913]",
    borderColor: "border-[#FDB913]",
    stations: "ลาดพร้าว - สำโรง",
    stationCount: 23,
    emoji: "🟨",
  },
  {
    name: "สายสีชมพู",
    nameEn: "Pink Line",
    color: "bg-[#E91E8C]",
    textColor: "text-[#E91E8C]",
    borderColor: "border-[#E91E8C]",
    stations: "แคราย - มีนบุรี",
    stationCount: 30,
    emoji: "🩷",
  },
  {
    name: "BRT สาทร-ราชพฤกษ์",
    nameEn: "Bus Rapid Transit",
    color: "bg-[#FF6F00]",
    textColor: "text-[#FF6F00]",
    borderColor: "border-[#FF6F00]",
    stations: "สาทร - ราชพฤกษ์",
    stationCount: 12,
    emoji: "🚌",
  },
]

export default function TrainLines() {
  return (
    <section id="train-lines" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🚇 สายรถไฟฟ้า
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ระบบรถไฟฟ้าภายใต้การดูแลของ BTS Group ครอบคลุมพื้นที่กรุงเทพมหานครและปริมณฑล
          </p>
        </div>

        {/* Train Lines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainLines.map((line, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 bg-gray-50 dark:bg-gray-800 border-l-4 ${line.borderColor} hover:shadow-lg transition-all cursor-pointer group`}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{line.emoji}</span>
                <div>
                  <h3 className={`text-xl font-bold ${line.textColor} mb-1`}>
                    {line.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    {line.nameEn}
                  </p>
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <p>📍 {line.stations}</p>
                    <p>🚏 {line.stationCount} สถานี</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}