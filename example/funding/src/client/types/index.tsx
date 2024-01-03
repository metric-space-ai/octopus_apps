export interface IKeywordsCollection {
  id: string;
  title: string;
  keywords: IKeyword[];
}

export interface IKeyword {
  keywordId: string;
  value: string;
}

export interface IFormulationResult {
  id: string;
  title: string;
  description: string;
  communicates: IFormulationResultCommunicate[];
}
export interface IFormulationResultCommunicate {
  id: string;
  message: string;
  response: string;
  status: "asking" | "answered";
}
