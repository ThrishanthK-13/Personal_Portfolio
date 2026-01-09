import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      console.error("Validation failed: Missing required fields");
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    });

    console.log("Sending email via Resend...");
    console.log("From: Portfolio <onboarding@resend.dev>");
    console.log("To: thrishanthkrishnan02@gmail.com");
    console.log("Subject: New Contact Message from Portfolio");

    const emailResponse = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["thrishanthkrishnan02@gmail.com"],
      subject: "New Contact Message from Portfolio",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6366f1;">New Contact Message from Portfolio</h1>
          <div style="background: #f9fafb; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Timestamp:</strong> ${timestamp}</p>
          </div>
          <h3>Message:</h3>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 8px;">${message}</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;" />
          <p style="color: #6b7280; font-size: 14px;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend API error:", JSON.stringify(emailResponse.error));
      return new Response(
        JSON.stringify({ error: emailResponse.error.message }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Resend API success:", JSON.stringify(emailResponse.data));

    return new Response(JSON.stringify({ success: true, data: emailResponse.data }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
