import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="section-deep relative z-10 border-t hairline-border pb-[env(safe-area-inset-bottom,0px)]">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-14 sm:px-6 sm:pt-20 sm:pb-20 md:px-8 md:pt-24 md:pb-24">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
          <div>
            <div className="mb-6">
              <BrandLogo size="footer" asLink={false} />
            </div>
            <p className="mt-4 text-sm text-text-muted-on-dark">
              United Kingdom
              <br />
              Building for organisations in Ethiopia
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
              AI and software engineering for Ethiopian organisations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
