import { Metadata } from "next"
import TrainLines from "@/components/TrainLines"

// ✅ Metadata แยกเฉพาะหน้าสายรถไฟฟ้า
export const metadata: Metadata = {
  title: "สายรถไฟฟ้า BTS",
  description: "สายรถไฟฟ้า BTS ทั้งหมด สายสุขุมวิท สายสีลม สายสีทอง สายสีเหลือง สายสีชมพู BRT",
  keywords: ["สายรถไฟฟ้า", "สายสุขุมวิท", "สายสีลม", "สายสีทอง", "สายสีเหลือง", "สายสีชมพู", "BRT"],
  alternates: {
    canonical: "https://www.bts.co.th/train-lines",
  },
  openGraph: {
    title: "สายรถไฟฟ้า BTS | BTS SkyTrain",
    description: "สายรถไฟฟ้า BTS ทั้งหมด สายสุขุมวิท สายสีลม สายสีทอง และอื่นๆ",
    url: "https://www.bts.co.th/train-lines",
    images: [{ url: "https://www.bts.co.th/og-trainlines.jpg", width: 1200, height: 630, alt: "BTS Train Lines" }],
  },
}

export default function TrainLinesPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#003B71] to-[#002855] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">🚇 สายรถไฟฟ้า BTS</h1>
          <p className="text-lg text-blue-100">สายรถไฟฟ้าทั้งหมดที่ให้บริการในกรุงเทพมหานคร</p>
        </div>
      </section>

      {/* Train Lines */}
      <TrainLines />
    </div>
  )
}