'use client'

import { useState } from 'react'
import { Search, Book, MessageSquare, Phone, Zap, Users, Code, Wrench, Smartphone, Shield, Lock, Wallet } from 'lucide-react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'

const categories = [
  {
    icon: Book,
    title: 'About TNSA AI',
    articles: 4,
    href: '/support/about'
  },
  {
    icon: MessageSquare,
    title: 'TNSA.ai',
    articles: 41,
    href: '/support/tnsa-ai'
  },
  {
    icon: Phone,
    title: 'TNSA.ai Phone Verification',
    articles: 7,
    href: '/support/phone-verification'
  },
  {
    icon: Zap,
    title: 'TNSA.ai Pro Plan',
    articles: 17,
    href: '/support/pro-plan'
  },
  {
    icon: Users,
    title: 'TNSA for Work (Team & Enterprise)',
    articles: 34,
    href: '/support/enterprise'
  },
  {
    icon: Code,
    title: 'TNSA API & API Console',
    articles: 26,
    href: '/support/api'
  },
  {
    icon: Wrench,
    title: 'API Prompt Design',
    articles: 4,
    href: '/support/prompt-design'
  },
  {
    icon: Smartphone,
    title: 'TNSA Mobile Apps',
    articles: 13,
    href: '/support/mobile'
  },
  {
    icon: Shield,
    title: 'Privacy & Legal',
    articles: 13,
    href: '/support/privacy-legal'
  }
]

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">
            Discover answers and insights from the TNSA team
          </h1>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="search"
              placeholder="Search for articles..."
              className="pl-10 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredCategories.map((category) => (
            <Link 
              key={category.title} 
              href={category.href}
              className="block"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{category.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {category.articles} articles
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

