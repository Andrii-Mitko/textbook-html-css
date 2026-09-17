import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";
import { tutorials } from "@/data/tutorials";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Link href="/" className={css.logo}>
          <Image
            src="/favicon/android-chrome-192x192.png"
            alt="WebBook"
            width={40}
            height={40}
            className={css.logoImage}
          />

          <span>WebBook</span>
        </Link>

        <nav className={css.navigation}>
          {tutorials.map((tutorial) => (
            <Link key={tutorial.id} href={tutorial.href}>
              {tutorial.icon} {tutorial.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
