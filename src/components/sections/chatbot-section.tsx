"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, useTransition } from "react";
import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Hi! I'm Remark's portfolio assistant. Tap a suggestion or ask about his background, tech stack, education, or featured projects.",
  },
];

function getLocalAssistantReply(prompt: string): string | null {
  const normalized = prompt.toLowerCase();
  const juanfix = portfolio.projects.find((project) =>
    project.title.toLowerCase().includes("juanfix"),
  );
  const alumniSurvey = portfolio.projects.find((project) =>
    project.title.toLowerCase().includes("alumni"),
  );

  if (
    normalized.includes("juanfix") &&
    juanfix
  ) {
    return `${juanfix.title} is ${juanfix.description} The main problem it addresses is: ${juanfix.problem} The approach centers on ${juanfix.solution.toLowerCase()} It uses ${juanfix.tech.join(", ")}.`;
  }

  if (
    (normalized.includes("alumni") || normalized.includes("survey")) &&
    alumniSurvey
  ) {
    return `${alumniSurvey.title} is ${alumniSurvey.description} The main problem it addresses is: ${alumniSurvey.problem} The approach centers on ${alumniSurvey.solution.toLowerCase()} It uses ${alumniSurvey.tech.join(", ")}.`;
  }

  if (
    /(introduce|who is|about remark|tell me about remark|what kind of developer)/.test(
      normalized,
    )
  ) {
    return `${portfolio.name} is a ${portfolio.headline.toLowerCase()} currently studying ${portfolio.degree} at ${portfolio.university}. He works across frontend and backend development with a focus on practical web solutions.`;
  }

  if (/(skills|technologies|technology|tech stack|work with|tools)/.test(normalized)) {
    return `Remark works across frontend, backend, and mobile development. His core stack includes React, Next.js, JavaScript, Tailwind CSS, Node.js, PHP, Python, Laravel, Django, Flutter, Kotlin, Java, and C++.`;
  }

  if (/(study|studying|education|school|college|university)/.test(normalized)) {
    return `Remark is studying ${portfolio.degree} at ${portfolio.university} with a specialization in ${portfolio.specialization}. His current college timeline is ${portfolio.collegeYears}.`;
  }

  if (/(role|roles|opportunit|looking for|hire|job)/.test(normalized)) {
    return `Remark is currently open to ${portfolio.preferredWork.toLowerCase()}. He is especially interested in practical web work and collaborative builds.`;
  }

  if (/(goal|future|career|aspiring|direction)/.test(normalized)) {
    return `Remark's long-term goal is to become a full-stack developer who connects strong interfaces with practical backend systems. He is growing through hands-on projects and real development experience.`;
  }

  if (/(project|portfolio project|featured work)/.test(normalized)) {
    return `Remark currently highlights ${portfolio.projects
      .map((project) => project.title)
      .join(" and ")}. They focus on practical usefulness, smoother user flow, and organized information handling.`;
  }

  if (/(contact|hire|collaborat|reach)/.test(normalized)) {
    const contactLine = portfolio.contact.emailPlaceholder
      ? "His email is available on request through the contact section."
      : `You can reach him at ${portfolio.contact.email}.`;

    return `${portfolio.availability} ${contactLine} The contact section is the best place to follow up about projects and collaborations.`;
  }

  return null;
}

function getFallbackReply() {
  return "I can help with Remark's background, skills, education, career direction, and highlighted projects. Try one of the suggestion chips above.";
}

