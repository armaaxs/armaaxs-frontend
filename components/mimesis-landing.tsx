"use client";

import Image from "next/image";
import {
  type ElementType,
  type FormEvent,
  type RefObject,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Headphones,
  LibraryBig,
  Mail,
  Search,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const screenshots = [
  {
    src: "/mimesis/explore.png",
    alt: "Mimesis explore screen showing curated audiobook discovery",
    title: "Explore",
    subtitle: "75,000+ audiobooks",
    accent: "Discover first",
  },
  {
    src: "/mimesis/listen.png",
    alt: "Mimesis listening screen with playback controls",
    title: "Listen",
    subtitle: "On the go",
    accent: "Hands-free flow",
  },
  {
    src: "/mimesis/read-listen.png",
    alt: "Mimesis reading screen combining text and audio controls",
    title: "Read",
    subtitle: "And listen",
    accent: "Stay in flow",
  },
  {
    src: "/mimesis/library.png",
    alt: "Mimesis library screen for bringing your own books",
    title: "Library",
    subtitle: "Bring your own books",
    accent: "Quiet shelf",
  },
] as const;

const featureHighlights = [
  {
    title: "Discover first",
    body: "Curated lanes surface the right books before you start searching.",
    icon: Search,
  },
  {
    title: "Listen anywhere",
    body: "A calm player keeps your chapter, speed, and mood exactly where you left them.",
    icon: Headphones,
  },
  {
    title: "Read and listen",
    body: "Switch between reading and audio without breaking the rhythm.",
    icon: BookOpen,
  },
  {
    title: "Bring your own books",
    body: "Keep a quiet shelf for the titles you already love.",
    icon: LibraryBig,
  },
  {
    title: "Built for beta",
    body: "Closed-access testing helps us refine the product with a smaller, thoughtful cohort.",
    icon: Sparkles,
  },
];

function ScreenshotCard({
  screenshot,
  className,
  priority = false,
}: {
  screenshot: (typeof screenshots)[number];
  className?: string;
  priority?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("group", className)}
    >
      <div className="rounded-[34px] border border-[#e4c89c]/18 bg-[#07110a]/92 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.42)] transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative aspect-[0.46] overflow-hidden rounded-[28px] border border-[#e4c89c]/10 bg-[#050b06]">
          <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(0,0,0,0.26))]" />
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            priority={priority}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 42vw, 26vw"
          />
        </div>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3 px-1">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[#d86a10]">
            {screenshot.accent}
          </p>
          <h3 className="mt-2 font-explora text-3xl leading-[0.9] text-[#ead9b8]">
            {screenshot.title}
          </h3>
        </div>
        <p className="pt-1 text-sm text-[#b49d7b]">{screenshot.subtitle}</p>
      </div>
    </motion.article>
  );
}

