import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react'

const services = [
  { name: 'Website', status: 'operational' },
  { name: 'API', status: 'operational' },
  { name: 'Database', status: 'operational' },
  { name: 'Authentication', status: 'operational' },
  { name: 'Machine Learning Models', status: 'degraded' },
  { name: 'Data Processing Pipeline', status: 'operational' },
]

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case 'operational':
      return <CheckCircle className="h-5 w-5 text-green-500" />
    case 'degraded':
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />
    case 'down':
      return <XCircle className="h-5 w-5 text-red-500" />
    default:
      return null
  }
}

export default function StatusPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">System Status</h1>
      <Card>
        <CardHeader>
          <CardTitle>Current Status</CardTitle>
          <CardDescription>Last updated: {new Date().toLocaleString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div key={service.name} className="flex items-center justify-between p-4 border rounded">
                <span>{service.name}</span>
                <div className="flex items-center">
                  <StatusIcon status={service.status} />
                  <span className="ml-2 capitalize">{service.status}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

