import { Metadata } from "next"
import Promotions from "@/components/Promotions"

// ✅ Metadata แยกเฉพาะหน้าโปรโมชัน
export const metadata: Metadata = {
  title: "โปรโมชันและส่วนลด",
  description: "โปรโมชัน BTS SkyTrain แพ็กเกจ XTREME SAVINGS BTS x Grab 1 สถานี = 1 คะแนน และข้อเสนอพิเศษล่าสุด",
  keywords: ["โปรโมชัน BTS", "XTREME SAVINGS", "BTS x Grab", "ส่วนลดค่าโดยสาร", "Rabbit Card"],
  alternates: {
    canonical: "https://www.bts.co.th/promotions",
  },
  openGraph: {
    title: "โปรโมชันและส่วนลด | BTS SkyTrain",
    description: "โปรโมชัน BTS SkyTrain แพ็กเกจ XTREME SAVINGS และข้อเสนอพิเศษ",
    url: "https://www.bts.co.th/promotions",
    images: [{ url: "https://www.bts.co.th/og-promotions.jpg", width: 1200, height: 630, alt: "BTS Promotions" }],
  },
}

export default function PromotionsPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#C5A44E] to-[#FDB913] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">🎉 โปรโมชันและส่วนลด</h1>
          <p className="text-lg text-yellow-100">ข้อเสนอพิเศษจาก BTS SkyTrain ประหยัดค่าเดินทาง</p>
        </div>
      </section>

      {/* Promotions */}
      <Promotions />
    </div>
  )
}