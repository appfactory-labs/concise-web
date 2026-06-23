"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function SupportForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: readField(formData, "name"),
      email: readField(formData, "email"),
      platform: readField(formData, "platform"),
      subject: readField(formData, "subject"),
      message: readField(formData, "message")
    };

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Support request failed");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
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

      <button className="form-submit" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {status === "success" ? (
        <p className="form-success">Thanks, your support request has been sent.</p>
      ) : null}
      {status === "error" ? <p className="form-error">{error}</p> : null}
    </form>
  );
}
