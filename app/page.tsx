'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const researchUpdates = [
  {
    id: 1,
    title: "AutoPA: Autoregressive Prompt Attention",
    description: "TNSA AI unveils a cutting-edge mechanism called Autoregressive Prompt Attention (AutoPA), redefining prompt handling with a dynamic attention mechanism that adapts to varying prompt lengths and complexity.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TV%20-%201-QUBww4j1u7dTr5uH2LBGZZDoO0oR7l.png",
  },
  {
    id: 2,
    title: "Eclipse-1 Nano Optimization",
    description: "Eclipse-1 Nano series receives a significant update, improving inference efficiency for edge devices by 20% without compromising model accuracy, enhancing Adhyaapak-2's performance in low-resource environments.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TV%20-%202-DmNYRIIyXEYfD5axCdrrKECTFumYuE.png",
  },
  {
    id: 3,
    title: "ARCH-X 9 Token Efficiency",
    description: "Tokenize2 tokenizer in ARCH-X 9 achieves 15% reduction in tokenization overhead, minimizing processing latency for multimodal data and streamlining applications across TNSA AI's frameworks.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TV%20-%203-8C3GwB01FoZzuXIVLaSO4hqaEZIgMu.png",
  },
  {
    id: 4,
    title: "StellarTTS Enhancements",
    description: "StellarTTS integrates expressive emotion modeling using NGen-2.1Base, generating speech with nuanced tonal variations based on contextual prompts, piloted for Adhyaapak-2 and other interactive applications.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TV%20-%204-zf8etvXOT4CGoCCRPVD3XIxqjMxRx2.png",
  },
]

const labUpdates = [
  {
    id: 1,
    title: "TNSA AI Supported by Microsoft",
    description: "We're excited to announce that TNSA AI has received support from Microsoft, enhancing our capabilities and reach.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TV%20-%205-PAekwCw9mOZNV7sNCXhyhh3FFUxQxP.png",
  },
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredResearchUpdates = researchUpdates.filter(update =>
    update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    update.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredLabUpdates = labUpdates.filter(update =>
    update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    update.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black">
        <div className="absolute h-full w-full bg-[radial-gradient(#332b4a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <section className="relative py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Advancing AI for
              <br />
              humanity's benefit
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
              TNSA AI is creating safe and ethical AI systems that enhance human potential and drive progress across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="/try"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-gray-200"
              >
                Try TNSA AI
              </Link>
              <Link
                href="/research"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 px-8 text-sm font-medium transition-colors hover:bg-gray-700"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-7xl px-4 md:px-6 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Latest Updates</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="search"
                placeholder="Search updates..."
                className="pl-10 pr-4 py-2 w-full sm:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResearchUpdates.map((update) => (
              <div key={update.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={update.image}
                  alt={update.title}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{update.title}</h3>
                  <p className="text-gray-400">{update.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-7xl px-4 md:px-6 mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Lab Updates</h2>
          <div className="grid grid-cols-1 gap-6">
            {filteredLabUpdates.map((update) => (
              <div key={update.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={update.image}
                  alt={update.title}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{update.title}</h3>
                  <p className="text-gray-400">{update.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Advanced Research", description: "Pushing the boundaries of AI with groundbreaking research and innovation.", link: "/research" },
              { title: "Ethical AI", description: "Developing AI systems with strong ethical principles and safety measures.", link: "/safety" },
              { title: "Industry Solutions", description: "Transforming industries with practical AI applications and tools.", link: "/products" }
            ].map((feature, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg border border-gray-800 bg-black p-6 sm:p-8">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
                  <Link href={feature.link} className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm sm:text-base">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

