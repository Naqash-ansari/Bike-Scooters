import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "red" | "white" | "dark";
};

export default function ButtonLink({
  href,
  children,
  variant = "red"
}: ButtonLinkProps) {
  const styles = {
    red: "bg-brand-red text-white hover:bg-slate-950",
    white: "bg-white text-slate-950 ring-1 ring-slate-200 hover:bg-slate-100",
    dark: "border border-slate-300 bg-white text-slate-900 hover:border-slate-500 hover:bg-slate-50"
  };

  const className = `action-link inline-flex min-h-12 items-center justify-center rounded-sm px-5 py-3 text-center text-sm font-black uppercase tracking-wide ${styles[variant]}`;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
