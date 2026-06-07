import type { SimpleContactFormData } from "@/lib/schemas";

export const formspreeEndpoint =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ??
  "https://formspree.io/f/xbdeganl";

type SubmitContactInput = SimpleContactFormData & {
  formType: "intake" | "contact";
};

type FormspreeError = {
  message?: string;
  error?: string;
};

export async function submitContactForm({
  formType,
  name,
  email,
  message,
}: SubmitContactInput): Promise<{ ok: true } | { ok: false; message: string }> {
  const subject =
    formType === "intake"
      ? "AB Analytics — Partnership inquiry"
      : "AB Analytics — Contact inquiry";

  const response = await fetch(formspreeEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: subject,
      _replyto: email,
      form_type: formType,
    }),
  });

  let payload: FormspreeError | null = null;
  try {
    payload = (await response.json()) as FormspreeError;
  } catch {
    payload = null;
  }

  if (response.ok) {
    return { ok: true };
  }

  return {
    ok: false,
    message:
      payload?.error ??
      payload?.message ??
      "We couldn't send your message. Please try again or email us directly.",
  };
}
