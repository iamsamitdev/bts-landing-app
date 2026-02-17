import { Metadata } from "next"

// ✅ Metadata แยกเฉพาะหน้าติดต่อเรา
export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description: "ติดต่อ BTS SkyTrain ศูนย์ลูกค้าสัมพันธ์ โทร 0 2617 6000 อาคารบีทีเอส ถนนพหลโยธิน กรุงเทพฯ",
  keywords: ["ติดต่อ BTS", "ศูนย์ลูกค้าสัมพันธ์", "โทร BTS", "ที่อยู่ BTS"],
  alternates: {
    canonical: "https://www.bts.co.th/contact",
  },
  openGraph: {
    title: "ติดต่อเรา | BTS SkyTrain",
    description: "ติดต่อ BTS SkyTrain ศูนย์ลูกค้าสัมพันธ์ โทร 0 2617 6000",
    url: "https://www.bts.co.th/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#003B71] to-[#002855] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">📞 ติดต่อเรา</h1>
          <p className="text-lg text-blue-100">ศูนย์ลูกค้าสัมพันธ์ BTS SkyTrain พร้อมให้บริการ</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#003B71] dark:text-blue-400 mb-6">
                ข้อมูลติดต่อ
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">ที่อยู่</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      อาคารบีทีเอส 1000 ถนนพหลโยธิน<br />
                      แขวงจอมพล เขตจตุจักร กรุงเทพฯ 10900
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">โทรศัพท์</p>
                    <p className="text-gray-600 dark:text-gray-400">0 2617 6000 (06.00 - 24.00 น.)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">อีเมล</p>
                    <p className="text-gray-600 dark:text-gray-400">info@bts.co.th</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#003B71] dark:text-blue-400 mb-6">
                เวลาเปิดให้บริการ
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">จันทร์ - ศุกร์</span>
                  <span className="font-semibold text-[#003B71] dark:text-blue-400">05:15 - 00:00 น.</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">เสาร์ - อาทิตย์</span>
                  <span className="font-semibold text-[#003B71] dark:text-blue-400">05:30 - 00:00 น.</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 dark:text-gray-300">วันหยุดนักขัตฤกษ์</span>
                  <span className="font-semibold text-[#003B71] dark:text-blue-400">06:00 - 00:00 น.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
            <h2 className="text-2xl font-bold text-[#003B71] dark:text-blue-400 mb-6">
              ติดตามเราผ่าน Social Media
            </h2>
            <div className="flex justify-center gap-8 text-4xl">
              <a href="https://www.facebook.com/BTSSkyTrain" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
              <a href="https://twitter.com/bts_skytrain" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">🐦</a>
              <a href="https://www.youtube.com/@BTSSkyTrainChannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">📺</a>
              <a href="https://line.me/ti/p/@btsskytrain" target="_blank" rel="noopener noreferrer" aria-label="LINE">💬</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}