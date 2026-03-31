"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function SmsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [transactionalConsent, setTransactionalConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Image
            src="/images/logo.png"
            alt="Till Five Pizza"
            width={80}
            height={80}
            className="mx-auto mb-6 rounded-full"
          />
          <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
            Get Exclusive Deals<br />Straight to Your Phone
          </h1>
          <p className="mt-4 text-foreground-muted">
            Sign up to receive special offers and updates from Till Five Pizza — Nashville&apos;s favorite late-night pizza spot.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-lg px-6">

          {submitted ? (
            <div className="rounded-2xl border border-brand/20 bg-brand-light p-10 text-center">
              <CheckCircle2 className="mx-auto mb-4 text-brand" size={52} />
              <p className="text-xl font-bold text-foreground">You&apos;re on the list!</p>
              <p className="mt-3 text-foreground-muted leading-relaxed">
                Expect exclusive deals from Till Five Pizza soon. Reply{" "}
                <span className="font-semibold text-foreground">STOP</span> to any
                message to opt out at any time.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm space-y-5"
            >
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-xl border border-border px-4 py-3 text-foreground placeholder:text-foreground-subtle transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-xl border border-border px-4 py-3 text-foreground placeholder:text-foreground-subtle transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </div>
              </div>

              {/* Phone field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Phone Number <span className="text-brand">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(615) 000-0000"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-border px-4 py-3 text-foreground placeholder:text-foreground-subtle transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
                <p className="mt-1.5 text-xs text-foreground-subtle">
                  Entering a phone number alone does not grant permission to receive SMS messages. SMS consent must be collected explicitly using the checkboxes below.
                </p>
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Email <span className="text-brand">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border px-4 py-3 text-foreground placeholder:text-foreground-subtle transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>

              {/* Transactional SMS consent — separate from marketing, also optional */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  id="transactionalConsent"
                  type="checkbox"
                  checked={transactionalConsent}
                  onChange={(e) => setTransactionalConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-border accent-brand"
                />
                <label
                  htmlFor="transactionalConsent"
                  className="text-sm text-foreground-muted leading-relaxed cursor-pointer"
                >
                  I consent to receive transactional SMS messages from{" "}
                  <span className="font-semibold text-foreground">Till Five Pizza</span> at
                  the phone number provided, such as order confirmations and service
                  notifications. Message frequency may vary. Message &amp; data rates may
                  apply. Reply <span className="font-semibold text-foreground">HELP</span>{" "}
                  for help or <span className="font-semibold text-foreground">STOP</span> to opt out.
                </label>
              </div>

              {/* Marketing SMS consent — unchecked by default, optional, cannot block submission */}
              <div className="flex items-start gap-3">
                <input
                  id="marketingConsent"
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-border accent-brand"
                />
                <label
                  htmlFor="marketingConsent"
                  className="text-sm text-foreground-muted leading-relaxed cursor-pointer"
                >
                  I consent to receive marketing and promotional SMS messages from{" "}
                  <span className="font-semibold text-foreground">Till Five Pizza</span> at
                  the phone number provided. Message frequency may vary. Message &amp; data
                  rates may apply. Reply <span className="font-semibold text-foreground">HELP</span>{" "}
                  for help or <span className="font-semibold text-foreground">STOP</span> to opt out.
                </label>
              </div>

              {/* Submit — always enabled regardless of checkbox */}
              <button
                type="submit"
                className="w-full rounded-full bg-brand px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-0.5"
              >
                Sign Me Up
              </button>

              {/* Privacy links */}
              <p className="text-center text-xs text-foreground-subtle">
                By submitting this form you agree to our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-brand underline underline-offset-2 hover:text-brand-hover"
                >
                  Privacy Policy
                </Link>{" "}
                &amp;{" "}
                <Link
                  href="/terms-of-service"
                  className="text-brand underline underline-offset-2 hover:text-brand-hover"
                >
                  Terms of Service
                </Link>
                .
              </p>
            </form>
          )}

          {/* Full compliance disclosure */}
          <div className="mt-8 rounded-xl bg-background-alt px-6 py-5">
            <p className="text-xs text-foreground-subtle leading-relaxed">
              <span className="font-semibold text-foreground">Till Five Pizza</span> is
              committed to protecting your privacy. SMS marketing consent is optional and
              is not a condition of purchase. Your phone number and opt-in data will
              not be shared with third parties for their own marketing purposes (except SMS
              providers). Message frequency may vary. Message and data rates may apply.
              You may opt out at any time by replying{" "}
              <span className="font-semibold">STOP</span> to any message. For assistance,
              reply <span className="font-semibold">HELP</span> or contact us at{" "}
              <a
                href="mailto:info@tillfivepizza.com"
                className="text-brand underline underline-offset-2 hover:text-brand-hover"
              >
                info@tillfivepizza.com
              </a>
              . View our{" "}
              <Link
                href="/privacy-policy"
                className="text-brand underline underline-offset-2 hover:text-brand-hover"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms-of-service"
                className="text-brand underline underline-offset-2 hover:text-brand-hover"
              >
                Terms of Service
              </Link>{" "}
              for full details.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
