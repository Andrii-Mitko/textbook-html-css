import type { LessonContent as LessonContentType } from "@/data/git/git";
import styles from "./LessonContent.module.css";

interface LessonContentProps {
  content: LessonContentType[];
}

export default function LessonContent({ content }: LessonContentProps) {
  return (
    <>
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={index} className={styles.heading}>
                {block.value as string}
              </h2>
            );

          case "paragraph":
            return (
              <p key={index} className={styles.paragraph}>
                {block.value as string}
              </p>
            );

          case "code":
            return (
              <pre key={index} className={styles.code}>
                <code>{block.value as string}</code>
              </pre>
            );

          case "list":
            return (
              <ul key={index} className={styles.list}>
                {(block.value as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );

          case "note":
            return (
              <div key={index} className={styles.note}>
                <strong>❗ Важливо:</strong>
                <p>{block.value as string}</p>
              </div>
            );

          case "hint":
            return (
              <details key={index} className={styles.hint}>
                <summary>💡 Показати підказку</summary>

                <p>{block.value as string}</p>
              </details>
            );

          case "answer":
            return (
              <details key={index} className={styles.answer}>
                <summary>✅ Показати відповідь</summary>

                <pre>{block.value as string}</pre>
              </details>
            );

          case "task":
            return (
              <ol key={index} className={styles.task}>
                {(block.value as string[]).map((item, i) => (
                  <li key={i}>📌{item}</li>
                ))}
              </ol>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
