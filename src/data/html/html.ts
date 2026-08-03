import type { Section } from "../types";
import { boxModel } from "./boxModel";
import { cssBasics } from "./cssBasics";
import { design } from "./design";
import { flex } from "./flex";
import { floats } from "./floats";
import { grid } from "./grid";

import { htmlBasics } from "./htmlBasics";
import { layouts } from "./layouts";
import { positioning } from "./positioning";
import { selectors } from "./selectors";
export const htmlTutorial: Section[] = [
  {
    id: "html-basics",
    title: "Основи HTML",
    lessons: htmlBasics,
  },

  {
    id: "css-basics",
    title: "Основи CSS",
    lessons: cssBasics,
  },

  {
    id: "selectors",
    title: "Селектори",
    lessons: selectors,
  },

  {
    id: "design",
    title: "Оформлення",
    lessons: design,
  },

  {
    id: "box-model",
    title: "Блочна модель",
    lessons: boxModel,
  },

  {
    id: "positioning",
    title: "Позиціонування",
    lessons: positioning,
  },

  {
    id: "floats",
    title: "Флоати",
    lessons: floats,
  },

  {
    id: "flex",
    title: "Флекси",
    lessons: flex,
  },

  {
    id: "grid",
    title: "Гріди",
    lessons: grid,
  },

  {
    id: "layouts",
    title: "Макети",
    lessons: layouts,
  },
];
