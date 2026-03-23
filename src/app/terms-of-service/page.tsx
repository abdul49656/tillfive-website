import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Till Five Pizza",
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-foreground pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold text-white lg:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-white/50">Last Updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose-legal">

            <Section title="1. SMS Program Description">
              <p>
                Till Five Pizza operates an SMS messaging program to send customers
                promotional offers, special deals, and updates. By opting in to our
                SMS program at{" "}
                <Link href="/sms-signup">tillfivepizza.com/sms-signup</Link>, you
                agree to receive recurring promotional text messages from Till Five
                Pizza. Message frequency varies based on promotions and activity.
              </p>
            </Section>

            <Section title="2. How to Opt Out">
              <p>
                You may opt out of Till Five Pizza SMS messages at any time by
                replying STOP to any message you receive from us. After texting
                STOP, you will receive one final confirmation message and no further
                messages will be sent. You can re-enroll at any time by visiting{" "}
                <Link href="/sms-signup">tillfivepizza.com/sms-signup</Link>.
              </p>
            </Section>

            <Section title="3. Support and Help">
              <p>
                For help with our SMS program, reply HELP to any message or contact
                us directly at:
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

            <Section title="4. Message and Data Rates">
              <p>
                Message and data rates may apply to all SMS messages sent and
                received. Till Five Pizza is not responsible for any charges applied
                by your mobile carrier. Contact your mobile carrier for details
                about your messaging plan.
              </p>
            </Section>

            <Section title="5. Carrier Liability Disclaimer">
              <p>
                Till Five Pizza&apos;s SMS program is available on most major US
                carriers. Carriers are not liable for delayed or undelivered
                messages. Till Five Pizza is not responsible for any delays or
                failures in receiving SMS messages due to factors outside our
                control including carrier issues, network outages, or device
                incompatibility.
              </p>
            </Section>

            <Section title="6. Age Restriction">
              <p>
                You must be 18 years of age or older to opt in to Till Five
                Pizza&apos;s SMS program. By opting in, you confirm that you are at
                least 18 years old.
              </p>
            </Section>

            <Section title="7. Privacy Policy">
              <p>
                Your use of the Till Five Pizza SMS program is also governed by our{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>, available at
                tillfivepizza.com/privacy-policy. The Privacy Policy is incorporated
                into these Terms of Service by reference.
              </p>
            </Section>

            <Section title="8. Changes to These Terms">
              <p>
                Till Five Pizza reserves the right to update or modify these Terms
                of Service at any time. Changes will be posted on this page with an
                updated effective date. Continued use of our SMS program after
                changes are posted constitutes acceptance of the updated terms.
              </p>
            </Section>

            <Section title="9. Contact Us">
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
