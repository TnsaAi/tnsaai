'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { 
    name: 'Research', 
    href: '/research',
    dropdown: [
      { name: 'Research', href: '/research' },
      { name: 'Products', href: '/products' },
      { name: 'Models', href: '/models' },
    ]
  },
  { name: 'Safety', href: '/safety' },
  { 
    name: 'Company', 
    href: '/company',
    dropdown: [
      { name: 'About', href: '/about' },
      { name: 'Company', href: '/company' },
      { name: 'Status', href: '/status' },
    ]
  },
  { 
    name: 'Community', 
    href: 'https://madscientist.tech/home/profile/TNSA%20AI%20',
    external: true
  },
  {
    name: 'Blog',
    href: 'https://madscientist.tech/home/profile/TNSA%20AI%20',
    external: true
  }
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link
              href="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600 transition-all duration-300"
            >
              TNSA AI
            </Link>

            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                        pathname === item.href ? 'text-purple-400' : 'text-gray-300'
                      }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <>
                      <Link
                        href={item.href}
                        className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                          pathname === item.href ? 'text-purple-400' : 'text-gray-300'
                        }`}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/70 backdrop-filter backdrop-blur-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-purple-400 ${
                                  pathname === dropdownItem.href ? 'text-purple-400' : ''
                                }`}
                                role="menuitem"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <Link href="/join-foundation" className="hidden md:block">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Join Foundation</Button>
              </Link>
            </div>

            <button
              className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 pt-16 backdrop-blur-sm"
          >
            <nav className="p-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-lg text-gray-200 hover:text-purple-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-lg text-gray-200 hover:text-purple-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className="pl-6 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-base text-gray-300 hover:text-purple-400 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <Link href="/join-foundation" className="block w-full mt-4">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Join Foundation</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

