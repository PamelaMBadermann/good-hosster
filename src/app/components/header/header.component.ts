import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
selectedValue!: string;
  options = [
    {value: 'Trattoria 1', viewValue: 'Trattoria 1'},
    {value: 'Trattoria 2', viewValue: 'Trattoria 2'},
    {value: 'Trattoria 3', viewValue: 'Trattoria 3'},
    {value: 'Pergolado', viewValue: 'Pergolado'},
    {value: 'Santinha', viewValue: 'Santinha'},
  ];
}
