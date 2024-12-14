import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Calendar } from 'lucide-react'

const researchUpdates = [
  {
    id: 'eclipse-multimodal-architecture',
    date: 'Dec 1, 2024',
    title: 'TNSA Eclipse Architecture: Unifying Multimodal Intelligence',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TV%20-%206-pYwEPoFAO8Pz0FkkfpmxyxEhuVRt9h.png',
    summary: 'Introducing our comprehensive machine learning library focused on multimodal development, designed to work across various types of data.'
  },
  {
    id: 'tokenize2-next-gen-tokenizer',
    date: 'Dec 5, 2024',
    title: 'Tokenize2: Our 2nd Generation Industry-level Tokenizer',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TV%20-%207-2tWrHkZTXmWasPWPtoOhW92ZPyU9F1.png',
    summary: 'Unveiling Tokenize2, an advanced tokenizer that transforms the way developers interact with text data, offering unparalleled sophistication.'
  },
  {
    id: 'tnsa-standard-framework',
    date: 'Dec 10, 2024',
    title: 'TNSA_Standard: A Foundation for Scalable Machine Learning',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TV%20-%208-HZldkHP1YZtB8Z3lK9FTF6HDjJkOvD.png',
    summary: 'Introducing our robust, scalable machine learning framework designed to meet the needs of cutting-edge AI and deep learning applications.'
  },
  {
    id: 'arch-x-7-framework',
    date: 'Dec 15, 2024',
    title: 'ARCH-X 7: Revolutionizing AI Development',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TV%20-%209-X1pSK6x3CVYvQ8An0mNHA0tzwYSDWR.png',
    summary: 'Presenting ARCH-X 7, a cutting-edge framework designed to streamline and optimize machine learning workflows.'
  },
]

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">@Research</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchUpdates.map((update) => (
          <Card key={update.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{update.title}</CardTitle>
              <CardDescription className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {update.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {update.image && update.image !== '' ? (
                <Image
                  src={update.image}
                  alt={update.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}
              <p className="line-clamp-3">{update.summary}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild className="w-full">
                <Link href={`/research/${update.id}`}>Read Full Paper</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

