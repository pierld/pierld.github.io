export enum Section {
  Publication = "publication",
  WorkingPapers = "workingpaper",
  Education = "education",
  Researchexp = "researchexp",
  Experience = "experience",
  News = "news",
  Replication = "replication",
}

export const sectionOrder = [
  Section.News,
  Section.Publication,
  Section.WorkingPapers,
  Section.Researchexp,
  Section.Education,
  Section.Experience,
  Section.Replication,
];
