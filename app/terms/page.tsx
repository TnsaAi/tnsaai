import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | TNSA AI',
  description: 'TNSA AI Terms of Service - Read our terms and conditions for using our services.',
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-invert max-w-none">
        <p>Welcome to TNSA AI. By using our services, you agree to comply with and be bound by the following terms and conditions. Please read these Terms of Service carefully before using our website or services.</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using TNSA AI's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>

        <h2>2. Use of Services</h2>
        <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.</p>

        <h2>3. Intellectual Property</h2>
        <p>The content, features, and functionality of TNSA AI's services are owned by TNSA AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

        <h2>4. User Content</h2>
        <p>You retain ownership of any content you submit to our services. By submitting content, you grant TNSA AI a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content.</p>

        <h2>5. Limitation of Liability</h2>
        <p>TNSA AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.</p>

        <h2>6. Changes to Terms</h2>
        <p>We reserve the right to modify or replace these Terms of Service at any time. We will provide notice of any significant changes by posting the new Terms of Service on this page and updating the "Last Updated" date.</p>

        <h2>7. Governing Law</h2>
        <p>These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms of Service, please contact us at terms@tnsaai.com.</p>

        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  )
}

