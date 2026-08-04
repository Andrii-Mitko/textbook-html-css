import { highestTutorial } from "./highest/highest";
import { gitTutorial } from "./git/git";
import { htmlTutorial } from "./html/html";

export const tutorialsData = {
  git: {
    title: "Навчальник Git",
    sections: gitTutorial,
  },

  html: {
    title: "Основний навчальник",
    sections: htmlTutorial,
  },
  highest: {
    title: "Поглиблений навчальник",
    sections: highestTutorial,
  },
};
