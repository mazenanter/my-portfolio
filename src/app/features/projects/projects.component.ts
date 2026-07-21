import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
    name: "API Gateway & Integration Engine",
    image: "api.jpg",
    techStack: ["ASP.NET Core", "Clean Architecture", "JWT", "IP Whitelisting", "API Key Management","SQL Server"],
    challenge: "Build a secure, production-grade API layer for a live commercial platform handling digital goods and gaming services with multi-provider order routing, automated pricing, and reliable external provider integrations.",
    action: "Architected a complete API Gateway featuring API Key Management, IP Whitelisting, and a Role-Based Admin Dashboard. Engineered an Intelligent Order Routing System that automatically routes requests to local or third-party providers while applying dynamic pricing and automated profit calculation.",
    result: "Delivered a live production system at api.shop2change.com with secure API access, automated profit management, developer-friendly Swagger documentation, and centralized real-time administration.",
    githubUrl: "",
    liveUrl: "https://api.shop2change.com"
  },
    {
    name: "FinMind – ERP & Accounting System",
    image: "erp.png",
    techStack: ["ASP.NET Core", "Clean Architecture", "JWT", "CQRS", "DDD","MediatR","SQL Server","Docker","GitHub Actions","xUnit"],
    challenge: "Build an enterprise-grade ERP and accounting backend where complex financial rules, inventory valuation, and transactional consistency are enforced by the domain model instead of application services.",
    action: "Architected the system using Clean Architecture, CQRS, and Domain-Driven Design, implementing a double-entry accounting engine, Weighted Average Cost (WAC) inventory valuation, JWT authentication, comprehensive unit testing, Docker containerization, and an automated CI/CD pipeline.",
    result: "Delivered a production-ready ERP backend with fully auditable financial workflows, automated accounting entries, high test coverage, containerized deployment, and a complete GitHub Actions pipeline from build to production.",
    githubUrl: "https://github.com/FinMind",
    liveUrl: "http://finmind.runasp.net"
  },
  {
    name: "SpaceZ — Co-Working Space Management",
    image: "spacez.png",
    techStack: ["ASP.NET Core", "Clean Architecture", "CQRS", "MediatR", "Stripe", "JWT", "EF Core", "SQL Server"],
    challenge: "Build a scalable booking platform that handles concurrent reservations without conflicts and integrates real payment processing.",
    action: "Architected with Clean Architecture and CQRS, implemented Stripe payment gateway with webhooks, built a Concurrency Control mechanism for double-booking prevention, and optimized EF Core queries with strategic indexing.",
    result: "Achieved 35% reduction in response times, 100% conflict resolution in high-traffic scenarios, and delivered a live system with 10+ normalized entities.",
    githubUrl: "https://github.com/MazenAnter/SpaceZ",
    liveUrl: "http://spacez.runasp.net"
  },
  {
    name: "eShop — Full E-Commerce Backend",
    image: "eshop.jpg",
    techStack: [".NET 9", "ASP.NET Core Identity", "JWT", "EF Core", "SQL Server", "OTP", "Pagination"],
    challenge: "Build a complete e-commerce backend with secure authentication, high-performance data handling, and a trustworthy review system.",
    action: "Engineered JWT + Refresh Tokens with OTP verification, built full order lifecycle management with Database Transactions, implemented Pagination and Filtering, and restricted reviews to verified purchasers only.",
    result: "Delivered a production-ready e-commerce API with clean architecture, secure auth flows, and high-performance query handling for large datasets.",
    githubUrl: "https://github.com/MazenAnter/eShop",
    liveUrl: "http://zen.runasp.net"
  }
  ];
}

interface Project {
  name: string;
  image: string;
  techStack: string[];
  challenge: string;
  action: string;
  result: string;
  githubUrl: string;
  liveUrl?: string;
}
