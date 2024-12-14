import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">About TNSA AI</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <p className="text-xl mb-4">
            TNSA AI is at the forefront of artificial intelligence innovation. Founded in 2020, we've quickly become a leader in developing cutting-edge AI technologies that are transforming industries and improving lives.
          </p>
          <p className="text-xl mb-4">
            Our team of world-class researchers and engineers are passionate about pushing the boundaries of what's possible with AI, always with a focus on ethical development and positive impact.
          </p>
          <p className="text-xl">
            From advanced machine learning algorithms to revolutionary natural language processing, we're committed to shaping a future where AI enhances human potential and solves some of the world's most pressing challenges.
          </p>
        </div>
        <div className="relative h-96 w-full">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/RB%20Gradient%20Background%20395.jpg"
            alt="TNSA AI Team"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
      <p className="text-xl mb-12">
        To harness the transformative power of AI to solve real-world challenges, enhance lives, and set new benchmarks in technology and ethics.
      </p>
      <h2 className="text-3xl font-bold mb-6">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { title: "Innovation", description: "Constantly pushing the boundaries of what's possible in AI" },
          { title: "Ethics", description: "Ensuring our AI development adheres to the highest ethical standards" },
          { title: "Collaboration", description: "Fostering partnerships to drive progress in AI research and applications" }
        ].map((value, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-6">Our Leadership</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['CEO', 'CTO'].map((role) => (
          <Card key={role}>
            <CardHeader>
              <div className="relative h-32 w-32 mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200&text=Leader"
                  alt={role}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <CardTitle>
                {role === 'CEO' ? 'Nachiketh Abimalla' : (role === 'CTO' ? 'Thishyaketh Abimalla' : 'Jane Doe')}
              </CardTitle>
              <CardDescription>{role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center">A visionary building AGI.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

