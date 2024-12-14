import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Documentation | TNSA AI',
  description: 'Comprehensive documentation for TNSA AI products and services.',
}

const docSections = [
  {
    title: "Getting Started",
    description: "Learn the basics of TNSA AI and how to set up your environment.",
    links: [
      { title: "Introduction to TNSA AI", href: "/docs/introduction" },
      { title: "Installation Guide", href: "/docs/installation" },
      { title: "Quick Start Tutorial", href: "/docs/quick-start" },
    ]
  },
  {
    title: "Core Concepts",
    description: "Understand the fundamental concepts behind TNSA AI technology.",
    links: [
      { title: "AI Models Overview", href: "/docs/ai-models" },
      { title: "Data Processing Pipeline", href: "/docs/data-processing" },
      { title: "Safety Measures", href: "/docs/safety-measures" },
    ]
  },
  {
    title: "API Reference",
    description: "Detailed documentation of TNSA AI APIs and integration guides.",
    links: [
      { title: "API Overview", href: "/api" },
      { title: "Authentication", href: "/api/authentication" },
      { title: "Endpoints", href: "/api/endpoints" },
    ]
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides to help you make the most of TNSA AI.",
    links: [
      { title: "Building Your First AI Model", href: "/docs/tutorials/first-model" },
      { title: "Integrating TNSA AI in Your App", href: "/docs/tutorials/integration" },
      { title: "Advanced Usage Scenarios", href: "/docs/tutorials/advanced" },
    ]
  },
]

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      <p className="text-xl mb-12">Welcome to the TNSA AI documentation. Here you'll find comprehensive guides and documentation to help you start working with TNSA AI as quickly as possible, as well as support if you get stuck.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {docSections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-blue-500 hover:underline">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

