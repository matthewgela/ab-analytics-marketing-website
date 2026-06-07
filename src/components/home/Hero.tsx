"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRef, useSyncExternalStore } from "react";
import HeroField from "@/components/background/HeroField";
import MagneticButton from "@/components/ui/MagneticButton";
import VisualFrame from "@/components/ui/VisualFrame";

const AntiGravityField = dynamic(
  () => import("@/components/background/AntiGravityField"),
  { ssr: false },
);
import { assetPath } from "@/lib/assetPath";
import { fadeUp, staggerContainer } from "@/lib/motion";

const desktopHeadline =
  "Engineer AI that runs where stakes are highest";

const accentWord = "stakes";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const isLight = mounted && resolvedTheme === "light";

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 120],
  );
  const orbX = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -40],
  );
  const orbCyanY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 80],
  );
  const scrollToIntake = () => {
    document.getElementById("intake")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContent = () => {
    document
      .querySelector('[aria-label="Cloud platforms we build on"]')
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const words = desktopHeadline.split(" ");
  const accentIndex = words.findIndex((word) => word === accentWord);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="section-hero relative min-h-[100dvh] overflow-hidden sm:min-h-0"
    >
      {!isLight && <HeroField />}

      <div
        className="pointer-events-none absolute inset-0 z-[2] overflow-hidden sm:hidden"
        aria-hidden
      >
        <AntiGravityField spread="full" />
      </div>

      {!isLight && (
        <div
          className="hero-stage-backdrop pointer-events-none absolute inset-0 z-[1] sm:hidden"
          aria-hidden
        >
          <div className="hero-stage-spotlight absolute inset-0" />
          <div className="hero-stage-vignette absolute inset-0 hidden min-[480px]:block" />
        </div>
      )}

      {!isLight && (
        <>
          <motion.div
            style={{ y: orbY, x: orbX }}
            className="hero-ambient-orb pointer-events-none absolute -right-20 top-1/4 h-48 w-48 rounded-full bg-brand-cyan/14 blur-[90px] sm:h-72 sm:w-72 sm:blur-[100px]"
            aria-hidden="true"
          />
          <motion.div
            style={{ y: orbCyanY }}
            className="hero-ambient-orb pointer-events-none absolute -left-16 bottom-1/3 h-40 w-40 rounded-full bg-brand-violet/12 blur-[80px] sm:-left-20 sm:h-64 sm:w-64 sm:blur-[100px]"
            aria-hidden="true"
          />
        </>
      )}

      <div className="hero-stage relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center pt-14 sm:min-h-0 sm:block sm:justify-start sm:pt-0">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 sm:gap-8 sm:px-6 sm:pt-28 sm:pb-12 lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:px-8 lg:py-28 xl:py-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex w-full max-w-[20rem] flex-col items-center text-center sm:max-w-2xl lg:max-w-none lg:flex-1 lg:items-start lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 flex flex-col items-center gap-2.5 sm:mb-5 sm:hidden"
            >
              <Image
                src={assetPath("/brand/monogram.svg")}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9"
                priority
              />
              <span className="text-[0.8125rem] font-semibold tracking-[0.02em] text-text-on-dark">
                AB Analytics
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="eyebrow mb-4 hidden text-brand-cyan sm:mb-5 sm:block sm:text-xs"
            >
              Enterprise AI Engineering
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="hero-headline hero-headline-mobile font-display font-bold tracking-[-0.03em] text-text-on-dark sm:max-w-2xl sm:text-4xl sm:leading-[1.1] sm:tracking-tight lg:max-w-none lg:text-5xl xl:text-6xl"
            >
              <span className="sm:hidden">
                <span className="block text-[2.375rem] leading-[1.08]">
                  Engineer AI that runs
                </span>
                <span className="mt-2 block text-[1.5rem] font-semibold leading-[1.2]">
                  where{" "}
                  <span className="text-gradient-cyan">stakes</span> are
                  highest
                </span>
              </span>
              <span className="hidden sm:inline">
                {words.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.04, duration: 0.4 }}
                    className={
                      i === accentIndex
                        ? "text-gradient-cyan mr-[0.25em] inline-block"
                        : "mr-[0.25em] inline-block"
                    }
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 hidden max-w-xl text-sm leading-relaxed text-text-muted-on-dark sm:mt-6 sm:block sm:text-base lg:text-lg"
            >
              Practitioner-led architecture. Google-vetted engineering standards.
              Proven deployment across high-stakes financial, defense, and
              sovereign environments.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex w-full max-w-[18rem] flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start"
            >
              <MagneticButton
                href="/services"
                variant="primary"
                accent="cyan"
                className="hero-cta-primary w-full !px-5 !py-3.5 text-sm font-semibold sm:w-auto sm:!px-6"
              >
                Explore capabilities
              </MagneticButton>
              <MagneticButton
                onClick={scrollToIntake}
                variant="secondary"
                accent="violet"
                className="hero-cta-secondary w-full !px-5 !py-3.5 text-sm font-medium sm:w-auto sm:!px-6"
              >
                Start a conversation
              </MagneticButton>
            </motion.div>

          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className={
              isLight
                ? "hidden w-full max-w-xs flex-shrink-0 sm:block sm:max-w-md lg:max-w-none lg:flex-1"
                : "hero-visual-glow hidden w-full max-w-xs flex-shrink-0 sm:block sm:max-w-md lg:max-w-none lg:flex-1"
            }
          >
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-[1]"
            >
              <VisualFrame
                src="/images/hero/enterprise-ai.svg"
                alt="Enterprise AI platform visualization"
                dark
                glow={!isLight}
                className="aspect-[4/3] w-full"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          type="button"
          onClick={scrollToContent}
          aria-label="Scroll to explore"
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="hero-scroll-hint absolute inset-x-0 bottom-6 flex justify-center sm:hidden"
        >
          <span className="hero-scroll-hint-pill flex flex-col items-center gap-1 rounded-full px-4 py-2.5">
            <span className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-brand-cyan">
              Scroll
            </span>
            <ChevronDown className="h-6 w-6 text-brand-cyan" strokeWidth={2.25} />
          </span>
        </motion.button>
      </div>
    </section>
  );
}
