import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Education } from '../../_models/education';

@Component({
  selector: 'app-education',
  imports: [
    CommonModule, 
    MatCardModule, 
    MatChipsModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {


  educationHistory : Education[] = [
    {
      degree: 'B.S. in Business Informatics',
      institution: 'Indiana University Southeast',
      duration: '2020 – 2024',
      summary: `Dual-focused program with a blend of software development and business knowledge.`,
      highlights: ['Data Structures & Algorithims', 'Database Systems', 'Mobile Development', 'Web Development', 'Data Science', 'System Design', 'Project Management']
    },
    {
      degree: 'Political Science',
      institution: 'Indiana University Southeast',
      duration: '2009 - 2020',
      summary: `Study of Government and modern political theory. Focus on American Government and Internationl Political Economy.`,
      highlights: ['International Poltical Economy', 'American Government', 'Constitutional Rights & Civil Liberties']
    }
  ];
}
