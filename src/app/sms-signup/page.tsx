import type { Metadata } from "next";
import { SmsForm } from "./sms-form";

export const metadata: Metadata = {
  title: "SMS Sign Up | Till Five Pizza",
  robots: { index: false, follow: false },
};

export default function SmsSignupPage() {
  return <SmsForm />;
}
