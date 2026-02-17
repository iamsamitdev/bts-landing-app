import Link from "next/link"

const serviceLinks = [
  { name: "เส้นทางและอัตราค่าโดยสาร", href: "/routemap" },
  { name: "เวลาและความถี่การเดินรถ", href: "/train-lines" },
  { name: "แผนที่บริเวณสถานี", href: "/routemap" },
  { name: "ที่จอดรถ", href: "/routemap" },
  { name: "ทรัพย์สินสูญหาย", href: "/contact" },
]

const aboutLinks = [
  { name: "เกี่ยวกับ BTS", href: "/about" },
  { name: "ข่าวสารและกิจกรรม", href: "/news" },
  { name: "BTS E-Library", href: "/about" },
  { name: "ข้อแนะนำเพื่อความปลอดภัย", href: "/about" },
  { name: "ร่วมงานกับ BTS", href: "/contact" },
  { name: "คำถามที่พบบ่อย", href: "/contact" },
]

export default function Footer() {
  return (
    <footer>
      {/* Contact & Social Section - พื้นขาว ตัวอักษรน้ำเงินเข้ม (อ้างอิงจากเว็บ BTS จริง) */}
      <div className="bg-white dark:bg-bts-navy py-10 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <h2 className="text-2xl font-bold text-bts-navy dark:text-blue-400 mb-2">
                ติดต่อสอบถาม และติดตามข่าวสาร
              </h2>
              <p className="text-bts-navy dark:text-blue-300 text-sm">
                ศูนย์ลูกค้าสัมพันธ์
              </p>
              <p className="text-bts-navy dark:text-blue-300 text-sm">
                ติดต่อ <a href="tel:026176000" className="underline font-bold">0 2617 6000</a> ทุกวัน เวลา : 06.00 - 24.00 น.
              </p>
            </div>
            {/* Social Media - ไอคอนวงกลมเทาเข้ม */}
            <div className="flex gap-6 items-center">
              <a href="https://www.facebook.com/BTSSkyTrain" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 bg-bts-gray rounded-full flex items-center justify-center group-hover:bg-[#3b5998] transition-colors">
                  <span className="text-white text-2xl font-bold">f</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">BTSSkyTrain</span>
              </a>
              <a href="https://line.me/ti/p/@btsskytrain" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 bg-bts-gray rounded-full flex items-center justify-center group-hover:bg-[#00B900] transition-colors">
                  <span className="text-white text-sm font-bold">LINE</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">BTSSKYTRAIN</span>
              </a>
              <a href="https://www.youtube.com/@BTSSkyTrainChannel" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 bg-bts-gray rounded-full flex items-center justify-center group-hover:bg-[#FF0000] transition-colors">
                  <span className="text-white text-2xl">▶</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">BTSSkyTrainChannel</span>
              </a>
              <a href="https://twitter.com/bts_skytrain" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 bg-bts-gray rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
                  <span className="text-white text-xl font-bold">𝕏</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">BTS SkyTrain</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar - พื้นขาว มีเส้นคั่น (อ้างอิงจากเว็บ BTS จริง) */}
      <div className="bg-bts-navy text-white dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-white">
            📊 รายงานสถิติผู้โดยสารตั้งแต่ 05/12/2542 - 12/02/2569 จำนวน <span className="font-bold text-lg text-bts-navy text-white">4,657,931,288</span> เที่ยวคน
          </p>
        </div>
      </div>

      {/* Company Info Section - พื้นขาว มีเส้นคั่น (อ้างอิงจากเว็บ BTS จริง) */}
      <div className="bg-bts-navy dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold text-bts-navy dark:text-blue-400 mb-3">
                บริษัท ระบบขนส่งมวลชนกรุงเทพ จำกัด (มหาชน)
              </h3>
              <p className="text-white dark:text-gray-400 text-sm leading-relaxed">
                อาคารบีทีเอส 1000 ถนนพหลโยธิน แขวงจอมพล เขตจตุจักร<br />
                กรุงเทพฯ 10900 โทรศัพท์: <a href="tel:026177300" className="text-white dark:text-blue-400 hover:underline">0 2617 7300</a>
              </p>
            </div>

            {/* Service Links */}
            <div>
              <h3 className="text-white font-bold dark:text-blue-400 mb-3">ข้อมูลการใช้บริการ</h3>
              <ul className="space-y-1">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white dark:text-gray-400 hover:text-bts-navy dark:hover:text-blue-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Links + Download */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-white font-bold text-bts-navy dark:text-blue-400 mb-3">เกี่ยวกับเรา</h3>
                <ul className="space-y-1">
                  {aboutLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-white dark:text-gray-400 hover:text-bts-navy dark:hover:text-blue-400 transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar - สีเขียว BTS (อ้างอิงจากเว็บ BTS จริง) */}
      <div className="bg-bts-green dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4 py-2">
          <p className="text-center text-sm">
            ขอสงวนสิทธิ์ 2569 บริษัท ระบบขนส่งมวลชนกรุงเทพ จำกัด (มหาชน)
          </p>
        </div>
      </div>
    </footer>
  )
}