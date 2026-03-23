import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';

import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


import { TableComponent } from '../table/table.component';
import { DataService } from '../../services/data.service';
import { Section } from '../../shared/models/section.model';
import { Table } from '../../shared/models/table.model';

@Component({
  selector: 'app-floor-plan',
  imports: [
    DragDropModule,
    TableComponent
  ],
  templateUrl: './floor-plan.component.html',
  styleUrl: './floor-plan.component.css'
})
export class FloorPlanComponent {
  private dataService = inject(DataService);
  
  sections = this.dataService.sections;
  filteredSection = signal<Section[]>([]);
  tables = signal<Table[]>([]);
  
  @Input() filter!: string;

  ngOnChanges() {
    this.applyFilter();
  }

  applyFilter() {
    if (!this.filter) {
      this.filteredSection.set([]);
      return;
    }

    this.filteredSection.set(this.sections().filter(
      section => section.name === this.filter
    ));

    this.tables.set(this.filteredSection()[0].setOfTables);
  }

  drop(event: CdkDragDrop<Table[]>) {
    const updatedTables = [...event.container.data];

    moveItemInArray(
      updatedTables,
      event.previousIndex,
      event.currentIndex
    );

    this.tables.set(updatedTables);

    const currentSections = [...this.sections()];

    const sectionIndex = currentSections.findIndex(
      s => s.name === this.filter
    );

    if (sectionIndex !== -1) {
      currentSections[sectionIndex] = {
        ...currentSections[sectionIndex],
        setOfTables: updatedTables
      };

      this.dataService.updateSections(currentSections);
    }
  }
}
