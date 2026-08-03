import Link from "next/link";
import Image from "next/image";

import { tutorials } from "@/data/tutorials";

import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.brand}>
          <Image
            src="/logo-full.webp"
            alt="Textbook HTML CSS"
            width={180}
            height={60}
            className={css.logo}
          />

          <p>Навчальна платформа для майбутніх веброзробників.</p>
        </div>

        <div className={css.links}>
          <h3>Навчання</h3>

          {tutorials.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className={css.bottom}>© 2026 Andrii Mitko. Усі права захищені.</div>
    </footer>
  );
}
