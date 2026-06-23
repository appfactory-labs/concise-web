import { appConfig } from "@/lib/app-config";

export function PhoneFrame() {
  return (
    <div className="phone-stage" aria-label="Concise editor screen preview">
      <div className="phone-shell">
        <img
          className="phone-screen"
          src={appConfig.screenshotPath}
          alt="Concise editor showing readability grade, word count, reading time, writing text, issue labels, and a highlighted preview."
        />
      </div>
    </div>
  );
}
