export interface WorkingPaper {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const workingpaperData: WorkingPaper[] = [
  
  {
    year: "(2026)",
    conference: "European Central Bank",
    title: "Evaluating the Debt-at-Risk Framework: Evidence from Euro Area Countries",
    authors: "Pierre M. Rouillard, Krzysztof Bańkowski",
    tldr: "This paper examines how current economic, financial, and political conditions shape the entire conditional distribution of future public debt in Euro area countries. Additionally, we provide the first out-of-sample evaluation of the IMF’s newly developed Debt-at-Risk framework. We find that its predictive performance surpasses alternative models at short horizons, especially for extreme outcomes. These findings support the use of probabilistic risk-based frameworks in guiding fiscal surveillance and informing policy makers to rising debt vulnerabilities.",
  },

  {
    year: "",
    conference: "European Central Bank (2026), Deutsche Bundesbank (2025)",
    title: "Import tariff transmission in a production network",
    authors: "Pierre M. Rouillard, Makram Khalil, Felix Strobel",
    paperUrl: "https://mpra.ub.uni-muenchen.de/125698/",
    codeUrl: "https://github.com/pierld/tariff_production_network",
    tldr: "We find evidence that US manufacturing sectors experience US import tariffs either as supply-side or demand-side shocks, depending on the location of the sector and the affected products in the US production network. Using local projections in a panel of US manufacturing sectors, we find that US import tariffs —in particular including the 2018-19 tariff hikes— led to sectoral output contractions via two different channels: (1) Tariff increases act as negative supply shocks for sectors that use the affected goods as input in production and thus face rising input costs. (2) Tariff increases act as negative demand shocks for sectors whose customers experience the tariff increase as a negative supply shock and reduce their production."
  },

];
