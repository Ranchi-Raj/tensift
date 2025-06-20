"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

// Smooth scroll enabled globally
if (typeof window !== "undefined") {
  document.documentElement.style.scrollBehavior = "smooth"
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Recognition", href: "#recognition" },
    { name: "Products", href: "#products" },
    { name: "Innovation", href: "#innovation" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-t from-[#00ADB5] to-[#180161] backdrop-blur-md border-b border-[#00ADB5]/30 shadow-xl text-[#E5F9FF]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          {/* Logo & Title */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5] to-[#180161] rounded-full blur-lg opacity-50 group-hover:opacity-80 transition" />
              <div className="relative bg-gradient-to-br from-[#00ADB5] to-[#180161] p-3 rounded-full shadow-lg">
                <Image src="/logo.png" width={40} height={40} alt="Logo" className="h-10 w-10" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ADB5] to-[#180161] rounded-lg blur opacity-30" />
              <div className="relative bg-[#1a1a2e]/80 px-4 py-2 rounded-lg border border-[#00ADB5]/30">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
                  Tensift Farmers
                </h1>
                <p className="text-xs text-[#E5F9FF]/70 font-medium">Fertilizer Pvt. Ltd.</p>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group px-3 py-2 font-medium text-[#E5F9FF] hover:text-[#00ADB5] transition-all duration-300"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-[#00ADB5]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ADB5] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#E5F9FF] hover:text-[#00ADB5] border border-[#00ADB5]/30 hover:bg-[#00ADB5]/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6">
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#222831] rounded-xl p-6 border border-[#00ADB5]/20 shadow-xl backdrop-blur-sm">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="relative group px-4 py-3 font-medium text-[#E5F9FF] hover:text-[#00ADB5] rounded-lg hover:bg-[#00ADB5]/10 border border-transparent hover:border-[#00ADB5]/30 transition-all duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
