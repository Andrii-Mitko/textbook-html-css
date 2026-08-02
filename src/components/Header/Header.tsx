import css from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.wrapper}>
          <Link href="/" className={css.logo}>
            Навчальник
          </Link>

          <nav aria-label="Main Navigation">
            <ul className={css.navigation}>
              <li>
                <Link href="/tutorials/git">Git</Link>
              </li>

              <li>
                <Link href="/tutorials/html">HTML</Link>
              </li>

              <li>
                <Link href="/tutorials/css">CSS</Link>
              </li>

              <li>
                <Link href="/tutorials/less">LESS</Link>
              </li>

              <li>
                <Link href="/tutorials/sass">SASS</Link>
              </li>

              <li>
                <Link href="/tasks">Задачник</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
