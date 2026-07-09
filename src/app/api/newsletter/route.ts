import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "invalid_email" },
        { status: 400 }
      );
    }

    // Placeholder: integrate with Mailchimp / Resend / Brevo later
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "server_error" },
      { status: 500 }
    );
  }
}