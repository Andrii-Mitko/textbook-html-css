export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | CodeBlock
  | ListBlock
  | NoteBlock
  | WarningBlock
  | HintBlock
  | AnswerBlock
  | ExampleBlock
  | DiagramBlock
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

export interface HintBlock {
  type: "hint";
  text: string;
}

export interface AnswerBlock {
  type: "answer";
  text: string;
}

export interface ExampleBlock {
  type: "example";
  title: string;
  text: string;
}

export interface DiagramBlock {
  type: "diagram";
  text: string;
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export interface TableBlock {
  type: "table";
  headers: string[];
  rows: string[][];
}

export interface TaskBlock {
  type: "task";
  text: string[];
}

export interface Lesson {
  id: string;

  title: string;

  description: string;

  content: ContentBlock[];
}

export interface Section {
  id: string;

  title: string;

  lessons: Lesson[];
}
