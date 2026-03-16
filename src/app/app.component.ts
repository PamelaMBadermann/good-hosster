import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderComponent } from "./components/header/header.component";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatCardModule,
    DragDropModule,
    HeaderComponent,
    HeaderComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'good-hosster';
}
