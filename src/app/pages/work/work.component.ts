import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Work } from '../../_models/work';

@Component({
  selector: 'app-work',
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  workHistory: Work[] = [
    {
      jobRoles: [
        {
          title: 'Software Development Engineer II',
          duration: '2025 - Present',
        },
        { title: 'Software Development Engineer', duration: '2024 - 2025' },
        { title: 'ISM Intern/Co-op', duration: '2023 - 2024' },
      ],
      company: 'UPS',
      duration: '2023 - Present',
      bullets: [
        `Develop and maintain enterprise-level web applications as part of the Aircraft Load Planning product team using Angular, .NET, and SQL Server.`,
        'Support infrastructure changes using Azure DevOps, Jenkins, and OpenShift.',
        'Integrated Zello real-time voice communication to automate channel setup for aircraft tasks, enabling centralized coordination across airport locations.',
        'Co-led a proof-of-concept project using Gurobi Machine Learning to automate aircraft load planning and improve fuel efficiency.',
        'Led vendor software upgrades to deploy the latest Zello versions across all workstations and devices.',
        'Won the 2023 UPS Hackathon for a cross-platform mobile app using Flutter and Azure Custom Vision; presented project to the CEO.',
        'Built and deployed a lightweight .NET MAUI mobile application used by aircraft ramp teams on Android devices.',
      ],
      skills: [
        'Angular',
        'C#',
        '.NET',
        'SQL Server',
        'Azure Devops',
        'OpenShift',
        'SAFe (Scaled Agile Framework)',
      ],
    },
    {
      jobRoles: [{ title: 'Police Officer', duration: '2015 - 2022' }],
      company: 'New Albany Police Department',
      duration: '2015 - 2022',
      bullets: [
        'Responded to calls for service. Investigated crimes and traffic accidents.',
        `Assigned to criminal investigations division; mentored by digital forensics expert, which sparked a deep interest in technology and ultimately led to a career transition into software engineering.`,
        'Served on Tactical Response Team, trained for high-risk scenarios requiring rapid coordination, precision, and clear communication. Conducted search warrants and responded to incidents.',
      ],
      skills: [
        'Tactical Response Team',
        'Field Training Officer',
        'Honor Guard',
        'Digitcal Forensics Assitant',
        'Crime Scene Investigations Assistant',
      ],
    },
    {
      jobRoles: [{ title: 'Correctional Officer', duration: '2013 - 2015' }],
      company: "Floyd County Sheriff's Department",
      duration: '2013 - 2015',
      bullets: [
        `Maintained facility security and managed critical incidents with professionalism.`,
        'Selected for the Corrections Emergency Response Team; trained in rapid deployment, cell extraction, and high risk court security.',
      ],
      skills: ['Corrections Emergency Response Team', 'Field Training Officer'],
    },
    {
      jobRoles: [{ title: 'Specialist (Infantry)', duration: '2009 - 2015' }],
      company: 'Indiana Army National Guard',
      duration: '2009 - 2015',
      bullets: [
        `Specialist in the Indiana Army National Guard`,
        'Military service with emphasis on teamwork, leadership, and mission readiness in high-pressure environments.',
      ],
      skills: ['Infantry', 'Leadership Development and Assessment Course'],
    },
  ];
}
