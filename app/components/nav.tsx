"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Optymalizacja", href: "/Internal" },
    { label: "Wizerunek", href: "/External" },
        { label: "Realizacje", href: "/projects" },
        { label: "Kontakt", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full transition-all duration-500 ease-out ${
        isScrolled
          ? "max-w-3xl bg-zinc-900/80 shadow-[0_0_20px_rgba(0,122,255,0.15)]"
          : "max-w-4xl bg-zinc-900/50 shadow-none"
      } backdrop-blur-xl rounded-full border border-white/10`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <div className="font-sans font-bold text-white text-xl tracking-tighter flex items-end">
            TJ
            <span className="w-2 h-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-400 mb-1 ml-0.5 animate-pulse"></span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Primary Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="rounded-full bg-linear-to-r from-blue-600/80 to-cyan-400/80   text-white text-sm font-medium px-6 py-2 transition-all duration-500 hover:bg-linear-to-l   shadow-[0_0_15px_rgba(0,122,255,0.3)] hover:shadow-[0_0_25px_rgba(0,122,255,0.5)]">
            Darmowa konsultacja
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              className="rounded-full bg-[#007AFF] text-white font-medium w-full py-3 mt-2 shadow-[0_0_20px_rgba(0,122,255,0.2)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
