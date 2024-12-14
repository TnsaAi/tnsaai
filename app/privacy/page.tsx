import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | TNSA AI',
  description: 'TNSA AI Privacy Policy - Learn how we protect your personal information and data.',
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p>At TNSA AI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.</p>
        
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include:</p>
        <ul>
          <li>Personal information (e.g., name, email address)</li>
          <li>Account credentials</li>
          <li>Content you create or share through our services</li>
          <li>Communication data when you contact us</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Personalize your experience</li>
          <li>Communicate with you about our services</li>
          <li>Monitor and analyze trends and usage</li>
          <li>Detect, prevent, and address technical issues</li>
        </ul>

        <h2>Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>

        <h2>Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact us using the information provided below.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@tnsaai.com.</p>

        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  )
}