export function ChatbotSection() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages, isPending]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function resetConversation() {
    setMessages(initialMessages);
    setInput("");
  }

  function submitMessage(promptOverride?: string) {
    const prompt = (promptOverride ?? input).trim();

    if (!prompt || isPending) {
      return;
    }

    setIsOpen(true);
    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: prompt }];
    setMessages(nextMessages);
    setInput("");

    const localReply = getLocalAssistantReply(prompt);

    if (localReply) {
      setMessages([...nextMessages, { role: "assistant", content: localReply }]);
      return;
    }

    startTransition(() => {
      void (async () => {
        try {
          const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ messages: nextMessages }),
          });

          const payload = (await response.json()) as { reply?: string; error?: string };

          if (!response.ok || !payload.reply) {
            throw new Error(payload.error || "The assistant could not respond right now.");
          }

          setMessages((current) => [...current, { role: "assistant", content: payload.reply! }]);
        } catch {
          setMessages((current) => [
            ...current,
            {
              role: "assistant",
              content: getFallbackReply(),
            },
          ]);
        }
      })();
    });
  }

  return (
    <section id="assistant" className="section-wrap py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="space-y-6">
          <SectionHeading
            eyebrow="Portfolio Assistant"
            title="A small assistant for quick portfolio questions."
            description="Use the launcher or a prompt to get fast answers about my background, skills, and projects."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="panel p-6 sm:p-7">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">What it does</p>
              <div className="mt-5 grid gap-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-muted">
                  Answers quick questions about Remark.
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-muted">
                  Covers skills and featured work.
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-muted">
                  Stays open while visitors browse.
                </div>
              </div>
            </div>

            <div className="panel-soft p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-muted">Try these suggestions</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {portfolio.chatbotStarters.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => submitMessage(prompt)}
                    className="rounded-full border border-white/10 bg-canvas/45 px-4 py-3 text-left text-sm text-ink hover:border-accent/40"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" onClick={() => setIsOpen(true)} className="button-primary">
                  Open Floating Chat
                </button>
                <Link href="#projects" className="button-secondary">
                  See Projects
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="panel relative overflow-hidden p-6 sm:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(102,184,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,135,84,0.14),transparent_36%)]" />
          <div className="relative space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accent">Chat experience preview</p>
                <h3 className="mt-3 font-[var(--font-heading)] text-3xl font-semibold text-ink">
                  A lighter floating chat.
                </h3>
              </div>
              <button type="button" onClick={() => setIsOpen(true)} className="button-secondary">
                Launch Chat
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-[0.92fr_1.08fr]">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/80">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,18,0.12),rgba(4,8,18,0.72))]" />
                <div className="relative aspect-[4/5] min-h-[18rem]">
                  <Image
                    src="/images/bmaxandbuddy.png"
                    alt="Assistant illustration used in the hero and floating chat launcher"
                    fill
                    sizes="(max-width: 1024px) 100vw, 32vw"
                    className="object-contain object-bottom"
                  />
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/10 bg-black/55 p-4 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.22em] text-accent">Launcher icon</p>
                  <p className="mt-2 text-sm leading-7 text-white/80">
                    Matches the floating chat button.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">Pinned behavior</p>
                  <p className="mt-3 text-base leading-7 text-ink">
                    Always available at the bottom right.
                  </p>
                </div>
                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">Suggestion chips</p>
                  <p className="mt-3 text-base leading-7 text-ink">
                    Quick prompts for common questions.
                  </p>
                </div>
                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">Portfolio-aware replies</p>
                  <p className="mt-3 text-base leading-7 text-ink">
                    Replies stay focused on the portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none fixed bottom-4 right-4 z-[70] flex flex-col items-end gap-4 sm:bottom-6 sm:right-6">
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="pointer-events-auto flex h-[70vh] max-h-[38rem] min-h-[30rem] w-[min(24rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[2rem] border border-white/[0.1] bg-surface/95 shadow-[0_24px_80px_rgba(1,4,16,0.55)] backdrop-blur-2xl"
            >
              <div className="border-b border-white/10 px-5 py-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-black/70">
                      <Image
                        src="/images/buddy.png"
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover object-[50%_72%]"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-accent">Portfolio assistant</p>
                      <p className="mt-1 text-sm text-muted">Ask about Remark in a chat-style panel.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button type="button" onClick={resetConversation} className="button-ghost px-4 py-2 text-xs">
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted hover:text-ink"
                      aria-label="Close portfolio assistant"
                    >
                      x
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                  {portfolio.chatbotStarters.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => submitMessage(prompt)}
                      className="shrink-0 rounded-full border border-white/10 bg-canvas/55 px-4 py-2 text-sm text-ink hover:border-accent/40"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`max-w-[92%] rounded-[1.6rem] px-4 py-4 text-sm leading-7 ${
                      message.role === "user"
                        ? "ml-auto border border-accent/30 bg-accent/12 text-ink"
                        : "border border-white/10 bg-white/[0.04] text-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                ))}

                {isPending ? (
                  <div className="max-w-[92%] rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-muted">
                    Thinking through the portfolio details...
                  </div>
                ) : null}

                <div ref={bottomRef} />
              </div>

              <div className="border-t border-white/10 px-5 py-4">
                <form
                  className="flex flex-col gap-3"
                  onSubmit={(event) => {
                    event.preventDefault();
                    submitMessage();
                  }}
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Ask about Remark's skills, education, or projects..."
                    className="min-w-0 flex-1 rounded-full border border-white/10 bg-canvas/55 px-5 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-accent/50"
                  />
                  <button
                    type="submit"
                    className="button-primary"
                    disabled={isPending || !input.trim()}
                  >
                    {isPending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="pointer-events-auto flex items-center gap-3 rounded-[1.7rem] border border-white/[0.1] bg-surface/90 px-3 py-3 shadow-[0_18px_40px_rgba(1,4,16,0.4)] backdrop-blur-2xl"
          aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/80">
            <Image
              src="/images/buddy.png"
              alt=""
              fill
              sizes="48px"
              className="object-cover object-[50%_72%]"
            />
          </div>
          <div className="hidden pr-2 text-left sm:block">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-accent">AI Guide</p>
            <p className="mt-1 text-sm font-semibold text-ink">
              {isOpen ? "Close chat" : "Ask about Remark"}
            </p>
          </div>
        </motion.button>
      </div>
    </section>
  );
}
