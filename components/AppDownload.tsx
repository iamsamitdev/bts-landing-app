import Link from "next/link"

export default function AppDownload() {
  return (
    <section className="py-16 bg-linear-to-r from-[#003B71] via-[#0056A6] to-[#003B71]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
          {/* Content */}
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📲 ดาวน์โหลดแอปพลิเคชัน THE SKYTRAINs
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-xl">
              วางแผนการเดินทาง เช็คเส้นทาง เวลาเดินรถ ค่าโดยสาร และข่าวสารอัปเดต 
              ครบจบในแอปเดียว สำหรับ iOS และ Android
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <span className="text-2xl">🍎</span>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <span className="text-2xl">▶️</span>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-3xl p-4 shadow-2xl w-64">
              <div className="bg-gray-100 rounded-2xl h-96 flex flex-col items-center justify-center gap-4">
                <div className="text-6xl">🚄</div>
                <div className="text-[#003B71] font-bold text-xl">THE SKYTRAINs</div>
                <div className="text-gray-500 text-sm">BTS SkyTrain App</div>
                <div className="w-32 h-32 bg-white rounded-xl border-2 border-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-xs text-center">QR Code<br/>ดาวน์โหลด</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}