import { Metadata } from "next"
import HeroBanner from "@/components/HeroBanner"
import RouteFinder from "@/components/RouteFinder"
import QuickServices from "@/components/QuickServices"
import NewsEvents from "@/components/NewsEvents"

// Metadata เฉพาะหน้าแรก
export const metadata: Metadata = {
  title: "หน้าแรก - เส้นทาง ค่าโดยสาร โปรโมชัน",
  description: "ระบบรถไฟฟ้า BTS SkyTrain ค้นหาเส้นทาง อัตราค่าโดยสาร เวลาเดินรถ โปรโมชัน และบริการต่างๆ",
  alternates: {
    canonical: "https://www.bts.co.th",
  },
  openGraph: {
    title: "BTS SkyTrain | ระบบขนส่งมวลชนกรุงเทพ",
    description: "ระบบรถไฟฟ้าขนส่งมวลชนกรุงเทพ สะดวก รวดเร็ว ปลอดภัย ค้นหาเส้นทางและค่าโดยสาร",
    url: "https://www.bts.co.th",
    images: [{ url: "https://www.bts.co.th/og-home.jpg", width: 1200, height: 630, alt: "BTS SkyTrain" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BTS SkyTrain | ระบบขนส่งมวลชนกรุงเทพ",
    description: "ระบบรถไฟฟ้าขนส่งมวลชนกรุงเทพ สะดวก รวดเร็ว ปลอดภัย",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <RouteFinder />
      <NewsEvents />
      <QuickServices />
    </>
  )
}