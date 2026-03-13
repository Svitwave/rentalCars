"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logo}>
          <Image
            src="/svg/logo.svg"
            alt="RentalCar"
            width={102}
            height={16}
            priority
          />
        </Link>

        <nav className={css.nav}>
          <Link
            href="/"
            className={`${css.link} ${pathname === "/" ? css.active : ""}`}
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className={`${css.link} ${pathname === "/catalog" ? css.active : ""}`}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
