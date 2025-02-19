import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PrivacyPolicy = () => {
    const location = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    
  
  return (
    <div className="bg-black mt-12 text-white py-10 px-6">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Busitron! We value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your personal data when you
          interact with our website, mobile applications, products, and services
          (collectively, the "Services").
        </p>
        <p>
          By accessing or using our Services, you agree to the terms of this
          Privacy Policy. If you do not agree with the terms herein, please do
          not use our Services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <p>
          <strong>2.1. Personal Information:</strong> We may collect personal
          information that you voluntarily provide to us, including but not
          limited to your name, email address, phone number, address, and payment
          information when you create an account, make a purchase, or communicate
          with us.
        </p>
        <p>
          <strong>2.2. Usage Information:</strong> We collect information about
          how you interact with our Services, such as your IP address, device
          type, browser type, pages visited, and actions taken within our apps and
          website.
        </p>
        <p>
          <strong>2.3. Cookies and Similar Technologies:</strong> We may use
          cookies, web beacons, and other tracking technologies to enhance your
          experience and collect data about your usage patterns. You can manage
          your cookie preferences through your browser settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p>
          <strong>3.1. Provide and Improve Services:</strong> We use your
          information to provide, maintain, and improve our Services, including
          user accounts, customer support, and app functionality.
        </p>
        <p>
          <strong>3.2. Communications:</strong> We may use your contact
          information to send you important updates, newsletters, or promotional
          materials related to our Services. You can opt out of these
          communications at any time.
        </p>
        <p>
          <strong>3.3. Analytics:</strong> We may analyze usage data to
          understand how users interact with our Services, optimize our offerings,
          and make improvements.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share your information under the following
          circumstances:
        </p>
        <ul className="list-disc ml-6">
          <li>
            With trusted third-party service providers who assist us in
            operating and improving our Services.
          </li>
          <li>
            When required by law or to protect our rights, privacy, safety, or
            property.
          </li>
          <li>
            In connection with a business transition, such as a merger,
            acquisition, or sale of assets.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Security</h2>
        <p>
          We employ reasonable security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction. However, no method of data transmission or storage is 100%
          secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Choices</h2>
        <p>You have the right to:</p>
        <ul className="list-disc ml-6">
          <li>Access and correct your personal information.</li>
          <li>Opt out of receiving marketing communications.</li>
          <li>
            Delete your account and personal information, subject to applicable
            legal requirements.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Children's Privacy</h2>
        <p>
          Our Services are not intended for children under the age of 13. We do
          not knowingly collect or solicit personal information from children. If
          you believe we have collected information from a child, please contact
          us.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. International Users</h2>
        <p>
          If you access our Services from outside the United States, you consent
          to the transfer and processing of your information in the United States,
          which may have different data protection laws.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices or
          for other operational, legal, or regulatory reasons. We will notify you
          of any significant changes by posting an updated Privacy Policy on our
          website or through other means.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          If you have questions, concerns, or requests regarding this Privacy
          Policy or our data practices, please contact us at{" "}
          <a href="mailto:info@busitron.com" className="text-yellow-400">
            info@busitron.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
