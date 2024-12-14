'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const safetyPillars = [
  { 
    title: "Child Safety", 
    description: "Championing industry standards to ensure children's protection across AI systems.",
    image: "https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/RB%20Gradient%20Background%20394.jpg"
  },
  { 
    title: "Data Privacy", 
    description: "Fortifying safeguards to protect personal information and uphold privacy.",
    image: "https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/RB%20Gradient%20Background%20393.jpg"
  },
  { 
    title: "Deepfake Transparency", 
    description: "Innovating tools to verify and clarify AI-generated content.",
    image: "https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/RB%20Gradient%20Background%20324.jpg"
  },
  { 
    title: "Bias Mitigation", 
    description: "Proactively identifying and eliminating biases to create fair and inclusive systems.",
    image: "https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/RB%20Gradient%20Background%20327.jpg"
  },
  { 
    title: "Ethical Elections", 
    description: "Collaborating globally to combat misinformation and protect democratic processes.",
    image: "https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/RB%20Gradient%20Background%20328.jpg"
  },
  { 
    title: "Voice Security", 
    description: "Protecting voice synthesis technologies from misuse while enhancing trust.",
    image: "https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/RB%20Gradient%20Background%20326.jpg"
  },
]

const teachTestAdapt = [
  { title: "Teach", description: "Our AI learns to prioritize well-being, distinguishing between right and wrong, filtering harmful content, and engaging with empathy." },
  { title: "Test", description: "Safety measures are stress-tested through expert collaboration and real-world scenarios, refining our safeguards continuously." },
  { title: "Adapt", description: "Real-world insights fuel our commitment to improving AI, making it more resilient and reliable with each interaction." },
]

const AnimatedCard = ({ title, description, delay }: { title: string; description: string; delay: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800 p-6 rounded-lg"
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p>{description}</p>
    </motion.div>
  )
}

export default function Safety() {
  const [currentPillar, setCurrentPillar] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const nextPillar = () => {
    setCurrentPillar((prev) => (prev + 1) % safetyPillars.length)
  }

  const prevPillar = () => {
    setCurrentPillar((prev) => (prev - 1 + safetyPillars.length) % safetyPillars.length)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">#AI Safety</h1>
      <p className="text-xl mb-8">Safety at Every Step</p>
      <p className="mb-8">At TNSA AI, safety isn't just a guideline—it's the foundation of everything we build. We believe AI should enhance lives responsibly, ensuring it's safe for everyone, always.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {teachTestAdapt.map((item, index) => (
          <AnimatedCard key={item.title} title={item.title} description={item.description} delay={index * 0.2} />
        ))}
      </div>

      <h2 className="text-4xl font-bold mb-8">Our Safety Pillars</h2>
      <div className="relative mb-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-semibold">{safetyPillars[currentPillar].title}</h3>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPillar}
              className="text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous pillar</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextPillar}
              className="text-white hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next pillar</span>
            </Button>
          </div>
        </div>
        <div 
          ref={scrollContainerRef}
          className="relative aspect-video rounded-lg overflow-hidden"
        >
          <Image
            src={safetyPillars[currentPillar].image}
            alt={safetyPillars[currentPillar].title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8">
            <p className="text-xl text-white">{safetyPillars[currentPillar].description}</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Safety Is a Journey, Not a Destination</h2>
      <p className="mb-12">We approach safety as an ongoing process, constantly evolving to anticipate risks, prevent harm, and improve trust.</p>

      <h2 className="text-3xl font-bold mb-6">A Safer Future Together</h2>
      <p>By working with policymakers, experts, and the global community, we're leading the charge to create AI systems that are not just powerful, but safe for all. Every step forward is another step toward a more secure, inclusive, and responsible AI-driven world.</p>
    </div>
  )
}

