import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Section } from '../shared/models/section.model';
import sections from '../assets/floor-plan-pattern.json';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private STORAGE_KEY = "floor-plan";
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private sectionsSignal = signal<Array<Section>>(this.loadInitialData());

  sections = this.sectionsSignal.asReadonly();

  constructor() {
    if (this.isBrowser) {
      this.persistSections();
    }
  }

  private loadInitialData(): Array<Section> {
    if (this.isBrowser) {
      const stored = localStorage.getItem(this.STORAGE_KEY);

      if (stored) {
        console.log("Dados carregados no localStorage.");
        return JSON.parse(stored);
      }

      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(sections.floorPlanPattern)
      );
    }

    console.log("Usando JSON inicial.")
    return sections.floorPlanPattern;
  }

  private persistSections() {
    effect(() => {
      const current = this.sectionsSignal();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(current));
    });
  }

  updateSections(newSections: Array<Section>) {
    this.sectionsSignal.set(newSections);
  }
}