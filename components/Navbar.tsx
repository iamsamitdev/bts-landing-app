"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect, useSyncExternalStore } from "react"

// ข้อมูลเมนู - ใช้ Route จริง (Multi-Page SEO)
const menuItems = [
  { name: "หน้าแรก", href: "/" },
  { name: "เส้นทาง", href: "/routemap" },
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "โปรโมชัน", href: "/promotions" },
  { name: "ข่าวสาร", href: "/news" },
]

// ข้อมูล Dropdown Menu "เพิ่มเติม"
const moreDropdownItems = [
  { name: "สายรถไฟฟ้า", href: "/train-lines" },
  { name: "ดาวน์โหลดแอป", href: "/download" },
  { name: "ติดต่อเรา", href: "/contact" },
]

// Dark Mode store สำหรับ useSyncExternalStore
let darkModeListeners: Array<() => void> = []

function subscribeToDarkMode(callback: () => void) {
  darkModeListeners.push(callback)
  return () => {
    darkModeListeners = darkModeListeners.filter((l) => l !== callback)
  }
}

function getDarkModeSnapshot() {
  if (typeof window === "undefined") return false
  return localStorage.getItem("darkMode") === "true"
}

function getDarkModeServerSnapshot() {
  return false
}

function setDarkMode(value: boolean) {
  localStorage.setItem("darkMode", String(value))
  if (value) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
  darkModeListeners.forEach((listener) => listener())
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [lang, setLang] = useState<"th" | "en">("th")
  const pathname = usePathname() // ใช้ตรวจสอบ Active Link

  // ใช้ useSyncExternalStore สำหรับ Dark Mode
  const isDarkMode = useSyncExternalStore(
    subscribeToDarkMode,
    getDarkModeSnapshot,
    getDarkModeServerSnapshot
  )

  useEffect(() => {
    if (getDarkModeSnapshot()) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  // ปิด dropdown เมื่อเปลี่ยนหน้า
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDropdownOpen(false)
    setIsMenuOpen(false)
  }, [pathname])

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }

  // ฟังก์ชันตรวจสอบ Active Link
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      {/* Top Bar - สีเทาเข้ม (อ้างอิงจากเว็บ BTS จริง) */}
      <div className="bg-bts-navy text-white text-sm py-1">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="hidden md:flex items-center gap-2 text-xs">
            <Link href="/" className="hover:text-gray-300 transition-colors">หน้าแรก</Link>
            <span>|</span>
            <Link href="/news" className="hover:text-gray-300 transition-colors">ข่าวสารและกิจกรรม</Link>
            <span>|</span>
            <Link href="/about" className="hover:text-gray-300 transition-colors">ข้อแนะนำเพื่อความปลอดภัย</Link>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Link href="#" className="hover:text-gray-300 transition-colors">ร่วมงานกับบีทีเอส</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">ติดต่อเรา</Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-300 transition-colors">คำถามที่พบบ่อย</Link>
            <span>|</span>
            <button
              onClick={() => setLang(lang === "th" ? "en" : "th")}
              className="hover:text-gray-300 transition-colors"
            >
              🌐 {lang === "th" ? "TH" : "EN"}
            </button>
            <button onClick={toggleDarkMode} className="hover:text-gray-300 transition-colors">
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - ใช้ logo จริงของ BTS */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://www.bts.co.th/files/uploads/home-page2/img/BTS_LOGO_RGB_600.png"
              alt="BTS SkyTrain Logo"
              width={61}
              height={71}
              unoptimized
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors font-medium ${
                  isActive(item.href)
                    ? "text-bts-navy dark:text-blue-400 border-b-2 border-bts-navy pb-1"
                    : "text-bts-navy dark:text-gray-300 hover:text-bts-navy-hover dark:hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown - เพิ่มเติม */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1 transition-colors font-medium ${
                  moreDropdownItems.some((item) => isActive(item.href))
                    ? "text-bts-navy dark:text-blue-400"
                    : "text-bts-navy dark:text-gray-300 hover:text-bts-navy-hover dark:hover:text-blue-400"
                }`}
              >
                เพิ่มเติม
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-4 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 border border-gray-100 dark:border-gray-700">
                  {moreDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 ${
                        isActive(item.href)
                          ? "bg-blue-50 dark:bg-gray-700 text-bts-navy dark:text-blue-400 font-medium"
                          : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-bts-navy dark:hover:text-blue-400"
                      }`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-bts-navy dark:text-gray-300 hover:text-bts-navy-hover dark:hover:text-blue-400 transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {moreDropdownItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-bts-navy dark:text-blue-400 font-medium"
                      : "text-gray-500 dark:text-gray-400 hover:text-bts-navy dark:hover:text-blue-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}