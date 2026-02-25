"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { Mail, Github, Linkedin } from "lucide-react";
import { sendMessage, type ContactState } from "@/lib/contact-action";

export function ContactForm() {
  const t = useTranslations("contact");
  const [state, formAction, pending] = useActionState<ContactState | null, FormData>(
    sendMessage,
    null
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">{t("title")}</h2>

      {state?.success && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-3 text-sm text-green-800">
          {t("success")}
        </div>
      )}

      {state?.error && !state.success && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-800">
          {t(state.error)}
        </div>
      )}

      {!state?.success && (
        <form action={formAction} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              {t("emailLabel")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t("emailPlaceholder")}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#4f634d] focus:outline-none focus:ring-1 focus:ring-[#4f634d]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              {t("messageLabel")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t("messagePlaceholder")}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#4f634d] focus:outline-none focus:ring-1 focus:ring-[#4f634d] resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="rounded-lg bg-[#4f634d] px-5 py-2 text-sm font-medium text-white hover:bg-[#3e4f3c] disabled:opacity-50 transition-colors"
          >
            {pending ? t("sending") : t("send")}
          </button>
        </form>
      )}

      <div className="flex gap-4 pt-2">
        <a
          href="mailto:alekuligowski@gmail.com"
          className="text-slate-600 hover:text-slate-900 transition-colors"
          aria-label={t("email")}
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/akuligowski9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 hover:text-slate-900 transition-colors"
          aria-label={t("github")}
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/alexkuligowski"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 hover:text-slate-900 transition-colors"
          aria-label={t("linkedin")}
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
