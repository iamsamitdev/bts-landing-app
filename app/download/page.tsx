import { Metadata } from "next"
import AppDownload from "@/components/AppDownload"

// ✅ Metadata แยกเฉพาะหน้าดาวน์โหลด
export const metadata: Metadata = {
  title: "ดาวน์โหลดแอป THE SKYTRAINs",
  description: "ดาวน์โหลดแอปพลิเคชัน THE SKYTRAINs วางแผนเดินทาง เช็คเส้นทาง เวลาเดินรถ ผ่าน App Store และ Google Play",
  keywords: ["แอป BTS", "THE SKYTRAINs", "ดาวน์โหลด", "App Store", "Google Play"],
  alternates: {
    canonical: "https://www.bts.co.th/download",
  },
  openGraph: {
    title: "ดาวน์โหลดแอป THE SKYTRAINs | BTS SkyTrain",
    description: "ดาวน์โหลดแอป THE SKYTRAINs วางแผนเดินทาง เช็คเส้นทาง เวลาเดินรถ",
    url: "https://www.bts.co.th/download",
    images: [{ url: "https://www.bts.co.th/og-download.jpg", width: 1200, height: 630, alt: "THE SKYTRAINs App" }],
  },
}

export default function DownloadPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#003B71] to-[#002855] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">📱 ดาวน์โหลดแอป THE SKYTRAINs</h1>
          <p className="text-lg text-blue-100">วางแผนการเดินทาง เช็คเส้นทาง เวลาเดินรถ ครบจบในแอปเดียว</p>
        </div>
      </section>

      {/* App Download */}
      <AppDownload />
    </div>
  )
}