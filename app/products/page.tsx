import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 'adhyaapak-2',
    name: 'Adhyaapak-2',
    description: 'A revolutionary teaching assistant designed to adapt to individual learning styles.',
    features: ['Personalized learning paths', 'Real-time feedback', 'Multi-subject support'],
  },
  {
    id: 'diffusex2',
    name: 'DiffuseX2',
    description: 'Industry-grade text-to-image AI models pushing the boundaries of creativity.',
    features: ['High-resolution output', 'Style customization', 'Batch processing'],
  },
  {
    id: 'arch-x-9',
    name: 'ARCH-X 9 Framework',
    description: 'A scalable architecture to streamline the development of robust AI systems.',
    features: ['Modular design', 'Easy integration', 'Performance optimization'],
  },
  {
    id: 'ngen-language-models',
    name: 'NGen Language Models',
    description: 'High-performance generative models designed for advanced tasks across domains.',
    features: ['Multi-lingual support', 'Context-aware responses', 'Fine-tuning capabilities'],
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">@Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild className="w-full">
                <Link href={`/products/${product.id}`}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