function FeatureCard({
  title,
  body,
  icon: Icon,
}: {
  title: string;
  body: string;
  icon: ElementType;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className="rounded-[24px] border border-[#e4c89c]/12 bg-[#07110a]/82 p-5"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e4c89c]/12 bg-white/5 text-[#d86a10]">
          <Icon className="h-5 w-5" />
        </div>
        <p className="font-explora text-3xl text-[#ead9b8]">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-[#b49d7b]">{body}</p>
    </motion.div>
  );
}

export function MimesisLanding() {
  const showcaseRef = useRef<HTMLElement | null>(null);
  const signupRef = useRef<HTMLElement | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submitWaitlist = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/mimesis-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
          source: "mimesis-subpage",
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string; error?: string }
        | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage(data?.message ?? "You're on the closed-beta list.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative h-[100dvh] snap-y snap-mandatory scroll-smooth overflow-y-auto overflow-x-hidden bg-transparent text-[#e6cfaa]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#d86a10]/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-[20%] h-[24rem] w-[24rem] rounded-full bg-[#8e6f38]/8 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[18%] h-[18rem] w-[18rem] rounded-full bg-[#b39a65]/8 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(223,200,166,0.05),transparent_42%),linear-gradient(to_bottom,rgba(255,255,255,0.015),transparent_16%,transparent_84%,rgba(0,0,0,0.18))]" />
      </div>

      <main className="relative mx-auto flex w-full max-w-[min(96vw,1780px)] flex-col gap-20 px-4 py-8 sm:px-6 lg:px-8 2xl:px-10">
        <section className="grid min-h-[calc(100dvh-4rem)] snap-start items-center gap-12 lg:grid-cols-[1.14fr_0.86fr] lg:gap-12 xl:grid-cols-[1.18fr_0.82fr] 2xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[58rem] lg:-translate-y-10 xl:-translate-y-14"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e4c89c]/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.34em] text-[#d1ba95] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#d86a10]" />
              Closed beta opening soon
            </div>

            <h1 className="mt-8 max-w-[8.5ch] font-explora text-[4.2rem] leading-[0.88] text-[#ead9b8] sm:text-[5.6rem] lg:text-[7.1rem] xl:text-[8.2rem] 2xl:text-[8.8rem]">
              Read and listen in one beautiful place.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#bca585] sm:text-xl xl:max-w-[52rem] xl:text-[1.45rem] xl:leading-9">
              Mimesis turns discovery, listening, and your own bookshelf into a
              calm premium experience. Explore 75,000+ audiobooks, jump into
              search when you know the title, and keep reading without the usual
              app clutter.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection(signupRef)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d86a10] px-6 py-3 text-sm font-semibold text-[#170d05] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#e37417]"
              >
                Join the closed beta
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection(showcaseRef)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e4c89c]/20 bg-white/5 px-6 py-3 text-sm font-semibold text-[#ead9b8] transition-colors duration-200 hover:border-[#d86a10]/50 hover:bg-white/10"
              >
                See the screenshots
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Catalog", value: "75,000+" },
                { label: "Access", value: "Invite-only" },
                { label: "Mode", value: "Read + listen" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-[#e4c89c]/12 bg-black/20 px-5 py-4 backdrop-blur-sm"
                >
                  <p className="text-xs uppercase tracking-[0.32em] text-[#9d8765]">
                    {item.label}
                  </p>
                  <p className="mt-2 font-explora text-3xl text-[#ead9b8]">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-[460px] lg:translate-y-8 lg:max-w-[560px] xl:translate-y-12 xl:max-w-[620px] 2xl:translate-y-14 2xl:max-w-[680px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d86a10]/12 blur-3xl xl:h-[28rem] xl:w-[28rem]" />
            <ScreenshotCard screenshot={screenshots[0]} priority className="relative z-10" />
          </div>
        </section>

        <section
          ref={showcaseRef}
          className="snap-start rounded-[36px] border border-[#e4c89c]/12 bg-black/18 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#d86a10]">
              App preview
            </p>
            <h2 className="mt-4 font-explora text-[3.2rem] leading-[0.95] text-[#ead9b8] sm:text-[4.2rem]">
              The screenshots are the story.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#bca585]">
              Every frame already carries the palette, typography, and pacing we
              want visitors to feel. The landing page now uses those real app
              screens instead of placeholders.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <ScreenshotCard screenshot={screenshots[1]} />
            <ScreenshotCard screenshot={screenshots[2]} />
            <ScreenshotCard screenshot={screenshots[3]} className="md:col-span-2 xl:col-span-1" />
          </div>
        </section>

        <section className="grid snap-start gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#d86a10]">
              Why it feels different
            </p>
            <h2 className="mt-4 font-explora text-[3.2rem] leading-[0.95] text-[#ead9b8] sm:text-[4.2rem]">
              A quieter product for people who still care about beauty.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#bca585]">
              The experience is intentionally paced: warm palette, soft motion,
              generous spacing, and a design system that makes the app feel like
              a place you want to return to every day.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featureHighlights.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                body={item.body}
                icon={item.icon}
              />
            ))}
          </div>
        </section>

        <section
          ref={signupRef}
          className="grid snap-start gap-8 rounded-[40px] border border-[#e4c89c]/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.14))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#d86a10]">
              Closed beta
            </p>
            <h2 className="mt-4 font-explora text-[3.3rem] leading-[0.95] text-[#ead9b8] sm:text-[4.4rem]">
              Join the first reading circle.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#bca585]">
              Leave your email and we’ll invite you when the beta opens. This
              list is intentionally small, and we’ll use feedback from the
              earliest cohort to shape the next release.
            </p>

            <div className="mt-6 space-y-3 text-sm text-[#ad9a77]">
              {[
                "Invite-only access for the first cohort",
                "No noisy newsletters, just beta updates",
                "Built to connect to Supabase when you are ready",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#d86a10]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={submitWaitlist}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[32px] border border-[#e4c89c]/12 bg-[#07110a]/88 p-5 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e4c89c]/12 bg-white/5 text-[#d86a10]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#9d8765]">
                  Closed-beta signup
                </p>
                <p className="mt-1 text-lg font-medium text-[#ead9b8]">
                  Get on the first invite list
                </p>
              </div>
            </div>

            <label className="mt-6 block text-sm text-[#b49d7b]">
              Email address
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-[20px] border border-[#e4c89c]/12 bg-black/25 px-4 py-4 text-[#ead9b8] outline-none transition-colors placeholder:text-[#6f624d] focus:border-[#d86a10]/70"
                autoComplete="email"
                inputMode="email"
              />
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[20px] bg-[#d86a10] px-5 py-4 text-sm font-semibold text-[#170d05] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#e37417] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Joining..." : "Join closed beta"}
              <ArrowRight className="h-4 w-4" />
            </button>

            <div
              aria-live="polite"
              className={cn(
                "mt-4 min-h-6 text-sm",
                status === "success" ? "text-[#9ed18b]" : "text-[#c58f72]"
              )}
            >
              {message || "We will only use your email to send beta access and release notes."}
            </div>
          </motion.form>
        </section>
      </main>
    </div>
  );
}
