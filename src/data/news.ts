export interface News {
  date: string;
  title: string;
  link?: string;
  description?: string;
}

export const newsData: News[] = [

  {
    date: "August 2026",
    title: "Work accepted as Bundesbank Discussion Paper",
    link: "https://www.bundesbank.de/en/publications/research/discussion-papers/import-tariff-transmission-in-a-production-network-920638",
    //description: "",
  },

  {  
    date: "July 2026",
    title: "Work accepted as ECB Working Paper",
    link: "https://www.ecb.europa.eu/pub/pdf/scpwps/ecb.wp3258~46133509d4.en.pdf?e8dabea02989246bc5f16ccce85e3c56",
    //description: "",
  },

];
