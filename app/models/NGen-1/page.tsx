import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function NGen1Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">NGen-1: TNSA's First Seed-Completion AI Model</h1>
      <p className="text-xl mb-8">
        NGen-1 is TNSA's pioneering model, uniquely designed to take an initial "seed" input and autonomously generate fully formed, context-aware outputs. As the foundation of TNSA's AI journey, NGen-1 showcases the ability to build on a minimal prompt—whether it's a fragment of text, an idea, or a simple problem—and develop it into a comprehensive, nuanced solution.
      </p>

      <div className="mb-8">
        <Image
          src="/placeholder.svg?height=400&width=600&text=NGen-1+Model+Visualization"
          alt="NGen-1 Model Visualization"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Key Capabilities</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Autonomous generation from seed input</li>
        <li>Context-aware output production</li>
        <li>Creative writing and problem-solving</li>
        <li>Content generation from minimal prompts</li>
        <li>Understanding and expanding core elements of a seed</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-medium text-gray-500">Architecture</dt>
          <dd className="mt-1">Advanced deep learning and language modeling</dd>
        </div>
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-medium text-gray-500">Application Focus</dt>
          <dd className="mt-1">Creative writing, Problem-solving, Content generation</dd>
        </div>
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-medium text-gray-500">Foundation</dt>
          <dd className="mt-1">Base model for the NGen series</dd>
        </div>
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-medium text-gray-500">Framework</dt>
          <dd className="mt-1">Tensorflow and TNSA ML(Base)</dd>
        </div>
      </dl>

      <h2 className="text-2xl font-semibold mb-4">Applications</h2>
      <p className="mb-8">
        Leveraging advanced deep learning and language modeling techniques, NGen-1 is capable of understanding the core elements of a seed and expanding them with coherence and precision. It has applications in creative writing, complex problem-solving, and content generation, providing a strong base for more advanced models in the NGen series.
      </p>

      <Button asChild>
        <a href="#" className="inline-block">Request Access to NGen-1</a>
      </Button>
    </div>
  )
}

