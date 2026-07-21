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
        {name:"ASP.NET MVC"},
        {name:"Entity Framework Core"},
        {name:"LINQ"}
      ]
    },
    {
      name:"Database",
      icon:"fa-solid fa-database",
      skills:[
        {name:"SQL Server"},
        {name:"Database Design"},
        {name:"Query Optimization"},
        {name:"Indexing"},
   {name:"Database Transactions"},

      ],
    },
    {
      name:"Architecture Patterns & Design",
      icon:"fa-solid fa-diagram-project",
      skills:[
        {name:"Clean Architecture"},
        {name:"CQRS (MediatR)"},
        {name:"Domain Driven Design (DDD)"},
        {name:"Repository Pattern"},
        {name:"Unit Of Work"},
        {name:"Dependency Injection"}
      ]
    },
    {
      name:"Security",
      icon:"fa-solid fa-shield-halved",
      skills:
      [
        {name:"JWT Authentication"},
        {name:"ASP.NET Core Identity"},
        {name:"Role-Based Access Control (RBAC)"},
        {name:"IP Whitelisting"},
        {name:"API Key Management"},
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
  name:"Testing",
  icon:"fa-solid fa-vial",
  skills:[
      {name:"xUnit"},
      {name:"Moq"},
      {name:"FluentAssertions"},
      {name:"Unit Testing"},
      {name:"AAA Pattern"},
  ]
},
    {
      name:"DevOps & Version Control",
      icon:"fa-solid fa-code-branch",
      skills:
      [
   {name:"Git"},
      {name:"GitHub"},
      {name:"GitHub Actions"},
      {name:"Docker"},
      {name:"Docker Compose"},
      {name:"CI/CD"},
      {name:"Swagger / OpenAPI"},
      ]
    },
    {name:"API Development",
     icon:"fa-solid fa-desktop",
     skills:[
      {name:"REST APIs"},
      {name:"Third-Party API Integrations"},
      {name:"Webhooks"},
      {name:"IHttpClientFactory"},
  
     ]},
    {name:"Frontend",
     icon:"fa-solid fa-desktop",
     skills:[
      {name:"HTML"},
      {name:"CSS"},
      {name:"JavaScript"},
      {name:"Angular"},
      {name:"TypeScript"},
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