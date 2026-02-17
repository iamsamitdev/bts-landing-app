import { Metadata } from "next"
import RouteFinder from "@/components/RouteFinder"
import TrainLines from "@/components/TrainLines"

// ✅ Metadata แยกเฉพาะหน้าเส้นทาง
export const metadata: Metadata = {
  title: "เส้นทางและอัตราค่าโดยสาร",
  description: "ค้นหาเส้นทางรถไฟฟ้า BTS พร้อมอัตราค่าโดยสาร เวลาเดินรถ แผนที่สถานี สายสุขุมวิท สายสีลม สายสีทอง",
  keywords: ["เส้นทาง BTS", "ค่าโดยสาร", "แผนที่สถานี", "สายสุขุมวิท", "สายสีลม", "สายสีทอง"],
  alternates: {
    canonical: "https://www.bts.co.th/routemap",
  },
  openGraph: {
    title: "เส้นทางและอัตราค่าโดยสาร | BTS SkyTrain",
    description: "ค้นหาเส้นทางรถไฟฟ้า BTS พร้อมอัตราค่าโดยสาร เวลาเดินรถ แผนที่สถานี",
    url: "https://www.bts.co.th/routemap",
    images: [{ url: "https://www.bts.co.th/og-routemap.jpg", width: 1200, height: 630, alt: "BTS Route Map" }],
  },
}

export default function RouteMapPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#003B71] to-[#002855] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">🗺️ เส้นทางและอัตราค่าโดยสาร</h1>
          <p className="text-lg text-blue-100">ค้นหาเส้นทาง วางแผนการเดินทาง พร้อมอัตราค่าโดยสาร</p>
        </div>
      </section>

      {/* Route Finder */}
      <RouteFinder />

      {/* Train Lines */}
      <TrainLines />
    </div>
  )
}