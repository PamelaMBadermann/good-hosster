import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import floorPlanPattern from '../../shared/assets/floor-plan-pattern.json';
import { Section } from '../../shared/models/section.model';


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
selectedValue!: Section;
  sections = signal(floorPlanPattern.floorPlanPattern);
}
