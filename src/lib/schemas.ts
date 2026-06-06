import { z } from "zod";

export const simpleContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Please include your message"),
});

export type SimpleContactFormData = z.infer<typeof simpleContactSchema>;

// Legacy aliases kept for any imports
export const intakeSchema = simpleContactSchema;
export type IntakeFormData = SimpleContactFormData;
export const contactSchema = simpleContactSchema;
export type ContactFormData = SimpleContactFormData;
