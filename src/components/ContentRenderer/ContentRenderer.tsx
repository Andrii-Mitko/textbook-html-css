import { ContentBlock } from "@/data/types";
import css from "./ContentRenderer.module.css";

interface ContentRendererProps {
  content: ContentBlock[];
}

export default function ContentRenderer({ content }: ContentRendererProps) {
  return(
    <div className={css.content}>
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={index} className={css.heading}>
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p key={index} className={css.paragraph}>
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul key={index} className={css.list}>
                {block.items.map((item, i) => (
                  <li key={i} className={css.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "note":
            return (
              <div key={index} className={css.note}>
                {block.text}
              </div>
            );

          case "code":
            return (
              <pre key={index} className={css.code}>
                <code>{block.code}</code>
              </pre>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
