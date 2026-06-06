import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="section-void relative z-10 border-t hairline-border pb-[env(safe-area-inset-bottom,0px)]">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-14 sm:px-6 sm:pt-20 sm:pb-20 md:px-8 md:pt-24 md:pb-24">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-3">
          <div>
            <Image
              src={assetPath("/brand/logo-stacked.svg")}
              alt="AB Analytics"
              width={120}
              height={80}
              className="footer-logo mb-6 h-auto w-28 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-text-muted-on-dark">
              Infrastructure · Systems · Data · Intelligence
            </p>
            <p className="mt-4 text-sm text-text-muted-on-dark">
              Addis Ababa, Ethiopia
              <br />
              International deployment networks
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-4 text-brand-cyan">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted-on-dark transition-colors hover:text-text-on-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4 text-brand-cyan">Legal</h3>
            <p className="text-sm leading-relaxed text-text-muted-on-dark">
              © {new Date().getFullYear()} AB Analytics. All rights reserved.
              Enterprise AI engineering for sovereign environments.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
