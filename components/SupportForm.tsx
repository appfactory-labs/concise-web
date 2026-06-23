"use client";

import { FormEvent, useState } from "react";
import { appConfig } from "@/lib/app-config";

type FormStatus = "idle" | "opened";

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function SupportForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = readField(formData, "name");
    const email = readField(formData, "email");
    const platform = readField(formData, "platform");
    const subject = readField(formData, "subject");
    const message = readField(formData, "message");

    const mailSubject = subject ? `Concise support: ${subject}` : "Concise support request";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Platform: ${platform}`,
      "",
      message
    ].join("\n");

    window.location.href = `mailto:${appConfig.supportEmail}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  }

  return (
    <form className="support-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="support-name">Name</label>
          <input id="support-name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="support-email">Email</label>
          <input id="support-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="support-platform">Platform</label>
        <select id="support-platform" name="platform" defaultValue="" required>
          <option value="" disabled>
            Select platform
          </option>
          <option value="iOS">iOS</option>
          <option value="Android">Android</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="support-subject">Subject</label>
        <input id="support-subject" name="subject" required />
      </div>

      <div className="field">
        <label htmlFor="support-message">Message</label>
        <textarea id="support-message" name="message" rows={6} required />
      </div>

      <button className="form-submit" type="submit">
        Open email
      </button>

      {status === "opened" ? (
        <p className="form-success">
          Your email app should open with a prefilled support request. You can also email{" "}
          <a href={`mailto:${appConfig.supportEmail}`}>{appConfig.supportEmail}</a> directly.
        </p>
      ) : null}
    </form>
  );
}
