"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function SmsForm() {
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);
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
            Sign up to receive special promotional offers from Till Five Pizza via SMS. Nashville&apos;s favorite late-night pizza spot.
          </p>
        </div>
      </section>

      {/* Form + Compliance */}
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-lg px-6">

          {submitted ? (
            /* Success state */
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
            /* Form */
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm space-y-6"
            >
              {/* Phone field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Phone Number
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
              </div>

              {/* Consent checkbox — optional, for tracking only */}
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-border accent-brand"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-foreground-muted leading-relaxed cursor-pointer"
                >
                  By checking this box, you agree to receive promotional SMS text
                  messages from Rasul Pizza LLC. Message frequency varies. Msg &amp;
                  data rates may apply. Reply STOP at any time to opt out. Reply
                  HELP for help. Your information will not be shared with third
                  parties for their own marketing purposes. View our{" "}
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
                  </Link>
                  .
                </label>
              </div>

              {/* Submit — always enabled */}
              <button
                type="submit"
                className="w-full rounded-full bg-brand px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-0.5"
              >
                Sign Me Up
              </button>
            </form>
          )}

          {/* Compliance disclosure */}
          <div className="mt-8 rounded-xl bg-background-alt px-6 py-5">
            <p className="text-xs text-foreground-subtle leading-relaxed">
              Till Five Pizza is committed to protecting your privacy. By
              submitting this form, you consent to receive recurring promotional
              SMS messages from Till Five Pizza at the phone number provided.
              Message frequency varies. Message and data rates may apply. Consent
              is not a condition of purchase. You can opt out at any time by
              replying STOP to any message. For assistance, reply HELP or contact
              us at{" "}
              <a
                href="mailto:info@tillfivepizza.com"
                className="text-brand underline underline-offset-2 hover:text-brand-hover"
              >
                info@tillfivepizza.com
              </a>
              . Till Five Pizza will not share your opt-in data or phone number
              with any third party for their own marketing purposes. View our{" "}
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
