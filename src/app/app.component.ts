import { AfterViewInit, Component } from '@angular/core';
import { AboutComponent } from "./features/about/about.component";
import { ContactComponent } from "./features/contact/contact.component";
import { ExperienceComponent } from "./features/experience/experience.component";
import { HeroComponent } from "./features/hero/hero.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit  {
  ngAfterViewInit(): void {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
  }
  title = 'my-portfolio';
}
