"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MagneticButton from "@/components/ui/MagneticButton";
import GlassCard from "@/components/ui/GlassCard";
import {
  simpleContactSchema,
  type SimpleContactFormData,
} from "@/lib/schemas";
import { cn } from "@/lib/cn";
import { submitContactForm } from "@/lib/contact";

const inputClass =
  "w-full rounded-xl border hairline-border bg-bg-deep/60 px-4 py-3 text-base text-text-on-dark placeholder:text-text-muted-on-dark/50 outline-none transition-colors focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/20";

type SimpleContactFormProps = {
  formType?: "intake" | "contact";
  dark?: boolean;
};

export default function SimpleContactForm({
  formType = "contact",
  dark = true,
}: SimpleContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SimpleContactFormData>({
    resolver: zodResolver(simpleContactSchema),
  });

  const onSubmit = async (data: SimpleContactFormData) => {
    setSubmitError(null);

    const result = await submitContactForm({ formType, ...data });

    if (result.ok) {
      setSubmitted(true);
      reset();
      return;
    }

    setSubmitError(result.message);
  };

  const fieldClass = dark
    ? inputClass
    : "w-full rounded-xl border border-border-light bg-bg-base px-4 py-3 text-base text-text-primary placeholder:text-text-muted/50 outline-none transition-colors focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/20";

  return (
    <GlassCard dark={dark} className="shadow-lg">
      {submitted ? (
        <div className="py-10 text-center">
          <p className="text-xl font-bold text-brand-emerald">
            Message received
          </p>
          <p
            className={cn(
              "mt-2 text-sm",
              dark ? "text-text-muted-on-dark" : "text-text-muted",
            )}
          >
            We&apos;ll get back to you within 48 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden
          />

          <div>
            <label
              className={cn(
                "mb-1.5 block text-xs font-medium",
                dark ? "text-text-muted-on-dark" : "text-text-muted",
              )}
            >
              Name
            </label>
            <input
              {...register("name")}
              className={fieldClass}
              placeholder="Your full name"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              className={cn(
                "mb-1.5 block text-xs font-medium",
                dark ? "text-text-muted-on-dark" : "text-text-muted",
              )}
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className={fieldClass}
              placeholder="you@company.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              className={cn(
                "mb-1.5 block text-xs font-medium",
                dark ? "text-text-muted-on-dark" : "text-text-muted",
              )}
            >
              Message
            </label>
            <textarea
              {...register("message")}
              rows={5}
              className={cn(fieldClass, "resize-none")}
              placeholder="Tell us about your project, timeline, or how we can help..."
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          {submitError && (
            <p
              role="alert"
              className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              {submitError}
            </p>
          )}

          <MagneticButton
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </MagneticButton>
        </form>
      )}
    </GlassCard>
  );
}
