import { Section } from "./section.model";

export interface FloorPlan {
    id: number;
    name: string;
    sections: Array<Section>;
}