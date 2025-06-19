"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import  Image from "next/image" 
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
    <nav className="bg-gradient-to-r from-[#222831] via-[#393E46] to-[#222831] text-[#EEEEEE] sticky top-0 z-50 shadow-2xl border-b border-[#00ADB5]/20 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5] to-[#180161] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#00ADB5] to-[#180161] p-3 rounded-full shadow-xl">
                <Image width={100} height={100} src="/logo.png" alt="Logo" className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ADB5] to-[#180161] rounded-lg blur opacity-25"></div>
              <div className="relative bg-[#222831] px-4 py-2 rounded-lg border border-[#00ADB5]/30">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00ADB5] to-[#180161] bg-clip-text text-transparent">
                  Tensift Farmers
                </h1>
                <p className="text-sm text-[#EEEEEE]/80 font-medium">Fertilizer Pvt. Ltd.</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group px-4 py-2 font-semibold text-[#EEEEEE] hover:text-[#00ADB5] transition-all duration-300"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5]/10 to-[#180161]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ADB5] to-[#180161] group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#EEEEEE] hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 border border-[#00ADB5]/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6">
            <div className="bg-gradient-to-br from-[#393E46] to-[#222831] rounded-xl p-6 border border-[#00ADB5]/20 shadow-2xl">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative group px-4 py-3 font-semibold text-[#EEEEEE] hover:text-[#00ADB5] transition-all duration-300 rounded-lg hover:bg-[#00ADB5]/10 border border-transparent hover:border-[#00ADB5]/30"
                    onClick={() => setIsMenuOpen(false)}
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
