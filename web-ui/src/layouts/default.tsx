import { Link } from '@heroui/link'

import { Navbar } from '@/components/navbar'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">{children}</main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://heroui.com"
          title="heroui.com homepage"
        >
          <span className="text-default-500 text-xs pt-0.5">&copy; 2025, </span>
          <p className="text-default-500 text-xs">Zignificant</p>
        </Link>
      </footer>
    </div>
  )
}
