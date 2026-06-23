import Link from "next/link";
import { appConfig } from "@/lib/app-config";

type LegalSection = {
  title: string;
  body?: string[];
  list?: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <section className="legal-page">
      <div className="shell legal-shell">
        <div className="legal-header">
          <p>Effective date: {appConfig.legalEffectiveDate}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>

        <div className="legal-content">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <div className="legal-contact">
          <p>
            Questions? Contact{" "}
            <Link href={appConfig.supportPath}>{appConfig.publicName} support</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
