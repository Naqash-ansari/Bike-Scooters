import Link from "next/link";
import { navItems, phoneDisplay, phoneHref, shopAddress, whatsAppHref } from "./site-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-extrabold tracking-tight">M7 Bike & Scooters</p>
          <p className="mt-2 max-w-md text-slate-400">
            Sale - Repair - Accessories. All Bikes Spare Parts & Service Center.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-brand-red">Pages</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-brand-red">Contact</p>
          <div className="mt-4 space-y-3 text-slate-300">
            <a href={phoneHref} className="block hover:text-white">
              Call {phoneDisplay}
            </a>
            <a href={whatsAppHref} className="block hover:text-white">
              WhatsApp {phoneDisplay}
            </a>
            <p>{shopAddress}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
        (c) {new Date().getFullYear()} M7 Bike & Scooters. All rights reserved.
      </div>
    </footer>
  );
}
