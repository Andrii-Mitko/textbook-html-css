"use client";

import styles from "./LessonTop.module.css";

export default function LessonTop() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button type="button" className={styles.top} onClick={handleScrollToTop}>
      ↑ Вгору
    </button>
  );
}
