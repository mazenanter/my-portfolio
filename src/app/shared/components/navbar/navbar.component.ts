import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    const sections = document.querySelectorAll('section[id]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.activeSection = entry.target.id;
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => observer.observe(section));
  }
  isScrolled : boolean = false;
  isMenuOpen : boolean = false;
  activeSection : string = "home";

  changeActiveSection(sectionId: string) {
    this.activeSection = sectionId;
      document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' });

  }
navLinks = [
  {id:"home",name:"HOME",href:"#home"},
  {id:"about",name:"ABOUT",href:"#about"},
  {id:"skills",name:"SKILLS",href:"#skills"},
  {id:"experience",name:"EXPERIENCE",href:"#experience"},
  {id:"projects",name:"PROJECTS",href:"#projects"},
  {id:"contact",name:"CONTACT",href:"#contact"}
]   ;

  @HostListener('window:scroll')
  onWindowScroll() 
  {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu(){
    this.isMenuOpen = false;
  }
}
