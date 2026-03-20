import { Injectable, signal } from '@angular/core';

import { Section } from '../shared/models/section.model';

import sections from '../shared/assets/floor-plan-pattern.json';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    private sectionsSignal = signal<Array<Section>>(sections.floorPlanPattern);
    private selectedSectionSignal = signal<Section | null>(null);

    sections = this.sectionsSignal.asReadonly();
    selectedSection = this.selectedSectionSignal.asReadonly();
}