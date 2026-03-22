import { Table } from "./table.model";

export interface Section {
  id: number;
  name: string;
  setOfTables: Array<Table>;
}