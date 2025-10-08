"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Handles clicks for in-page anchors like #services or #contact.
  // If we're already on the homepage, scroll smoothly. Otherwise navigate
  // to the homepage with the hash so Next.js will land on the section.
  const handleHashNavigation = (e: React.MouseEvent, href: string) => {
    // Only handle hash links (start with '#')
    if (!href.startsWith("#")) return
    e.preventDefault()
    setIsOpen(false)
    const hash = href
    // If already on home, use DOM scroll
    if (pathname === "/") {
      const el = document.querySelector(hash)
      if (el) {
        ;(el as HTMLElement).scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Navigate to home with hash
      router.push(`/${hash}`)
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="font-heading text-xl font-semibold">
                Digital<span className="gradient-text">Pro</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleHashNavigation(e, item.href)}
                  className="group relative text-foreground/80 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute left-3 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 p-2"
                  aria-expanded={isOpen}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  {isOpen ? (
                    <X className="h-5 w-5 transform transition-transform duration-200" />
                  ) : (
                    <Menu className="h-5 w-5 transform transition-transform duration-200" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="fixed inset-0 sm:inset-auto sm:right-0 sm:h-full w-full sm:w-[300px] sm:rounded-l-2xl sm:shadow-xl bg-background p-6 overflow-auto"
              >
                <div className="flex flex-col space-y-6 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleHashNavigation(e, item.href)}
                      className="group relative text-foreground hover:text-primary px-4 py-4 text-lg font-medium transition-colors duration-150 rounded-lg"
                    >
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  ))}
                  <div className="pt-6 border-t" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}