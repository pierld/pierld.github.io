export interface Researchexp {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const researchexpData: Researchexp[] = [

  {
    date: "2025—current",
    title: "Research Analyst",
    company: "European Central Bank",
    description:
      "DG-Economics, Fiscal Policies",
    advisor: "Krzysztof Bańkowski",
  },

  {
    date: "2024 (6 mos.)",
    title: "Trainee",
    company: "Deutsche Bundesbank",
    description:
      "DG-Economics, International Economics",
    advisor: "Makram Khalil",
  },
  
];
