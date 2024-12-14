import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const models = [
  {
    id: 'NGen-1',
    name: 'NGen-1',
    description: 'TNSA\'s First Seed-Completion AI Model',
    capabilities: ['Autonomous generation from seed input', 'Context-aware outputs', 'Creative writing'],
    framework: 'Tensorflow and TNSA ML(Base)',
  },
  {
    id: 'NGen2-advancifa-43.4-engine-tf',
    name: 'NGen-2',
    description: 'Our most advanced language model.',
    capabilities: ['Natural language processing', 'Code generation', 'Creative writing'],
    framework: 'Tensorflow and TNSA ML(Base)',
  },
  {
    id: 'NGen-3',
    name: 'NGen-3',
    description: 'Redefining General AI with Multimodal Mastery',
    capabilities: ['Multimodal data processing', 'Advanced language processing', 'Real-time interactions'],
    framework: 'ARCH-X 8',
  },
  {
    id: 'AGent',
    name: 'AGent*',
    description: 'TNSA\'s First Q Model with Predictive Capabilities',
    capabilities: ['Advanced Q* Algorithm', 'Predictive analysis', 'Financial forecasting'],
    framework: 'Q* + TNSA_Standard (Beta)',
  },
  {
    id: 'image-gen-1',
    name: 'IGen-1',
    description: 'State-of-the-art image generation model.',
    capabilities: ['Photo-realistic images', 'Artistic styles', 'Image editing'],
    framework: 'ARCH-X 8',
  },
  {
    id: 'StellarTTSv2-Stellarnium13-engine.90k',
    name: 'StellarTTS v2',
    description: 'Advanced audio transcription and analysis.',
    capabilities: ['Multi-language transcription', 'Speaker identification', 'Sentiment analysis'],
    framework: 'ARCH-X 8',
  },
]

export default function ModelsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">@Models</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <Card key={model.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{model.name}</CardTitle>
              <CardDescription>{model.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                {model.capabilities.map((capability, index) => (
                  <li key={index}>{capability}</li>
                ))}
              </ul>
              <p className="mt-2 font-semibold">Framework: {model.framework}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild className="w-full">
                <Link href={`/models/${model.id}`}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

