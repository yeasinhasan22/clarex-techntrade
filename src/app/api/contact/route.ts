import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  let payload: Record<string, string> = {};

  try {
    if (contentType.includes("application/json")) {
      payload = await request.json();
    } else {
      const form = await request.formData();
      form.forEach((value, key) => {
        payload[key] = String(value);
      });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }

  // Placeholder: wire to email provider / SMTP when credentials are available.
  console.log("[contact]", payload);

  return NextResponse.json({
    ok: true,
    message: "Thank you. Your message was received.",
  });
}
