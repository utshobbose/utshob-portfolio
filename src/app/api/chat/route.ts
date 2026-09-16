import { NextResponse } from "next/server";
import { AI_TWIN_SYSTEM_PROMPT } from "@/content/aiTwinContext";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(request: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Valid messages array is required." },
        { status: 400 }
      );
    }

    const latestUserMessage = messages[messages.length - 1]?.content || "";

    // 1. Try Groq API if key is present
    if (process.env.GROQ_API_KEY) {
      try {
        const groqRes = await fetch(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
            },
            body: JSON.stringify({
              model: "llama-3.3-70b-versatile",
              messages: [
                { role: "system", content: AI_TWIN_SYSTEM_PROMPT },
                ...messages,
              ],
              temperature: 0.6,
              max_tokens: 450,
            }),
          }
        );

        if (groqRes.ok) {
          const data = await groqRes.json();
          const reply =
            data.choices?.[0]?.message?.content ||
            "Hello! I am Utshob's AI Twin. How can I help you today?";
          return NextResponse.json({ reply });
        }
      } catch (err) {
        console.warn("Groq API request failed, switching to local knowledge engine:", err);
      }
    }

    // 2. Try OpenAI API if key is present
    if (process.env.OPENAI_API_KEY) {
      try {
        const openAiRes = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              messages: [
                { role: "system", content: AI_TWIN_SYSTEM_PROMPT },
                ...messages,
              ],
              temperature: 0.6,
              max_tokens: 450,
            }),
          }
        );

        if (openAiRes.ok) {
          const data = await openAiRes.json();
          const reply =
            data.choices?.[0]?.message?.content ||
            "Hello! I am Utshob's AI Twin. How can I help you today?";
          return NextResponse.json({ reply });
        }
      } catch (err) {
        console.warn("OpenAI API request failed, switching to local knowledge engine:", err);
      }
    }

    // 3. Smart local knowledge engine fallback
    const reply = generateLocalReply(latestUserMessage);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[CHAT_API_ERROR]", error);
    return NextResponse.json(
      {
        reply:
          "Signal interrupted. Utshob is a full-stack engineer experienced in Next.js, Express, and AI integration. Feel free to contact him directly at officialutshob@gmail.com!",
      },
      { status: 200 }
    );
  }
}

function generateLocalReply(query: string): string {
  const q = query.toLowerCase();

  if (
    q.includes("biid") ||
    q.includes("foundation") ||
    q.includes("work") ||
    q.includes("job") ||
    q.includes("experience")
  ) {
    return "At BIID Foundation (Bangladesh Institute of ICT in Development), Utshob currently serves as Program Associate (ICT), promoted after his tenure as ICT Officer Intern. He manages digital infrastructure, acts as Focal Point for INO 2026 (International Nutrition Olympiad), oversees server security/remediations, and authors key technical documentation including the B-Lab Online Investment Marketplace SRS and IT Decision Briefs.";
  }

  if (
    q.includes("simulab") ||
    q.includes("science simulab") ||
    q.includes("startup") ||
    q.includes("founder") ||
    q.includes("edtech")
  ) {
    return "Science Simulab is Utshob's flagship EdTech co-founder venture! He is the Tech Co-founder & Lead Architect, developing an interactive virtual simulation laboratory for physics, chemistry, and biology experiments to eliminate physical laboratory barriers for students. It is engineered with React, Express.js, TypeScript, interactive Canvas/WebGL modules, and Node.js.";
  }

  if (
    q.includes("fittrack") ||
    q.includes("fitness") ||
    q.includes("gym")
  ) {
    return "FitTrack is an AI-powered fitness management web app created by Utshob. Built with React, Tailwind CSS, Express.js, and MongoDB, it features AI-generated yoga and workout routines powered by the Groq AI API, a nearby-gyms locator using the OpenStreetMap API, BMI/calorie calculators, meal planning, and detailed progress tracking.";
  }

  if (
    q.includes("smart resume") ||
    q.includes("analyzer") ||
    q.includes("resume analyzer") ||
    q.includes("nlp")
  ) {
    return "Smart Resume Analyzer is an AI job recommendation platform. Utshob built the frontend in React, TypeScript, and shadcn/ui, paired with a dedicated Python/FastAPI microservice using spaCy NER and sentence-transformer embeddings to perform cosine-similarity semantic matching between candidate resumes and job postings.";
  }

  if (
    q.includes("hollowink") ||
    q.includes("blog") ||
    q.includes("horror")
  ) {
    return "HollowInk is an atmospheric dark-mode horror literary blog platform showcasing curated Bengali folklore and psychological stories. Utshob crafted it with React, React Router, and a custom dark Tailwind theme featuring custom typography and immersive responsive transitions.";
  }

  if (
    q.includes("skill") ||
    q.includes("stack") ||
    q.includes("technolog") ||
    q.includes("language")
  ) {
    return "Utshob's core tech stack includes: \n• Languages: Python, JavaScript, TypeScript, C, PHP\n• Frontend: Next.js (App Router), React, Tailwind CSS, shadcn/ui\n• Backend & Databases: Node.js, Express.js, MongoDB, MySQL, PostgreSQL (Supabase), REST API design\n• Platforms & Ops: WordPress, cPanel, Linux VPS, Git, JIRA, Postman.";
  }

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("hire") ||
    q.includes("reach") ||
    q.includes("talk")
  ) {
    return "You can reach Utshob directly via email at officialutshob@gmail.com, connect with him on LinkedIn (linkedin.com/in/utshob-bose-135812373), or send a message using the contact form below!";
  }

  if (
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("university") ||
    q.includes("brac")
  ) {
    return "Utshob completed his Bachelor of Science in Computer Science from BRAC University, Dhaka, Bangladesh (2022 – 2026). He completed his Higher Secondary Certificate (HSC) in 2019 at Birshrestho Noor Muhammad Public College.";
  }

  if (
    q.includes("blockchain") ||
    q.includes("award") ||
    q.includes("olympiad") ||
    q.includes("certificate")
  ) {
    return "Utshob was selected as a National Finalist in the Blockchain Olympiad Bangladesh for applied blockchain research and development. He also holds a Professional Software Development Certificate from Ostad and participated in the TechHub CodeSprint Challenge.";
  }

  return "Hello! I am Utshob's AI Twin. Utshob is a Computer Science graduate from BRAC University, Program Associate at BIID Foundation, and Tech Co-founder of Science Simulab specializing in Next.js, React, Express, and AI-enabled web systems. Ask me anything about his projects, experience, or tech stack!";
}
