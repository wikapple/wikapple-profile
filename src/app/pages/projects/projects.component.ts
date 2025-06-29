import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipListbox, MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { ProjectSummary } from '../../_models/project_summary';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../../shared/image-dialog/image-dialog.component';
@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatChipsModule,
    MatChipListbox,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  isMobile = false;
  constructor(private dialog: MatDialog) {}
  
  ngOnInit(): void {
      this.isMobile = window.innerWidth < 768;
  }

  openImage(imgUrl: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: { imgUrl },
      panelClass: 'custom-dialog',
      maxWidth: '90vw',
    });
  }

  projects: ProjectSummary[] = [
    {
      title: 'Portfolio Site',
      description:
        'This very site. Built with Angular Material and a custom theme.',
      githubRepositories: [
        {
          name: 'Angular UI',
          url: 'https://github.com/wikapple/library-management-system',
        },
        {
          name: '.NET Azure Function App',
          url: 'https://github.com/wikapple/ContactApi',
        },
      ],
      technologies: [
        'Angular',
        'Angular Material',
        'Azure Cloud Functions',
        'Azure Static Web Hosting',
      ],
      imgUrl: 'assets/ProfileScreenshot.png',
    },
    {
      title: 'Library Management System',
      description:
        'A website used to check in and out books from the library. Integrated QR code scanning into the application for quick check in and check out processes. Automatically checks if member has any overdue books or late fees.',
      technologies: [
        'Node.js',
        'MySql',
        'Bootstrap CSS',
        'jQuery',
        'Model View Control (MVC)',
      ],
      githubRepositories: [
        {
          name: 'Node.js MVC Appliation',
          url: 'https://github.com/wikapple/library-management-system',
        },
      ],
      imgUrl: 'assets/LibraryManagementSystem.png',
    },
    {
      title: 'Mobile CAD System',
      description:
        'A real-time computer aided dispatch (CAD) for first responders. Integrated a Flutter UI with a Firebase backend to provide real time data. For simulating an active CAD system, I added a .NET application running in docker that simulated generating calls for service and updating them throughout their lifecycle.',
      githubRepositories: [
        {
          name: 'Flutter Mobile CAD',
          url: 'https://github.com/wikapple/mobile_cad_ui',
        },
        {
          name: '.NET Dispatch Simulator',
          url: 'https://github.com/wikapple/ComputerAidedDispatch',
        },
      ],
      imgUrl: 'assets/MobileCAD.png',
      technologies: [
        'Flutter',
        'Firebase',
        'Firestore',
        '.NET',
        'Docker',
        'Google Cloud Plaform',
      ],
    },
  ];
}
