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
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
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
                  className="text-foreground/80 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent hover:rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="gradient-bg hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleHashNavigation(e, item.href)}
                      className="text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Button className="w-full gradient-bg hover:opacity-90 transition-opacity">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}