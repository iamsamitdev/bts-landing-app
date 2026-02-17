import { Metadata } from "next"
import NewsEvents from "@/components/NewsEvents"

// ✅ Metadata แยกเฉพาะหน้าข่าวสาร
export const metadata: Metadata = {
  title: "ข่าวสารและกิจกรรม",
  description: "ข่าวสารล่าสุด กิจกรรม ประกาศสำคัญ จาก BTS SkyTrain ระบบขนส่งมวลชนกรุงเทพ",
  keywords: ["ข่าว BTS", "กิจกรรม BTS", "ประกาศ BTS", "อัปเดืต BTS"],
  alternates: {
    canonical: "https://www.bts.co.th/news",
  },
  openGraph: {
    title: "ข่าวสารและกิจกรรม | BTS SkyTrain",
    description: "ข่าวสารล่าสุดและกิจกรรมจาก BTS SkyTrain",
    url: "https://www.bts.co.th/news",
    images: [{ url: "https://www.bts.co.th/og-news.jpg", width: 1200, height: 630, alt: "BTS News" }],
  },
}

export default function NewsPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#003B71] to-[#002855] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">📰 ข่าวสารและกิจกรรม</h1>
          <p className="text-lg text-blue-100">ติดตามข่าวสารล่าสุดจาก BTS SkyTrain</p>
        </div>
      </section>

      {/* News & Events */}
      <NewsEvents />
    </div>
  )
}