import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";
import { appConfig } from "@/lib/app-config";

const assurances = [
  "Works fully offline",
  "No account required",
  "Core checks stay on device"
];

const features = [
  {
    title: "Readability grade",
    copy: "See grade level, word count, sentence count, and reading time before you share a draft.",
    tone: "green"
  },
  {
    title: "Hard sentences",
    copy: "Find hard and very hard sentences that may slow readers down.",
    tone: "gold"
  },
  {
    title: "Passive voice",
    copy: "Spot passive constructions so you can make lines more direct when it helps.",
    tone: "leaf"
  },
  {
    title: "Adverbs and weak words",
    copy: "Catch adverbs, weak qualifiers, and clutter that can soften a sentence.",
    tone: "blue"
  },
  {
    title: "Wordy phrases",
    copy: "Highlight phrases that can often be shorter, cleaner, or easier to read.",
    tone: "orange"
  },
  {
    title: "Local drafts",
    copy: "Save drafts locally, return to them later, and copy cleaned-up text when you are done.",
    tone: "ink"
  }
];

const privacyPoints = [
  "No sign-up flow",
  "No backend for core checks",
  "No internet needed for analysis",
  "No cloud writing assistant"
];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <img className="hero-logo" src={appConfig.iconPath} alt="" />
            <h1>{appConfig.publicName}</h1>
            <p className="hero-tagline">{appConfig.tagline}</p>
            <p className="hero-description">{appConfig.description}</p>

            <div className="hero-actions" aria-label="Concise links">
              <Link className="button-primary" href={appConfig.privacyPath}>
                Privacy details
              </Link>
              <Link className="button-secondary" href={appConfig.supportPath}>
                Contact support
              </Link>
            </div>

            <div className="assurance-list" aria-label="Privacy highlights">
              {assurances.map((item) => (
                <span key={item}>
                  <span aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <PhoneFrame />
        </div>
      </section>

      <section className="section feature-section" id="features" aria-labelledby="features-heading">
        <div className="shell">
          <div className="section-heading">
            <p>Key features</p>
            <h2 id="features-heading">Everything you need to write clearer.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className={`feature-card tone-${feature.tone}`} key={feature.title}>
                <span className="feature-mark" aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clarity-section" aria-labelledby="clarity-heading">
        <div className="shell clarity-layout">
          <div className="clarity-copy">
            <p>Focused by design</p>
            <h2 id="clarity-heading">A clarity editor, not a cloud writing bot.</h2>
            <p>
              Concise is built for fast review before you send an email, submit an essay, publish a
              post, or clean up notes. It helps you notice patterns in your draft without replacing
              your voice.
            </p>
          </div>
          <div className="metric-grid" aria-label="Concise analysis examples">
            <div>
              <strong>Grade 4</strong>
              <span>Readability</span>
            </div>
            <div>
              <strong>108</strong>
              <span>Words</span>
            </div>
            <div>
              <strong>&lt;1 min</strong>
              <span>Read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-section" aria-labelledby="privacy-heading">
        <div className="shell privacy-layout">
          <div>
            <p>Privacy first</p>
            <h2 id="privacy-heading">Your writing stays on your device.</h2>
            <p>
              Core clarity checks run locally. Concise has no account system, no backend for the
              writing analysis, and no internet requirement for its core editor.
            </p>
          </div>
          <div className="privacy-list">
            {privacyPoints.map((point) => (
              <div key={point}>
                <span aria-hidden="true" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section compliance-section" aria-labelledby="compliance-heading">
        <div className="shell">
          <div className="section-heading">
            <p>App information</p>
            <h2 id="compliance-heading">Policies and support in one place.</h2>
          </div>
          <div className="compliance-grid">
            <Link href={appConfig.privacyPath}>
              <span>Privacy Policy</span>
              <p>How Concise handles writing, local drafts, support requests, and app data.</p>
            </Link>
            <Link href={appConfig.termsPath}>
              <span>Terms of Use</span>
              <p>The rules for using Concise and the limits of clarity feedback.</p>
            </Link>
            <Link href={appConfig.supportPath}>
              <span>Support</span>
              <p>Send a private support request for help with Concise.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
