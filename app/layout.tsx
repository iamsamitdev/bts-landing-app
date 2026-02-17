import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-thai",
})

// Default Metadata (ใช้เมื่อหน้าย่อยไม่ได้กำหนด)
export const metadata: Metadata = {
  title: {
    default: "BTS SkyTrain | ระบบขนส่งมวลชนกรุงเทพ",
    template: "%s | BTS SkyTrain",  // หน้าย่อยจะแทนที่ %s ด้วย title ของตัวเอง
  },
  description: "ระบบรถไฟฟ้าขนส่งมวลชนกรุงเทพ BTS SkyTrain สะดวก รวดเร็ว ปลอดภัย",
  keywords: ["BTS", "SkyTrain", "รถไฟฟ้า", "ขนส่งมวลชน", "กรุงเทพ"],
  openGraph: {
    siteName: "BTS SkyTrain",
    locale: "th_TH",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={notoSansThai.variable}>
      <body className={`${notoSansThai.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
