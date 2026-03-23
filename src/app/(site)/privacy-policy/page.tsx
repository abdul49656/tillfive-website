import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Till Five Pizza",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-foreground pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold text-white lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-white/50">Last Updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose-legal">

            <Section title="1. Information We Collect">
              <p>
                Till Five Pizza collects the following information when you use our
                website, place an order, or sign up for SMS communications: name,
                email address, phone number, delivery address, order history, and
                device/browser information. We may also collect information
                automatically through cookies and similar tracking technologies when
                you visit our website.
              </p>
            </Section>

            <Section title="2. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and status updates</li>
                <li>
                  Send promotional SMS messages and special offers if you have
                  opted in
                </li>
                <li>Improve our website and services</li>
                <li>Respond to your questions and customer service requests</li>
                <li>Comply with legal obligations</li>
              </ul>
            </Section>

            <Section title="3. SMS Opt-In Details">
              <p>
                By providing your phone number and opting in to SMS communications
                from Till Five Pizza, you agree to receive recurring promotional
                text messages including special offers, discounts, and updates.
                Message frequency varies. Message and data rates may apply. Consent
                to receive SMS messages is not a condition of purchase. You may opt
                out at any time by replying STOP to any message. For help, reply
                HELP or contact us at{" "}
                <a href="mailto:info@tillfivepizza.com">info@tillfivepizza.com</a>.
                Till Five Pizza will not share, sell, or disclose your SMS opt-in
                information or phone number to any third party for their own
                marketing purposes.
              </p>
            </Section>

            <Section title="4. Cookie and Tracking Practices">
              <p>
                Our website uses cookies and similar tracking technologies to
                enhance your browsing experience, analyze site traffic, and
                understand how visitors use our site. You can control cookie
                settings through your browser. Disabling cookies may affect some
                website functionality. We may use third-party analytics tools such
                as Google Analytics to collect and analyze usage data.
              </p>
            </Section>

            <Section title="5. Data Security and Handling">
              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, use, or disclosure. Your information is
                stored on secure servers and we follow industry-standard security
                practices. However, no method of transmission over the internet is
                100% secure and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="6. User Rights">
              <p>
                You have the right to access, update, or delete your personal
                information at any time. To opt out of SMS messages, reply STOP to
                any message. To opt out of email marketing, click the unsubscribe
                link in any email. To request access to or deletion of your personal
                data, contact us at{" "}
                <a href="mailto:info@tillfivepizza.com">info@tillfivepizza.com</a>.
                We will respond to all requests within a reasonable timeframe.
              </p>
            </Section>

            <Section title="7. No Sharing of SMS Opt-In Data">
              <p>
                Till Five Pizza does not sell, rent, or share your phone number or
                SMS opt-in consent data with any third party for marketing purposes.
                Your mobile information will not be shared with third parties or
                affiliates for their own marketing or promotional purposes.
                Information sharing with third parties for non-marketing purposes
                such as order fulfillment and payment processing may occur as
                necessary to operate our business.
              </p>
            </Section>

            <Section title="8. Contact Us">
              <p>
                If you have any questions about this Privacy Policy, contact us at:
              </p>
              <address>
                <strong>Till Five Pizza</strong>
                <br />
                825 Murfreesboro Pike, Nashville, TN 37217
                <br />
                Phone:{" "}
                <a href="tel:+16156063333">(615) 606-3333</a>
                <br />
                Email:{" "}
                <a href="mailto:info@tillfivepizza.com">info@tillfivepizza.com</a>
              </address>
            </Section>

          </div>

          <div className="mt-12 border-t border-border pt-8">
            <Link
              href="/"
              className="text-sm text-brand underline underline-offset-2 hover:text-brand-hover"
            >
              ← Back to Till Five Pizza
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .prose-legal h2 {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--foreground);
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
        }
        .prose-legal p {
          color: var(--foreground-muted);
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .prose-legal ul {
          list-style: disc;
          padding-left: 1.5rem;
          color: var(--foreground-muted);
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .prose-legal li {
          margin-bottom: 0.25rem;
        }
        .prose-legal a {
          color: var(--brand);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .prose-legal a:hover {
          color: var(--brand-hover);
        }
        .prose-legal address {
          font-style: normal;
          color: var(--foreground-muted);
          line-height: 1.75;
        }
        .prose-legal strong {
          color: var(--foreground);
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
