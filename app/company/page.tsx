import { CheckCircle } from 'lucide-react'

const values = [
  { title: "Innovation with Integrity", description: "We innovate to inspire, always ensuring our work aligns with ethical standards." },
  { title: "People-Centric Design", description: "Whether it's AI for classrooms or enterprises, our solutions are built for people, by people." },
  { title: "Excellence in Safety", description: "Safety is embedded in every stage of our development, making AI trustworthy for all." },
]

const whatWeDo = [
  { title: "Advanced AI Systems", description: "From conversational AI to multimodal learning, our in-house models—like NGen Series and Eclipse Architecture—are designed to deliver intelligent and scalable solutions." },
  { title: "Industry Solutions", description: "Tailored AI tools for education, healthcare, finance, and more. Each solution is purpose-built to maximize efficiency, accuracy, and user experience." },
  { title: "Responsible Innovation", description: "We prioritize ethical AI development, ensuring fairness, transparency, and inclusivity in every solution we create." },
  { title: "Open Collaboration", description: "Through partnerships with governments, institutions, and industry leaders, we work to solve global challenges and define the future of AI responsibly." },
]

export default function Company() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">@Company</h1>
      <p className="text-xl mb-8">At TNSA AI, we are redefining innovation, unlocking the true potential of Artificial Intelligence to build a smarter, safer, and more connected world. Guided by a vision of inclusivity and progress, we strive to create cutting-edge solutions that empower individuals, industries, and communities globally.</p>

      <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
      <p className="text-lg mb-8">To harness the transformative power of AI to solve real-world challenges, enhance lives, and set new benchmarks in technology and ethics.</p>

      <h2 className="text-3xl font-bold mb-4">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {whatWeDo.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-4">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {values.map((value, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500" />
            <div>
              <h3 className="font-semibold">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-4">Why Choose TNSA AI?</h2>
      <ul className="list-disc list-inside space-y-2 mb-8">
        <li>Cutting-edge AI technologies.</li>
        <li>Tailored solutions for diverse industries.</li>
        <li>Commitment to safety and responsibility.</li>
        <li>Expertise in delivering scalable, impactful systems.</li>
      </ul>

      <h2 className="text-3xl font-bold mb-4">Join Us</h2>
      <p className="text-lg mb-8">We are building the future, and you can be part of it. Collaborate, innovate, and lead the AI revolution with TNSA.</p>

      <p className="text-xl font-bold">Let's create a better tomorrow, together.</p>
    </div>
  )
}

