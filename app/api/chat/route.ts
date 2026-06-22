import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Read entire request body
    const body = await req.json();

    console.log("Incoming body:", body);

    const n8nWebhookUrl =
      process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL ||
      process.env.N8N_CHAT_WEBHOOK_URL;

    if (!n8nWebhookUrl) {
      return NextResponse.json(
        { error: "N8N webhook URL not configured" },
        { status: 500 }
      );
    }

    // Forward ALL fields to n8n
    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`n8n responded with ${response.status}`);
    }

    const text = await response.text();

    let parsedData: any;

    try {
      parsedData = JSON.parse(text);
    } catch {
      parsedData = { reply: text };
    }

    // n8n sometimes returns an array
    if (Array.isArray(parsedData) && parsedData[0]) {
      parsedData = parsedData[0];
    }

    let replyText = "";
    let isLead = false;
    let name = "";
    let phone = "";
    let treatment = "";
    let preferred_time = "";
    let intent = "";

    if (parsedData && typeof parsedData === "object") {
      // If the AI Agent output is a direct string inside "output"
      if (typeof parsedData.output === "string") {
        replyText = parsedData.output;
      } else {
        // n8n AI Agent wraps object data inside output
        if (parsedData.output && typeof parsedData.output === "object") {
          parsedData = parsedData.output;
        }
        replyText =
          parsedData.reply ||
          parsedData.text ||
          parsedData.response ||
          parsedData.message ||
          "";
      }

      isLead =
        typeof parsedData.isLead === "boolean"
          ? parsedData.isLead
          : parsedData.isLead === "true" || parsedData.isLead === 1;

      name = parsedData.name || "";
      phone = parsedData.phone || "";
      treatment = parsedData.treatment || parsedData.service || "";
      preferred_time = parsedData.preferred_time || "";
      intent = parsedData.intent || "";
    } else if (parsedData) {
      replyText = String(parsedData);
    }

    const result = {
      reply: replyText,
      isLead,
      name,
      phone,
      treatment,
      preferred_time,
      intent,
    };

    console.log("Parsed result:", result);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json({
      reply:
        "Sorry, I am temporarily unable to connect to the scheduling system.",
      isLead: false,
      name: "",
      phone: "",
      treatment: "",
      preferred_time: "",
      intent: "error",
    });
  }
}