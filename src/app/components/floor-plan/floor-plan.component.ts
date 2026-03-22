import { Component, inject, Input, signal } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { TableComponent } from '../table/table.component';
import { DataService } from '../../services/data.service';
import { Section } from '../../shared/models/section.model';

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
  filteredSections = signal<Section[]>([]);
  
  @Input() filter!: string;

  ngOnChanges() {
    this.applyFilter();
  }

  applyFilter() {
    if (!this.filter) {
      this.filteredSections.set(this.sections());
      return;
    }

    this.filteredSections.set(this.sections().filter(
      section => section.name === this.filter
    ));
  }
}
