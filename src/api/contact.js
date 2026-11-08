export async function handleContact(request, env) {
  try {
    const body = await request.json();
    const { name, email } = body || {};

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Name and email are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Optional webhook integration (Slack, Discord, Zapier, etc.)
    if (env && env.INQUIRY_WEBHOOK_URL) {
      try {
        await fetch(env.INQUIRY_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `🎯 New OCSS Website Inquiry:\n• Name: ${name}\n• Email: ${email}\n• Time: ${new Date().toISOString()}`
          })
        });
      } catch (webhookErr) {
        console.error("Webhook notification error:", webhookErr);
      }
    }

    console.log(`[Contact Inquiry] Name: ${name}, Email: ${email}, Time: ${new Date().toISOString()}`);

    return new Response(JSON.stringify({ success: true, message: "Inquiry received" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid request payload" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export function handleOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
