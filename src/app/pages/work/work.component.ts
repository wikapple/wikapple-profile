import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Work } from '../../_models/work';

@Component({
  selector: 'app-work',
  imports: [
    CommonModule, 
    MatCardModule, 
    MatChipsModule
  ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
workHistory : Work[] = [
    {
      title: 'Police Officer',
      company: 'New Albany Police Department',
      duration: '2015 – 2022',
      description: `Protect and serve the city of New Albany.`,
      technologies: ['Tactical Response Team', 'Field Training Officer', 'Honor Guard', 'Digitcal Forensics Assitant', 'Crime Scene Investigations Assistant']
    },
    {
      title: 'Correctional Officer',
      company: 'Floyd County Sheriff\'s Department',
      duration: '2013 – 2015',
      description: `Maintain the safety and security of the Floyd County Jail.`,
      technologies: ['Corrections Emergency Response Team', 'Field Training Officer']
    },
    {
      title: 'Soldier (Reserve)',
      company: 'Indiana Army National Guard',
      duration: '2009 - 2015',
      description: `Specialist in the Indiana Army National Guard`,
      technologies: ['Infantry', 'Leadership Development and Assessment Course']
    }
  ];

}
