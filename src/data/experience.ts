export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [

  {
    date: "2023 (6 mos.)",
    title: "Intern",
    company: "Allianz Trade",
    description:
      "Economic Research",
    manager: "Françoise Huang, Roberta Fortes",
  },

  {
    date: "2022 (6 mos.)",
    title: "Intern",
    company: "AEW Capital Management",
    description:
      "Real Estate Research",
    manager: "Ken Baccam",
  },

  {
    date: "2021 (3 mos.)",
    title: "Intern",
    company: "French Labour Ministry",
    description:
      "DGEFP",
    manager: "Philippe Machover",
  },

];
