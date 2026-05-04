import { Component, inject, Input, signal } from '@angular/core';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
  }

  drop(event: CdkDragDrop<Table[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.dataService.updateSections([...this.sections()]);
  }
}