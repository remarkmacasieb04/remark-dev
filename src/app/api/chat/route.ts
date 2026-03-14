import { AIMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatGroq } from "@langchain/groq";
import { NextResponse } from "next/server";
import { assistantContext, portfolio } from "@/content/portfolio";

type ClientMessage = {
  role: "user" | "assistant";
  content: string;
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

function getResponseText(content: unknown): string {
  if (typeof content === "string") {
    return content.trim();
  }

  if (Array.isArray(content)) {
    return content
      .map((part) => {
        if (typeof part === "string") {
          return part;
        }

        if (
          part &&
          typeof part === "object" &&
          "text" in part &&
          typeof part.text === "string"
        ) {
          return part.text;
        }

        return "";
      })
      .join("\n")
      .trim();
  }

  return "";
}

export async function POST(request: Request) {
  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json(
      {
        error: "GROQ_API_KEY is missing. Add it to your environment before using the assistant.",
      },
      { status: 503 },
    );
  }

  try {
    const body = (await request.json()) as { messages?: ClientMessage[] };
    const messages = body.messages?.filter(
      (message) =>
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string" &&
        message.content.trim().length > 0,
    );

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "Please send at least one user message to the assistant." },
        { status: 400 },
      );
    }

    const model = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model: process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile",
      temperature: 0.1,
      maxTokens: 500,
    });

    const conversation = messages.slice(-8).map((message) => {
      if (message.role === "assistant") {
        return new AIMessage(message.content);
      }

      return new HumanMessage(message.content);
    });

    const systemPrompt = `
You are the official portfolio assistant for ${portfolio.name}.

Use only the facts provided in the portfolio context below and the ongoing conversation.
Stay focused on Remark's profile, skills, education, goals, and listed projects.
If a visitor asks for information that is not in the context, say that it has not been published on the portfolio yet.
Do not invent links, experience, awards, contact details, or technologies that are not explicitly provided.
Keep answers clear, warm, and concise.
When helpful, invite the visitor to use the contact section for collaboration or follow-up.

Portfolio context:
${assistantContext}
    `.trim();

    const response = await model.invoke([new SystemMessage(systemPrompt), ...conversation]);
    const reply = getResponseText(response.content);

    if (!reply) {
      return NextResponse.json(
        { error: "The assistant returned an empty response. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat route error:", error);

    return NextResponse.json(
      {
        error:
          "The portfolio assistant could not process that request right now. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
}

