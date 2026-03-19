import { Component } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { TableComponent } from '../table/table.component';


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

}
