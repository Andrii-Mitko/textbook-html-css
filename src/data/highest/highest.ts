import { Section } from "../types";
import { advanced } from "./advanced";
import { advancedFlexbox } from "./advancedFlexbox";
import { advancedGrid } from "./advancedGrid";
import { crossBbrowser } from "./crossBbrowser";
import { effects } from "./effects";
import { forms } from "./forms";
import { graphics } from "./graphics";
import { responsiveLayout } from "./responsiveLayout";
import { unitsMeasurement } from "./unitsMeasurement";

export const highestTutorial: Section[] = [
  {
    id: "advanced",
    title: "Просунуте",
    lessons: advanced,
  },

  {
    id: "forms",
    title: "Форми",
    lessons: forms,
  },

  {
    id: "graphics",
    title: "Графіка",
    lessons: graphics,
  },

  {
    id: "effects",
    title: "Ефекти",
    lessons: effects,
  },

  {
    id: "crossBrowser",
    title: "Сумісність із різними браузерами",
    lessons: crossBbrowser,
  },

  {
    id: "unitsMeasurement",
    title: "Одиниці вимірювання",
    lessons: unitsMeasurement,
  },

  {
    id: "advancedFlexbox",
    title: "Розширені можливості роботи з Flexbox",
    lessons: advancedFlexbox,
  },
  {
    id: "advancedGrid",
    title: "Розширені можливості роботи з Grid",
    lessons: advancedGrid,
  },
  {
    id: "responsiveLayout",
    title: "Адаптивне верстання",
    lessons: responsiveLayout,
  },
];
