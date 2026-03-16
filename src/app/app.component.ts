import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderComponent } from "./components/header/header.component";

import { FloorPlanComponent } from './components/floor-plan/floor-plan.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DragDropModule,
    HeaderComponent,
    FloorPlanComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'good-hosster';
}
