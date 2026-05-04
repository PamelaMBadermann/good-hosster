import { SectionDivisor } from "./section-divisor.model";

export interface Section {
  id: number;
  name: string;
  divisors: Array<SectionDivisor>;
}