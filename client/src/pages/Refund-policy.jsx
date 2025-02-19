import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const RefundPolicy = () => {
    const location = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    
  
  return (
    <div className="bg-black mt-12 text-white py-10 px-6">
      <h1 className="text-3xl font-semibold mb-4">Refund Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Subscription Fees</h2>
        <p>
          All subscription fees for Busitron services are non-refundable. This
          includes fees associated with our business networking platform,
          integrated CRM, HRM, project management tools, and any other services
          provided through Busitron's subscription plans.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Online Marketplace Transactions</h2>
        <p>
          Transactions conducted through the Busitron online marketplace,
          whether for products or services, are considered final. Once a
          transaction is completed, no refunds will be issued. It is essential
          for users to review and confirm their purchases before finalizing
          transactions on the Busitron platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Cancellation of Services</h2>
        <p>
          Users who choose to cancel their Busitron subscription will not be
          eligible for a refund of any prepaid fees. The cancellation will be
          effective at the end of the current billing cycle. Please plan your
          subscription cancellations accordingly to avoid any unintended charges.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Policy Modifications</h2>
        <p>
          Busitron reserves the right to modify, revise, or update this No Refund
          Policy at any time. Users will be notified of any changes through the
          Busitron platform or other communication channels. We encourage users to
          review this policy regularly to stay informed about our refund practices.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Contact Information</h2>
        <p>
          For any questions or concerns related to this No Refund Policy, our
          dedicated support team is here to assist you. Please contact us at{" "}
          <a href="mailto:support@email.com" className="text-yellow-400 hover:text-yellow-500 transition duration-300">
            support@email.com
          </a>{" "}
          for prompt and helpful assistance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Acknowledgment</h2>
        <p>
          By using Busitron and engaging in transactions on our platform, you
          acknowledge and agree to abide by the terms outlined in this No Refund
          Policy. It is crucial to read and understand this policy before
          subscribing to Busitron or making transactions on the platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Appreciation</h2>
        <p>
          We appreciate your trust in Busitron as your business solution. Your
          satisfaction is important to us, and we are committed to providing
          excellent service and support to meet your business needs.
        </p>
        <p>
          Thank you for being a valued member of the Busitron community.
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;
