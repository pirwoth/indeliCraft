import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const PROJECT_TYPE_LABELS: Record<string, string> = {
  architecture: "Architectural Design",
  interior: "Interior Design",
  "3d": "3D Visualization",
  farm: "Farm Structures",
  utility: "Utility Structures",
  branding: "Branding Design",
  web: "Website / Software",
  other: "Other",
};

// Server-side validation
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "tempmail.com", "throwaway.email",
  "yopmail.com", "sharklasers.com", "maildrop.cc", "trashmail.com",
  "fakeinbox.com", "temp-mail.org", "10minutemail.com", "burner.kiwi",
  "discard.email", "getnada.com", "emailondeck.com", "tempmailo.com",
]);

function sanitizeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, projectType, message }: ContactFormData = await req.json();

    // Server-side validation
    const trimmedName = (name || "").trim();
    const trimmedEmail = (email || "").trim().toLowerCase();
    const trimmedMessage = (message || "").trim();

    if (!trimmedName || trimmedName.length > 100) {
      return new Response(
        JSON.stringify({ error: "Name is required and must be under 100 characters." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
      return new Response(
        JSON.stringify({ error: "A valid email address is required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const domain = trimmedEmail.split("@")[1];
    if (DISPOSABLE_DOMAINS.has(domain)) {
      return new Response(
        JSON.stringify({ error: "Temporary email addresses are not accepted." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!trimmedMessage || trimmedMessage.length > 2000) {
      return new Response(
        JSON.stringify({ error: "Message is required and must be under 2000 characters." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Email service is not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const safeName = sanitizeHtml(trimmedName);
    const safeEmail = sanitizeHtml(trimmedEmail);
    const safePhone = sanitizeHtml((phone || "").trim());
    const safeMessage = sanitizeHtml(trimmedMessage);
    const projectLabel = PROJECT_TYPE_LABELS[projectType] || sanitizeHtml(projectType || "Not specified");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "IndeliCraft Contact <contact@indelicraft.com>",
        to: ["indelicraft@gmail.com"],
        reply_to: trimmedEmail,
        subject: `New Contact: ${safeName} — ${projectLabel}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #C8A97E; padding-bottom: 10px;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Name</td><td style="padding: 8px 0;">${safeName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td><td style="padding: 8px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Phone</td><td style="padding: 8px 0;">${safePhone || "Not provided"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Project Type</td><td style="padding: 8px 0;">${projectLabel}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 12px; background: #f9f9f9; border-radius: 6px;">
              <p style="font-weight: bold; color: #555; margin: 0 0 8px;">Message</p>
              <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #999;">You can reply directly to this email to respond to ${safeName}.</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      throw new Error(`Resend API error [${res.status}]: ${errorData}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
