export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | CodeBlock
  | ListBlock
  | NoteBlock
  | WarningBlock
  | ImageBlock
  | TableBlock
  | TaskBlock;

export interface HeadingBlock {
  type: "heading";
  text: string;
}

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface CodeBlock {
  type: "code";
  language: string;
  code: string;
}

export interface ListBlock {
  type: "list";
  items: string[];
}

export interface NoteBlock {
  type: "note";
  text: string;
}

export interface WarningBlock {
  type: "warning";
  text: string;
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
}

export interface TableBlock {
  type: "table";
  headers: string[];
  rows: string[][];
}

export interface TaskBlock {
  type: "task";
  text: string;
}
