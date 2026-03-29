
export type StrapRole = "Daily" | "Elevated" | "Active";

export interface StrapOption {
  role: StrapRole;
  name: string;
  material: string;
  description: string;
  image: string;
  buyUrl: string;
}

export interface WatchKit {
  id: string;
  name: string;
  slug: string;
  descriptor: string;
  bestFor: string;
  intro: string;
  watchImage: string;
  watchBuyUrl: string;
  packTitle: string;
  packSummary: string;
  kitBuyUrl: string;
  straps: StrapOption[];
}