"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/team", label: "Team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const isLight = mounted && resolvedTheme === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    setTheme(isLight ? "dark" : "light");
  };

  return (
    <>
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isLight && "nav-shell",
        isLight
          ? "border-b hairline-border bg-[var(--nav-surface)] backdrop-blur-md"
          : scrolled
            ? "border-b hairline-border bg-bg-deep/90 backdrop-blur-md"
            : "border-b border-[color:var(--hairline-muted)] bg-bg-deep/40 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-5 sm:h-16 sm:gap-3 sm:px-6 md:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={assetPath("/brand/logo-horizontal-light.svg")}
            alt="AB Analytics"
            width={148}
            height={30}
            className="h-6 w-auto sm:h-7 md:h-8"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  active
                    ? "text-text-on-dark"
                    : "text-text-muted-on-dark hover:text-text-on-dark",
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-brand-cyan" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-text-muted-on-dark transition-colors hover:text-text-on-dark"
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
          >
            {mounted && isLight ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-full bg-brand-cyan px-5 py-2 text-sm font-medium text-bg-deep transition-all hover:bg-brand-cyan/90"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-text-muted-on-dark transition-colors hover:text-text-on-dark"
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
          >
            {mounted && isLight ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-text-muted-on-dark hover:text-text-on-dark"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>

    {open && (
      <>
        <button
          type="button"
          className="fixed inset-0 top-14 z-[60] bg-bg-deep/50 backdrop-blur-sm sm:top-16 lg:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "fixed inset-x-0 top-14 bottom-0 z-[70] flex flex-col overflow-y-auto sm:top-16 lg:hidden",
            isLight && "nav-shell",
            isLight ? "bg-[var(--nav-surface)]" : "bg-bg-deep",
          )}
        >
          <nav className="flex flex-1 flex-col px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-14 items-center border-b border-[color:var(--hairline-muted)] text-lg font-medium last:border-0",
                  pathname === link.href
                    ? "text-brand-cyan"
                    : "text-text-muted-on-dark",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-auto flex min-h-12 items-center justify-center rounded-full bg-brand-cyan text-base font-medium text-bg-deep"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </>
    )}
    </>
  );
}
