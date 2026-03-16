import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

import { DragDropModule } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    DragDropModule
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'good-hosster';
  selectedValue!: string;
  options = [
    {value: 'Trattoria 1', viewValue: 'Trattoria 1'},
    {value: 'Trattoria 2', viewValue: 'Trattoria 2'},
    {value: 'Trattoria 3', viewValue: 'Trattoria 3'},
    {value: 'Pergolado', viewValue: 'Pergolado'},
    {value: 'Santinha', viewValue: 'Santinha'},
  ];
}
