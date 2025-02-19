import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const TermsOfService = () => {
    const location = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    
  
  return (
    <div className="bg-black mt-12 text-white py-10 px-6">
      <h1 className="text-3xl font-semibold mb-4">Terms of Service Agreement for Busitron</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          Welcome to Busitron ("we," "us," "our"). By using our website, mobile applications, products,
          and services (collectively, the "Services"), you agree to comply with and be bound by the
          following Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms at any time without prior notice. It is your responsibility
          to review these Terms periodically. Continued use of our Services after any changes constitutes acceptance of the
          revised Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Use of Services</h2>
        <p>
          You must be of legal age in your jurisdiction to use our Services. By using our Services, you represent and warrant
          that you are of legal age.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. User Accounts</h2>
        <p className="mb-2">
          <strong>4.1. Registration:</strong> To access certain features of our Services, you may need to create a user
          account. You agree to provide accurate, current, and complete information during the registration process.
        </p>
        <p>
          <strong>4.2. Account Security:</strong> You are responsible for maintaining the security of your account credentials.
          You agree not to share your account information and to notify us immediately of any unauthorized use of your account.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Content</h2>
        <p className="mb-2">
          <strong>5.1. User-Generated Content:</strong> By submitting content (e.g., reviews, comments, messages) to our
          Services, you grant us a non-exclusive, royalty-free, worldwide, perpetual, irrevocable right to use, reproduce,
          modify, adapt, publish, distribute, and display such content.
        </p>
        <p>
          <strong>5.2. Prohibited Content:</strong> You agree not to upload, post, or transmit any content that violates
          applicable laws, infringes on the rights of others, is harmful, offensive, or violates these Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Privacy</h2>
        <p>
          Please review our Privacy Policy for information about how we collect, use, and protect your personal information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to our Services at our discretion, with or without cause,
          and without notice.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Disclaimers and Limitation of Liability</h2>
        <p className="mb-2">
          <strong>8.1. Disclaimer:</strong> Our Services are provided on an "as-is" and "as available" basis without warranties
          of any kind, either express or implied. We do not warrant that our Services will be error-free, uninterrupted, or secure.
        </p>
        <p>
          <strong>8.2. Limitation of Liability:</strong> To the fullest extent permitted by law, we shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
          incurred directly or indirectly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Governing Law and Jurisdiction</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of US Jurisdiction. Any disputes arising
          from or related to these Terms or our Services shall be subject to the exclusive jurisdiction of the courts in
          United States Jurisdiction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding these Terms, please contact us at{" "}
          <a href="mailto:info@busitron.com" className="text-yellow-400 hover:text-yellow-500 transition duration-300">
            info@busitron.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
