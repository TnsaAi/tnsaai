import { Metadata } from 'next'
import { AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'API Documentation | TNSA AI',
  description: 'API documentation for TNSA AI services (Under Development).',
}

const apiSections = [
  {
    title: "Authentication",
    description: "Learn how to authenticate your requests to the TNSA AI API.",
  },
  {
    title: "Endpoints",
    description: "Explore the various endpoints available in the TNSA AI API.",
  },
  {
    title: "Data Models",
    description: "Understand the structure of data used in API requests and responses.",
  },
  {
    title: "Error Handling",
    description: "Learn about error codes and how to handle them in your applications.",
  },
]

export default function ApiPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">API Documentation</h1>
      
      <Alert variant="warning" className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Under Development</AlertTitle>
        <AlertDescription>
          This API documentation is currently under development. Some information may be incomplete or subject to change.
        </AlertDescription>
      </Alert>
      
      <p className="text-xl mb-12">Welcome to the TNSA AI API documentation. Our API allows you to integrate TNSA AI's powerful artificial intelligence capabilities into your own applications and services.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {apiSections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 italic">Content coming soon...</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

