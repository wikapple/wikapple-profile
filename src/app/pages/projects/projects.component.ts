import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipListbox, MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { ProjectSummary } from '../../_models/project_summary';
@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatChipsModule,
    MatChipListbox
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: ProjectSummary[] = [
    {
      title: 'Forest Themed Portfolio Site',
      description: 'This very site. Built with Angular Material and a custom forest-inspired theme.',
      technologies: ['Angular', 'Angular Material', 'Responsive Design', 'Azure Cloud Functions', 'Azure Static Web Hosting'],
    },
    {
      title: 'Library Management System',
      description: 'A website used to check in and out books from the library. Integrated QR code scanning into the application for quick check in and check out processes. Automatically checks if member has any overdue books or late fees.',
      technologies: ['Node.js', 'MySql', 'Bootstrap CSS', 'Model View Control (MVC)'],
      githubUrl: 'https://github.com/wikapple/library-management-system',
      imgUrl: 'assets/LibraryManagementSystem.png'
    },
    {
      title: 'Mobile CAD System',
      description: 'A real-time computer aided dispatch (CAD) for first responders. Integrated a Flutter UI with a Firebase backend to provide real time data. For simulating an active CAD system, I added a .NET application running in docker that simulated generating calls for service and updating them throughout their lifecycle.',
      imgUrl: 'assets/MobileCAD.png',
      technologies: ['Flutter', 'Firebase', 'Firestore', 'No SQL', '.NET', 'Docker'],
    },
  ];
}
