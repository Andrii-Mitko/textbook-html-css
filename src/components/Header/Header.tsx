import Link from "next/link";
import css from "./Header.module.css";
import { tutorials } from "@/data/tutorials";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Link href="/" className={css.logo}>
          📚 WebBook
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
