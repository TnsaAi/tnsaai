import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security | TNSA AI',
  description: 'TNSA AI Security - Learn about our commitment to protecting your data and ensuring a safe AI environment.',
}

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Security at TNSA AI</h1>
      <div className="prose prose-invert max-w-none">
        <p>At TNSA AI, we prioritize the security and integrity of our systems and your data. Our comprehensive security measures are designed to protect against unauthorized access, data breaches, and other potential threats.</p>
        
        <h2>Our Security Practices</h2>
        <ul>
          <li><strong>Data Encryption:</strong> We use industry-standard encryption protocols to protect data in transit and at rest.</li>
          <li><strong>Access Controls:</strong> We implement strict access controls and authentication mechanisms to ensure only authorized personnel can access sensitive information.</li>
          <li><strong>Regular Security Audits:</strong> We conduct regular security audits and penetration testing to identify and address potential vulnerabilities.</li>
          <li><strong>Incident Response Plan:</strong> We have a comprehensive incident response plan in place to quickly address and mitigate any security incidents.</li>
          <li><strong>Employee Training:</strong> Our employees undergo regular security awareness training to stay updated on the latest security best practices and threats.</li>
        </ul>

        <h2>AI Safety Measures</h2>
        <p>As an AI company, we take additional steps to ensure the safe and ethical use of our AI technologies:</p>
        <ul>
          <li><strong>Ethical AI Development:</strong> We adhere to strict ethical guidelines in the development and deployment of our AI systems.</li>
          <li><strong>Bias Mitigation:</strong> We actively work to identify and mitigate biases in our AI models to ensure fair and equitable outcomes.</li>
          <li><strong>Transparency:</strong> We strive for transparency in our AI processes and decision-making algorithms.</li>
          <li><strong>Human Oversight:</strong> We maintain human oversight in critical AI operations to ensure responsible use of our technologies.</li>
        </ul>

        <h2>Reporting Security Issues</h2>
        <p>If you believe you've discovered a security vulnerability in our systems or have concerns about the security of our services, please contact us immediately at security@tnsaai.com. We take all reports seriously and will investigate promptly.</p>

        <h2>Continuous Improvement</h2>
        <p>We are committed to continuously improving our security measures to stay ahead of evolving threats. We regularly update our security protocols and technologies to provide the highest level of protection for our users and systems.</p>

        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  )
}

