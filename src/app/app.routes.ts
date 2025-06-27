import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WorkComponent } from './pages/work/work.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactComponent } from './pages/contact/contact.component';

/*
About
Projects
Work
Education
Contact
*/

export const routes: Routes = [
    {path: '', component: HeroComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'work', component: WorkComponent},
    {path: 'education', component: EducationComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: HeroComponent, pathMatch: 'full'}
];
