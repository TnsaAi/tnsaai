import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"

const products = {
  'adhyaapak-2': {
    name: 'Adhyaapak-2',
    description: 'A revolutionary teaching assistant designed to adapt to individual learning styles.',
    features: [
      'Personalized learning paths',
      'Real-time feedback',
      'Multi-subject support',
      'AI-powered progress tracking',
      'Interactive lesson plans',
    ],
    technicalSpecs: {
      aiModel: 'NGen Education Series',
      compatibility: 'Web-based, iOS, Android',
      dataPrivacy: 'GDPR and COPPA compliant',
    },
  },
  'diffusex2': {
    name: 'DiffuseX2',
    description: 'Industry-grade text-to-image AI models pushing the boundaries of creativity.',
    features: [
      'High-resolution output',
      'Style customization',
      'Batch processing',
      'Multi-prompt synthesis',
      'Negative prompt support',
    ],
    technicalSpecs: {
      modelArchitecture: 'Diffusion-based',
      outputResolution: 'Up to 4096x4096 pixels',
      apiIntegration: 'REST API and SDK available',
    },
  },
  'arch-x-9': {
    name: 'ARCH-X 9 Framework',
    description: 'A scalable architecture to streamline the development of robust AI systems.',
    features: [
      'Modular design',
      'Easy integration',
      'Performance optimization',
      'Scalable infrastructure',
      'Built-in monitoring and analytics',
    ],
    technicalSpecs: {
      programmingLanguages: 'Python, Java, C++',
      cloudSupport: 'AWS, Azure, Google Cloud',
      scalability: 'Horizontal and vertical scaling',
    },
  },
  'ngen-language-models': {
    name: 'NGen Language Models',
    description: 'High-performance generative models designed for advanced tasks across domains.',
    features: [
      'Multi-lingual support',
      'Context-aware responses',
      'Fine-tuning capabilities',
      'Domain-specific variants',
      'Ethical AI guidelines compliance',
    ],
    technicalSpecs: {
      modelSizes: '1B to 175B parameters',
      trainingData: 'Curated multilingual dataset',
      inferenceSpeed: 'Optimized for low-latency applications',
    },
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl mb-8">{product.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      <ul className="list-disc list-inside mb-8">
        {product.features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {Object.entries(product.technicalSpecs).map(([key, value]) => (
          <div key={key} className="border-b border-gray-200 pb-2">
            <dt className="font-medium text-gray-500">{key}</dt>
            <dd className="mt-1">{value}</dd>
          </div>
        ))}
      </dl>

      <Button asChild>
        <a href="#contact-sales" className="inline-block">Contact Sales for Access</a>
      </Button>
    </div>
  )
}

