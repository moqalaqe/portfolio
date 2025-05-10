import { Component } from '@angular/core';
import { HeaderComponent } from './partials/header/header.component';
import { AboutMeComponent } from './partials/about-me/about-me.component';
import { ProjectsComponent } from './partials/projects/projects.component';
import { EducationComponent } from './partials/education/education.component';
import { ExperienceComponent } from './partials/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, EducationComponent, ProjectsComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
