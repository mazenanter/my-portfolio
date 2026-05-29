import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name:"Core Concepts",
      icon:"fa-solid fa-brain",
      skills: 
      [
        { name: "Data Structures" },
        { name: "Algorithms" },
        { name: "OOP" },
        {name:"Solid Principles"},
        {name:"Design Patterns"},
      ]
    },
    {
      name:"Backend",
      icon:"fa-solid fa-server",
      skills:[
        {name:"C#"},
        {name:"ASP.NET Core Web API"},
        {name:"MVC"}
      ]
    },
    {
      name:"Database & ORM",
      icon:"fa-solid fa-database",
      skills:[
        {name:"SQL Server"},
        {name:"Entity Framework Core"},
        {name:"Linq"},
        {name:"Database Optimization & Indexing"},

      ],
    },
    {
      name:"Architecture Patterns & Performance",
      icon:"fa-solid fa-diagram-project",
      skills:[
        {name:"Clean Architecture"},
        {name:"CQRS (Mediator Pattern)"},
        {name:"Redis"},
        {name:"Serilog"},
        {name:"Rate Limiting"},
      ]
    },
    {
      name:"Security",
      icon:"fa-solid fa-shield-halved",
      skills:
      [
        {name:"JWT Authentication"},
        {name:"Role-Based Authorization"},
        {name:"IP Whitelisting"},
        {name:"Api Key Management"},
      ]
    },
    {
      name:"Tools & Backgound Services",
      icon:"fa-solid fa-tools",
      skills:
      [
        {name:"Background Tasks (Hangfire)"},
        {name:"Auto Mapper"},
        {name:"Fluent Validation"},
        {name:"Batch Processing"},
      ]
    },
    {
      name:"DevOps & Version Control",
      icon:"fa-solid fa-code-branch",
      skills:
      [
        {name:"Git"},
        {name:"Docker Basics"},
        {name:"Swagger/OpenAPI"},
        {name:"CI/CD Pipelines"},
      ]
    },
    {name:"Frontend",
     icon:"fa-solid fa-desktop",
     skills:[
      {name:"HTML"},
      {name:"CSS"},
      {name:"JavaScript"},
      {name:"Angular basics"},
      {name:"TypeScript basics"},
     ]}
  ];
}


interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}
interface Skill {
  name: string;
}