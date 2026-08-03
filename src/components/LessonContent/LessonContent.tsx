import type { ContentBlock } from "@/data/types";
import styles from "./LessonContent.module.css";
import Image from "next/image";

interface LessonContentProps {
  content: ContentBlock[];
}

export default function LessonContent({ content }: LessonContentProps) {
  return (
    <>
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={index} className={styles.heading}>
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p key={index} className={styles.paragraph}>
                {block.text}
              </p>
            );

          case "code":
            return (
              <pre key={index} className={styles.code}>
                <code>{block.code}</code>
              </pre>
            );

          case "list":
            return (
              <ul key={index} className={styles.list}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );

          case "note":
            return (
              <div key={index} className={styles.note}>
                {" "}
                <strong>❗ Важливо:</strong> <p>{block.text}</p>{" "}
              </div>
            );

          case "hint":
            return (
              <details key={index} className={styles.hint}>
                <summary>💡 Показати підказку</summary>

                <p>{block.text}</p>
              </details>
            );

          case "answer":
            return (
              <details key={index} className={styles.answer}>
                <summary>✅ Показати відповідь</summary>

                <pre>{block.text}</pre>
              </details>
            );

          case "task":
            return (
              <div key={index} className={styles.task}>
                <strong>📌 Завдання:</strong>

                <ol>
                  {block.text.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              </div>
            );

          case "table":
            return (
              <div key={index} className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "image":
            return (
              <Image
                key={index}
                src={block.src}
                alt={block.alt}
                width={1200}
                height={800}
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            );

          case "diagram":
            return (
              <pre key={index} className={styles.diagram}>
                {block.text}
              </pre>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
