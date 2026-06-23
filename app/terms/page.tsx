import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { appConfig } from "@/lib/app-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${appConfig.publicName}.`
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: [
      "By using Concise, you agree to these Terms of Use. If you do not agree, do not use the app or this website."
    ]
  },
  {
    title: "App Purpose",
    body: [
      "Concise is a writing clarity editor that provides on-device feedback about readability, sentence difficulty, passive voice, adverbs, complex words, wordy phrases, weak qualifiers, word count, sentence count, and estimated reading time."
    ]
  },
  {
    title: "Feedback Is Informational",
    body: [
      "Concise gives writing clarity suggestions and readability signals. It does not guarantee grammar correctness, publication quality, academic outcomes, legal compliance, professional editing results, or any specific writing outcome.",
      "You are responsible for reviewing suggestions and deciding what to change."
    ]
  },
  {
    title: "Your Writing",
    body: [
      "You are responsible for the text you enter, edit, copy, save, or share using Concise.",
      "Do not use Concise in a way that violates laws, other people's rights, school or workplace rules, or app store policies."
    ]
  },
  {
    title: "Local Data",
    body: [
      "Concise may store drafts and settings locally on your device. You are responsible for keeping backups of any writing you need to preserve outside the app."
    ]
  },
  {
    title: "Purchases and Subscriptions",
    body: [
      "There is no paid content or subscription in the current build. If paid features are added in the future, billing, cancellation, and refunds will be handled through the relevant app store or payment platform where applicable."
    ]
  },
  {
    title: "Intellectual Property",
    body: [
      "Concise, the app icon, website design, text, branding, and related materials are owned by App Factory Labs or its licensors. You may not copy, modify, or distribute them except as allowed by law."
    ]
  },
  {
    title: "Disclaimer of Warranties",
    body: [
      "Concise is provided as is and as available. We do not warrant that the app will be uninterrupted, error-free, or suitable for every writing purpose."
    ]
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, App Factory Labs will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of Concise, the website, or writing decisions made from app feedback."
    ]
  },
  {
    title: "Changes to Terms",
    body: [
      "We may update these terms as Concise changes. Continued use of Concise after updates means you accept the revised terms."
    ]
  }
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="These terms explain the rules for using Concise and the limits of writing clarity feedback."
      sections={sections}
    />
  );
}
