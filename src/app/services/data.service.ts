import { Injectable, signal } from '@angular/core';

import { Section } from '../shared/models/section.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private selectedSectionSignal = signal<Section | null>(null);

    selectedSection = this.selectedSectionSignal.asReadonly();

    selectSection(section: Section) {
        this.selectedSectionSignal.set(section);
    }
}