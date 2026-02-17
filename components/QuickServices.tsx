import Link from "next/link"

const quickServices = [
  {
    icon: "🗺️",
    title: "เส้นทาง และอัตราค่าโดยสาร",
    href: "/routemap",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  },
  {
    icon: "📍",
    title: "สถานที่และกิจกรรม",
    href: "/news",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  },
  {
    icon: "🗾",
    title: "แผนที่บริเวณสถานี",
    href: "/routemap",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  },
  {
    icon: "🅿️",
    title: "ที่จอดรถ",
    href: "/routemap",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  },
  {
    icon: "🕐",
    title: "เวลาและความถี่ การเดินรถ",
    href: "/train-lines",
    color: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400",
  },
  {
    icon: "📦",
    title: "ทรัพย์สินสูญหาย",
    href: "/contact",
    color: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
  },
]

export default function QuickServices() {
  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {quickServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`flex flex-col items-center p-6 rounded-2xl ${service.color} hover:shadow-lg transition-all hover:-translate-y-1 group`}
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{service.icon}</span>
              <span className="text-sm font-medium text-center leading-tight">{service.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}