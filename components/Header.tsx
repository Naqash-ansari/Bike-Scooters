"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, phoneDisplay, phoneHref, whatsAppHref } from "./site-data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand-red font-display text-xl text-white">
            M7
          </span>
          <span>
            <span className="block text-lg font-extrabold leading-none tracking-tight text-slate-950">
              Bike & Scooters
            </span>
            <span className="block text-xs font-semibold text-slate-500">
              Sale - Repair - Accessories
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-sm px-3 py-2 text-[13px] font-bold uppercase tracking-wide transition ${
                  active ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={phoneHref}
            className="rounded-sm border border-slate-300 px-4 py-3 text-sm font-bold text-slate-800 hover:border-slate-500"
          >
            {phoneDisplay}
          </a>
          <a
            href={whatsAppHref}
            className="rounded-sm bg-brand-red px-4 py-3 text-sm font-black uppercase text-white hover:bg-slate-950"
          >
            WhatsApp
          </a>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:border-slate-400 lg:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          open ? "max-h-[620px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="mx-auto grid max-w-7xl gap-2 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-4 py-3 text-sm font-bold transition ${
                pathname === item.href
                  ? "bg-slate-950 text-white"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 grid gap-2 border-t border-slate-200 pt-4 sm:grid-cols-2">
            <a
              href={phoneHref}
              className="rounded-md border border-slate-300 px-4 py-3 text-center text-sm font-extrabold text-slate-900"
            >
              Call {phoneDisplay}
            </a>
            <a
              href={whatsAppHref}
              className="rounded-md bg-brand-red px-4 py-3 text-center text-sm font-extrabold text-white"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
