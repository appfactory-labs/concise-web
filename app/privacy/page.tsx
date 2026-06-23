import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { appConfig } from "@/lib/app-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${appConfig.publicName}.`
};

const sections = [
  {
    title: "What Concise Does",
    body: [
      "Concise is a writing clarity editor. It helps you review readability, sentence difficulty, passive voice, adverbs, complex words, wordy phrases, weak qualifiers, word count, sentence count, and estimated reading time."
    ]
  },
  {
    title: "Writing You Enter",
    body: [
      "Text you type or paste into Concise is used to provide the app's writing analysis features.",
      "The core clarity checks are designed to run on your device. Concise does not require an account, backend, external writing API, or internet connection for those core checks."
    ]
  },
  {
    title: "Local Drafts and Settings",
    body: [
      "Concise may store drafts, editor state, preferences, and related app settings locally on your device so you can return to them later.",
      "Local data can usually be managed in the app or by removing the app from your device, depending on your platform and device settings."
    ]
  },
  {
    title: "No Account System",
    body: [
      "Concise does not require you to create an account or sign in to use the core writing editor."
    ]
  },
  {
    title: "Support Requests",
    body: [
      `If you contact support at ${appConfig.supportEmail}, we use the information you send only to understand and respond to your request.`,
      "Please avoid sending sensitive personal information in support emails unless it is necessary for the issue you want help with."
    ]
  },
  {
    title: "Platform Services",
    body: [
      "Apple, Google, your device operating system, your email provider, or app store services may process information under their own policies when you download the app, send support email, submit diagnostics, or use platform features."
    ]
  },
  {
    title: "Purchases",
    body: [
      "There is no paid content or subscription in the current build. If paid features are added later, payments will be handled through the applicable app store or payment platform."
    ]
  },
  {
    title: "Personal Data Is Not Sold",
    body: [
      "We do not sell personal data. We use support information only as needed to respond to support, comply with legal obligations, or protect the app and its users."
    ]
  },
  {
    title: "Your Choices",
    body: [
      "You choose what writing you enter into Concise. You can delete or replace text in the editor, manage local drafts where app controls are provided, and manage app permissions through your device settings."
    ]
  },
  {
    title: "Changes",
    body: [
      "We may update this Privacy Policy as Concise changes. The effective date will be updated when the policy is revised."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains how Concise handles writing, local drafts, support requests, and app data."
      sections={sections}
    />
  );
}
