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
      summary: `The study of how information is used and managed. It involved understanding how technology can be used to solve problems and improve lives.`,
      highlights: ['Human Computer Interaction', 'Operations Managment', 'Financial Management', 'Data Representation Organization (Java)', 'Database Systems (Oracle)', 'Mobile Application Development (Flutter)', 'Intro to Statistical Learning With R', 'Cloud Computing for Data Science (Python)', 'Web Design and Development (HTML,CSS,JavaScript,PHP)', 'System Design', 'Project Management']
    },
    {
      degree: 'Political Science',
      institution: 'Indiana University Southeast',
      duration: '2009 - 2020',
      summary: `Study of Government and modern political theory. Focus on United States Case Law and Internationl Political Economy.`,
      highlights: ['Constitutional Rights and Liberties','Policy Making in the U.S.','Contemporary Political Philosophy','Constitutional Law','International Political Economy','Analyzing Politics','United States Foreign Policy']
    }
  ];
}
