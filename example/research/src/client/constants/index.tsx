import { IExamples, IKeywordsCollection, IResearchResult } from "../types";

export const RESEARCHSTEPS = {
  Specification: 1,
  Examples: 2,
  ResearchResults: 3,
};

export const KEYWORDSCOLLECTION: IKeywordsCollection[] = [
  {
    id: "101",
    title: "Laundry Care",
    definitions_in: [
      { definitionId: "101-1", value: "Heavy-duty detergents" },
      { definitionId: "101-2", value: "Fabric softeners" },
      { definitionId: "101-3", value: "Mild and special detergents" },
      { definitionId: "101-4", value: "Detergents for colors" },
      { definitionId: "101-5", value: "Powdered and liquid detergents" },
    ],
    definitions_out: [
      {
        definitionId: "101-6",
        value: "Detergents for bulk consumers (B2B; e. textile industry)",
      },
      {
        definitionId: "101-7",
        value: "Textile care services (e.g. launderettes)",
      },
    ],
  },
  {
    id: "102",
    title: "Household Cleaners",
    definitions_in: [
      { definitionId: "102-1", value: "Household Cleaners" },
      { definitionId: "102-2", value: "Surface cleaners" },
      { definitionId: "102-3", value: "Floor care" },
      { definitionId: "102-4", value: "Toilet care" },
      { definitionId: "102-5", value: "Window cleaning products" },
    ],
    definitions_out: [
      {
        definitionId: "102-6",
        value: "Polishes (for floor cleaning/care or furniture)",
      },
      {
        definitionId: "102-7",
        value: "Cleaning equipment (e.g. mops or cleaning cloths)",
      },
    ],
  },
];
export const EXAMPLES: IExamples[] = [
  {
    id: "abc1001",
    value: "industry data detergent xxx(country)xxx pdf",
  },
  {
    id: "abc1002",
    value: "ukcpi statistics home care market pdf",
  },
  {
    id: "abc1003",
    value: "uk market analysis laundry care",
  },
  {
    id: "abc1004",
    value: "uk laundry detergent statistics",
  },
  {
    id: "abc1005",
    value: "uk home cleaning market revenue pdf",
  },
  {
    id: "abc1006",
    value: "uk dishwashing statistics",
  },
  {
    id: "abc1007",
    value: "uk cleaning detergent statistics",
  },
  {
    id: "abc1008",
    value: "uk dishwashing market revenue",
  },
  {
    id: "abc1009",
    value: "kozmodet market revenue laundry detergent",
  },
  {
    id: "abc1010",
    value: "serbia market revenue laundry detergent pdf",
  },
  {
    id: "abc1011",
    value: "serbia market revenue cleaning detergent pdf",
  },
  {
    id: "abc1012",
    value: "serbia market revenue dishwashing detergent pdf",
  },
  {
    id: "abc1013",
    value: "saudi arabia laundry care market revenue",
  },
  {
    id: "abc1014",
    value: "russia association household cleaning market size",
  },
  {
    id: "abc1015",
    value: "russia associatin laundry detergent market size",
  },
];

export const RESEARCHRESULTS: IResearchResult[] = [
  {
    id: "def1001",
    name: "Euromonitor",
    url: "https://www.euromonitor.co...",
    grade: 1,
    information: "text",
    messages: [
      {
        id: "question-001",
        message:
          "What key insights does Euromonitor's research provide regarding the laundry care and household cleaners industry?",
        response:
          "Euromonitor's research offers valuable insights into the laundry care and household cleaners industry",
        status: "answered",
      },
      {
        id: "question-002",
        message:
          "How does Euromonitor's research address the impact of emerging technologies on product innovation within the laundry care and household cleaners market?",
        response:
          "Euromonitor's research provides a comprehensive analysis of the impact of emerging technologies on product innovation within the laundry care and household cleaners market.",
        status: "answered",
      },
    ],
  },
  {
    id: "def1002",
    name: "Nielsen",
    url: "https://www.nielsen.com/d...",
    grade: 1,
    information: "text",
    messages: [
      {
        id: "question-003",
        message:
          "How does Euromonitor's research address the impact of emerging technologies on product innovation within the laundry care and household cleaners market?",
        response: "",
        status: "asking",
      },
    ],
  },
  {
    id: "def1003",
    name: "IKW",
    url: "https://www.ikw.org/hausha...",
    grade: 1,
    information: "text",
    messages: [],
  },
  {
    id: "def1004",
    name: "TechSci Research",
    url: "https://www.techsciresearc...",
    grade: 1,
    information: "text",
    messages: [],
  },
  {
    id: "def1005",
    name: "Wiener Zeitung",
    url: "https://www.wienerzeitung...",
    grade: 1,
    information: "text",
    messages: [],
  },
  {
    id: "def1006",
    name: "Digitalmag",
    url: "http://www.digitalmag.net/",
    grade: 1,
    information: "text",
    messages: [],
  },
];
