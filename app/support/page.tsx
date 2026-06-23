import type { Metadata } from "next";
import { SupportForm } from "@/components/SupportForm";
import { appConfig } from "@/lib/app-config";

export const metadata: Metadata = {
  title: "Support",
  description: `Contact support for ${appConfig.publicName}.`
};

export default function SupportPage() {
  return (
    <section className="support-page">
      <div className="shell support-layout">
        <div className="support-copy">
          <p>Concise Support</p>
          <h1>How can we help?</h1>
          <p>
            Send a note about readability checks, local drafts, highlighted previews, copy actions,
            or anything else in the app.
          </p>
          <ul className="support-notes">
            <li>No login is required to use Concise.</li>
            <li>Core writing checks run on device.</li>
            <li>There is no paid content or subscription in this build.</li>
          </ul>
        </div>

        <div className="support-panel">
          <SupportForm />
        </div>
      </div>
    </section>
  );
}
