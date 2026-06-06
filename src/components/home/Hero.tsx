"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroField from "@/components/background/HeroField";
import MagneticButton from "@/components/ui/MagneticButton";
import VisualFrame from "@/components/ui/VisualFrame";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { fadeUp, staggerContainer } from "@/lib/motion";

const tagline =
  "We Industrialize Machine Learning & Generative AI Systems for National Scale";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 639px)");
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

  const words = tagline.split(" ");
  const accentStart = words.length - 2;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="section-hero relative overflow-hidden"
    >
      <HeroField />

      <motion.div
        style={{ y: orbY, x: orbX }}
        className="hero-ambient-orb pointer-events-none absolute -right-20 top-1/4 hidden h-56 w-56 rounded-full bg-brand-cyan/12 blur-[100px] sm:block sm:h-72 sm:w-72"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: orbCyanY }}
        className="hero-ambient-orb pointer-events-none absolute -left-20 bottom-1/4 hidden h-48 w-48 rounded-full bg-brand-violet/12 blur-[100px] sm:block sm:h-64 sm:w-64"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 pt-20 pb-10 sm:min-h-[85vh] sm:gap-10 sm:px-6 sm:pt-28 sm:pb-16 md:flex-row md:gap-12 md:px-8 md:pt-40 md:pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-1 flex-col text-center md:text-left"
        >
          <motion.p
            variants={fadeUp}
            className="eyebrow mb-3 text-[0.65rem] text-brand-cyan sm:mb-6 sm:text-xs"
          >
            <span className="block sm:inline">AB Analytics</span>
            <span className="hidden sm:inline"> — </span>
            <span className="block sm:inline">Enterprise AI Engineering</span>
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial={isMobile ? { opacity: 0, y: 16 } : undefined}
            animate={isMobile ? { opacity: 1, y: 0 } : undefined}
            transition={isMobile ? { duration: 0.5, delay: 0.15 } : undefined}
            className="hero-headline mx-auto max-w-2xl font-display text-[1.625rem] font-bold leading-[1.2] tracking-tight text-text-on-dark sm:text-4xl sm:leading-[1.15] md:mx-0 md:text-5xl lg:text-6xl"
          >
            {isMobile ? (
              <>
                {words.slice(0, accentStart).map((word, i) => (
                  <span key={`${word}-${i}`} className="mr-[0.25em] inline-block">
                    {word}
                  </span>
                ))}
                {words.slice(accentStart).map((word, i) => (
                  <span
                    key={`accent-${word}-${i}`}
                    className="text-gradient-cyan mr-[0.25em] inline-block"
                  >
                    {word}
                  </span>
                ))}
              </>
            ) : (
              words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.04, duration: 0.4 }}
                  className={
                    i >= accentStart
                      ? "text-gradient-cyan mr-[0.25em] inline-block"
                      : "mr-[0.25em] inline-block"
                  }
                >
                  {word}
                </motion.span>
              ))
            )}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-muted-on-dark sm:mt-8 sm:text-base md:mx-0 md:text-lg"
          >
            Practitioner-led architecture. Google-vetted engineering standards.
            Proven deployment across high-stakes financial, defense, and
            sovereign environments.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-6 hidden w-full flex-row flex-wrap justify-center gap-4 sm:mt-10 sm:flex md:mx-0 md:justify-start"
          >
            <MagneticButton
              href="/services"
              variant="primary"
              accent="cyan"
              className="w-full !px-4 !py-2.5 text-xs sm:w-auto sm:!px-6 sm:!py-3 sm:text-sm"
            >
              Explore Solutions
            </MagneticButton>
            <MagneticButton
              onClick={scrollToIntake}
              variant="secondary"
              accent="violet"
              className="w-full !px-4 !py-2.5 text-xs !text-text-on-dark sm:w-auto sm:!px-6 sm:!py-3 sm:text-sm"
            >
              Get in Touch
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="hero-visual-glow order-2 w-full max-w-sm flex-shrink-0 sm:max-w-md md:order-none md:max-w-none md:flex-1"
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
              glow
              className="aspect-[4/3] w-full"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="order-3 flex w-full max-w-xs flex-col gap-3 sm:hidden"
        >
          <MagneticButton
            href="/services"
            variant="primary"
            accent="cyan"
            className="w-full !px-5 !py-3 text-sm"
          >
            Explore Solutions
          </MagneticButton>
          <MagneticButton
            onClick={scrollToIntake}
            variant="secondary"
            accent="violet"
            className="w-full !px-5 !py-3 text-sm !text-text-on-dark max-sm:!border max-sm:!bg-transparent max-sm:shadow-none"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
