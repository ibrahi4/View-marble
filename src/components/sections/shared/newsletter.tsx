"use client";

import { useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        setStatus("error");
        setMessage("\u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0645\u062F\u062E\u0644 \u0648\u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u0627\u064B.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0624\u0642\u062A\u060C \u062D\u0627\u0648\u0644 \u0644\u0627\u062D\u0642\u0627\u064B.");
    }
  };

  return (
    <section className="border-b border-border/70">
      <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="luxury-card rounded-[32px] p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                NEWSLETTER
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {"\u062A\u0627\u0628\u0639 \u062C\u062F\u064A\u062F "}
                <span className="gold-text">View</span>
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {"\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0623\u062D\u062F\u062B \u0623\u0641\u0643\u0627\u0631 \u0627\u0644\u0631\u062E\u0627\u0645\u060C \u0646\u0635\u0627\u0626\u062D \u0627\u0644\u0635\u064A\u0627\u0646\u0629\u060C \u0648\u0639\u0631\u0648\u0636\u0646\u0627 \u0627\u0644\u062E\u0627\u0635\u0629 \u062F\u0627\u062E\u0644 \u0628\u0631\u064A\u062F\u0643 \u0645\u0628\u0627\u0634\u0631\u0629."}
              </p>
            </div>

            {status === "success" ? (
              <div className="rounded-[24px] border border-border/70 bg-background/70 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-[color:var(--gold)]">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="mt-4 text-base font-semibold">
                  {"\u062A\u0645 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0628\u0646\u062C\u0627\u062D"}
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {"\u0633\u0646\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0642\u0631\u064A\u0628\u0627\u064B."}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                  <Input
                    type="email"
                    required
                    dir="ltr"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-12 pr-11 text-left"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Button type="submit" size="lg" disabled={status === "loading"} className="flex-1 sm:flex-none">
                    <Send className="h-4 w-4" aria-hidden />
                    <span>
                      {status === "loading"
                        ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643..."
                        : "\u0627\u0634\u062A\u0631\u0643 \u0641\u064A \u0627\u0644\u0646\u0634\u0631\u0629"}
                    </span>
                  </Button>
                </div>

                {message ? (
                  <p className="text-xs text-destructive">{message}</p>
                ) : (
                  <p className="text-xs leading-6 text-muted-foreground">
                    {"\u0644\u0646 \u0646\u0634\u0627\u0631\u0643 \u0628\u0631\u064A\u062F\u0643 \u0645\u0639 \u0623\u064A \u062C\u0647\u0629 \u062E\u0627\u0631\u062C\u064A\u0629."}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}