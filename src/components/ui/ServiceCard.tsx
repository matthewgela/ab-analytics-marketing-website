"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SpotlightCard from "@/components/ui/SpotlightCard";
import type { Service } from "@/content/services";
import { accentIconClass, type Accent } from "@/lib/accent";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  service: Service;
  dark?: boolean;
};

export default function ServiceCard({
  service,
  dark = true,
}: ServiceCardProps) {
  const Icon = service.icon;
  const accent = (service.accent ?? "cyan") as Accent;

  return (
    <motion.div variants={fadeUp} className="h-full">
      <SpotlightCard
        accent={accent}
        dark={dark}
        className="group flex h-full flex-col overflow-hidden p-0"
      >
        <div className="relative aspect-[2/1] w-full overflow-hidden sm:aspect-[16/10]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <div
            className={cn(
              "mb-4 flex h-10 w-10 items-center justify-center rounded-xl",
              dark ? "hairline-bg-muted" : "bg-bg-base",
            )}
          >
            <Icon
              className={cn("h-5 w-5", accentIconClass[accent])}
              strokeWidth={1.75}
            />
          </div>
          <h3
            className={cn(
              "mb-2 text-lg font-bold tracking-tight",
              dark ? "text-text-on-dark" : "text-text-primary",
            )}
          >
            {service.title}
          </h3>
          <p
            className={cn(
              "text-sm leading-relaxed",
              dark ? "text-text-muted-on-dark" : "text-text-muted",
            )}
          >
            {service.description}
          </p>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
