export type Accent = "cyan" | "violet" | "emerald" | "royal";

export const accentGlowClass: Record<Accent, string> = {
  cyan: "glow-cyan",
  violet: "glow-violet",
  emerald: "glow-emerald",
  royal: "glow-royal",
};

export const accentHoverGlowClass: Record<Accent, string> = {
  cyan: "hover:glow-cyan",
  violet: "hover:glow-violet",
  emerald: "hover:glow-emerald",
  royal: "hover:glow-royal",
};

export const accentGradientClass: Record<Accent, string> = {
  cyan: "text-gradient-cyan",
  violet: "text-gradient-violet",
  emerald: "text-gradient-emerald",
  royal: "text-gradient-royal",
};

export const accentBorderHoverClass: Record<Accent, string> = {
  cyan: "hover:border-brand-cyan/65",
  violet: "hover:border-brand-violet/65",
  emerald: "hover:border-brand-emerald/65",
  royal: "hover:border-brand-royal/65",
};

export const accentRingClass: Record<Accent, string> = {
  cyan: "ring-brand-cyan/30",
  violet: "ring-brand-violet/30",
  emerald: "ring-brand-emerald/30",
  royal: "ring-brand-royal/30",
};

export const accentChipBgClass: Record<Accent, string> = {
  cyan: "bg-brand-cyan/10",
  violet: "bg-brand-violet/10",
  emerald: "bg-brand-emerald/10",
  royal: "bg-brand-royal/10",
};

export const accentIconClass: Record<Accent, string> = {
  cyan: "text-brand-cyan",
  violet: "text-brand-violet",
  emerald: "text-brand-emerald",
  royal: "text-brand-royal",
};

export const accentSolidClass: Record<Accent, string> = {
  cyan: "bg-brand-cyan text-bg-deep",
  violet: "bg-brand-violet text-white",
  emerald: "bg-brand-emerald text-bg-deep",
  royal: "bg-brand-royal text-white",
};

export const accentCycle: Accent[] = ["cyan", "violet", "emerald", "royal"];
