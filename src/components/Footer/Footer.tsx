import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p>&copy; {new Date().getFullYear()} Textbook HTML CSS</p>
    </footer>
  );
};

export default Footer;
