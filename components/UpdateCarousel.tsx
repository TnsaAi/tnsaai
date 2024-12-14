'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const updates = [
  {
    id: 1,
    title: "New Language Model Release",
    description: "Introducing our latest language model with improved performance and efficiency.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 2,
    title: "AI Ethics Framework Update",
    description: "We've updated our AI ethics framework to ensure responsible AI development.",
    image: "/placeholder.svg?height=400&width=600"
  }
]

export function UpdateCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % updates.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + updates.length) % updates.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
      {updates.map((update, index) => (
        <div
          key={update.id}
          className={`absolute w-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={update.image}
            alt={update.title}
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-xl font-bold">{update.title}</h3>
            <p className="text-sm">{update.description}</p>
          </div>
        </div>
      ))}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}

