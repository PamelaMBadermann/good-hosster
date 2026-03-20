export interface Section {
  id: number;
  name: string;
  setOfTables: Array<{
    id: number;
    pax: number;
    direction: string;
    status: string;
    order: number;
  }>;
}