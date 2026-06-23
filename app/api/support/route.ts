import { NextResponse } from "next/server";

const SUPPORT_RECIPIENT = process.env.SUPPORT_FORM_RECIPIENT ?? "buildappfactory@gmail.com";
const SUPPORT_FROM = process.env.SUPPORT_FORM_FROM ?? "Concise Support <support@appfactorylabs.com>";

type SupportMessage = {
  name: string;
  email: string;
  platform: "iOS" | "Android" | "Other";
  subject: string;
  message: string;
};

const allowedPlatforms = new Set(["iOS", "Android", "Other"]);

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildSupportBody(message: SupportMessage) {
  return [
    "New Concise support request",
    "",
    `Name: ${message.name}`,
    `Reply-To: ${message.email}`,
    `Platform: ${message.platform}`,
    `Subject: ${message.subject}`,
    "",
    "Message:",
    message.message
  ].join("\n");
}

async function parseSupportRequest(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await request.json()) as Record<string, unknown>;
  }

  const formData = await request.formData();
  return Object.fromEntries(formData.entries());
}

async function sendSupportMessage(message: SupportMessage) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    throw new Error("Support email provider is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: SUPPORT_FROM,
      to: SUPPORT_RECIPIENT,
      reply_to: message.email,
      subject: `Concise support: ${message.subject}`,
      text: buildSupportBody(message)
    })
  });

  if (!response.ok) {
    throw new Error("Unable to send support message.");
  }
}

export async function POST(request: Request) {
  try {
    const body = await parseSupportRequest(request);
    const platform = clean(body.platform);

    if (!allowedPlatforms.has(platform)) {
      return NextResponse.json({ error: "Invalid platform" }, { status: 400 });
    }

    const supportMessage: SupportMessage = {
      name: clean(body.name),
      email: clean(body.email),
      platform: platform as SupportMessage["platform"],
      subject: clean(body.subject),
      message: clean(body.message)
    };

    if (
      !supportMessage.name ||
      !isEmail(supportMessage.email) ||
      !supportMessage.subject ||
      !supportMessage.message
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendSupportMessage(supportMessage);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to send support request" }, { status: 500 });
  }
}
