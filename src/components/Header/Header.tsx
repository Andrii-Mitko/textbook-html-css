import css from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/">Git</Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/notes">Основний підручник</Link>
          </li>
          <li>
            <Link href="/profile">Підручник LESS</Link>
          </li>
          <li>
            <Link href="/about">Підручник SASS</Link>
          </li>
          <li>
            <Link href="/profile"> Довідник HTML</Link>
          </li>
          <li>
            <Link href="/about">Довідник CSS </Link>
          </li>
          <Link href="/about">Збірник завдань за рівнями</Link>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
