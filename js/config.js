/**
 * ══════════════════════════════════════════
 *  PORTFOLIO CONFIG — edit everything here
 * ══════════════════════════════════════════
 */
const C = {

  /* ── Personal ───────────────────────── */
  name: "João Pedro Serra",

  /*  bio suporta string simples OU objeto { pt, en } para bilinguismo */
  bio: {
    pt: `Desenvolvedor Fullstack com 2 anos de experiência, atuando em projetos SaaS, microsserviços e e-commerces em geral.`,
    en: `Fullstack Developer with 2 years of experience working on SaaS projects, microservices, and e-commerce platforms.`,
  },

  /* ── Links ──────────────────────────── */
  github:   "https://github.com/JoaoPedroSerra",
  linkedin: "https://www.linkedin.com/in/joaopedroserra/",
  email:    "joaopedroserra.o@hotmail.com",

  /** Link direto para o PDF do currículo. */
  resume: "curriculo_joao_pedro_serra.pdf",

  /* ── GitHub username (for commits widget) */
  githubUser: "JoaoPedroSerra",

  /* ── Skills ─────────────────────────── */
  skills: [
    { name:"Python",     icon:"python",     dv:"original" },
    { name:"Django",     icon:"django",     dv:"plain"    },
    { name:"React",      icon:"react",      dv:"original" },
    { name:"JavaScript", icon:"javascript", dv:"original" },
    { name:"MySQL",      icon:"mysql",      dv:"original" },
    { name:"PostgreSQL", icon:"postgresql", dv:"original" },
    { name:"Docker",     icon:"docker",     dv:"original" },
    { name:"Git",        icon:"git",        dv:"original" },
    { name:"HTML5",      icon:"html5",      dv:"original" },
    { name:"CSS3",       icon:"css3",       dv:"original" },
    { name:"Linux",      icon:"linux",      dv:"original" },
    { name:"Node",       icon:"nodejs",     dv:"original" },
  ],

  /* ── Projects ───────────────────────── */
  /*
   * Cada projeto aceita dois campos de descrição:
   *   termDesc  → texto exibido DENTRO do terminal (bloco superior do card)
   *   desc      → texto exibido na área INFO abaixo do terminal
   *
   * Ambos suportam string simples OU { pt: "...", en: "..." }.
   * Se termDesc for omitido, usa desc como fallback nos dois lugares.
   */
  projects: [
    {
      user:"JoaoPedroSerra", repo:"EcommerceAPIWebsite",
      title:"E-commerce API",
      termDesc: {
        pt: `API REST de e-commerce construída com Django REST Framework`,
        en: `RESTful API for e-commerce built with Django REST Framework`,
      },
      desc: {
        pt: "O sistema cobre o ciclo completo de compra: catálogo de produtos com categorias hierárquicas, carrinho por usuário, criação de pedidos com transação atômica e notificações assíncronas por e-mail",
        en: "The system covers the complete purchase cycle: product catalog with hierarchical categories, user-specific shopping cart, atomic order creation and asynchronous email notifications",
      },
      tags:["Python","Django","PostgreSQL","JWT","Redis"],
      contributors:1,
      github:"https://github.com/JoaoPedroSerra/EcommerceAPIWebsite",
      demo:null,
      image:null,
      featured:true,
    },

    {
      user:"JoaoPedroSerra", repo:"Encurtador-de-URL",
      title:"Encurtador de URL",
      termDesc: {
        pt: `Encurtador de URLs construído com FastAPI`,
        en: `URL shortener built with FastAPI`,
      },
      desc: {
        pt: "Gera códigos base62 únicos, registra cada acesso com IP e User-Agent, aplica expiração por data e rate limiting por IP diretamente no banco, sem dependências externas como Redis.",
        en: "Generates unique base62 codes, logs each access with IP and User-Agent, applies expiration by date and rate limiting by IP directly in the database, without external dependencies like Redis.",
      },  
      tags:["React","FastAPI","PostgreSQL","Alembic"],
      contributors:1,
      github:"https://github.com/JoaoPedroSerra/Encurtador-de-URL",
      demo:null,
      image:null,
      featured:true,
    },

    {
      user:"JoaoPedroSerra", repo:"Notification-System",
      title:"Notification System",
      termDesc: {
        pt: `API REST para envio assíncrono de emails transacionais.`,
        en: `REST API for asynchronous sending of transactional emails.`,
      },
      desc: {
        pt: "O sistema persiste cada notificação no banco, despacha o envio em background sem bloquear a resposta HTTP e reprocessa automaticamente falhas via scheduler.",
        en: "The system persists each notification in the database, dispatches the sending in the background without blocking the HTTP response, and automatically retries failed deliveries via a scheduler.",
      },
      tags:["FastAPI","PostgreSQL","APScheduler","SQLAlchemy2"],
      contributors:1,
      github:"https://github.com/JoaoPedroSerra/Notification-System",
      demo:null, image:null, featured:false,
    },

    {
      user:"JoaoPedroSerra", repo:"APIO2AUTH",
      title:"FastAPI Auth System",
      termDesc: {
        pt: `API de autenticação completa construída com FastAPI.`,
        en: `Complete authentication API built with FastAPI.`,
      },
      desc: {
        pt: "Implementa registro e login com e-mail e senha, login social via Google OAuth2, autorização baseada em roles (RBAC) e gerenciamento seguro de sessões com JWT.",
        en: "Implements registration and login with email and password, social login via Google OAuth2, role-based authorization (RBAC), and secure session management with JWT.",
      },
      tags:["FastAPI","PostgreSQL","JWT", "OAuth2", "RBAC"],
      contributors:1,
      github:"https://github.com/JoaoPedroSerra/APIO2AUTH",
      demo:null, image:null, featured:false,
    },

    {
      user:"JoaoPedroSerra", repo:"APITestes-CI-CD",
      title:"Task Manager API",
      termDesc: {
        pt: `API REST de gerenciamento de tarefas construída com FastAPI e SQLAlchemy.`,
        en: `REST API for task management built with FastAPI and SQLAlchemy.`,
      },
      desc: {
        pt: "O objetivo principal do projeto é demonstrar testes automatizados com pytest e um pipeline de CI/CD completo no GitHub Actions — habilidades que separam projetos de portfólio amadores de profissionais.",
        en: "The main goal of the project is to demonstrate automated testing with pytest and a complete CI/CD pipeline on GitHub Actions — skills that separate amateur portfolio projects from professional ones.",
      },
      tags:["Python","PostgreSQL","Pytest","GitHubActions"],
      contributors:1,
      github:"https://github.com/JoaoPedroSerra/APITestes-CI-CD",
      demo:null, image:null, featured:false,
    },

    {
      user:"JoaoPedroSerra", repo:"Bot-Telegram-Consulta",
      title:"Telegram Bot de Atendimento",
      termDesc: {
        pt: `Bot de suporte ao cliente para Telegram, construído com FastAPI e PostgreSQL. `,
        en: `Customer support bot for Telegram, built with FastAPI and PostgreSQL.`,
      },
      desc: {
        pt: "Permite que usuários abram chamados de suporte, enviem avaliações e consultem o histórico de conversas, tudo dentro do próprio Telegram. Demonstra: integração com webhook de API externa, máquina de estados persistida em banco, autenticação segura de endpoint e deploy em nuvem com PostgreSQL.",
        en: "Allows users to open support tickets, submit ratings, and view conversation history, all within Telegram. Demonstrates: integration with external API webhook, database-persisted state machine, secure endpoint authentication, and cloud deployment with PostgreSQL.",
      },
      tags:["Python","PostgreSQL","FastAPI", "SQLAlchemy2"],
      contributors:1,
      github:"https://github.com/JoaoPedroSerra/Bot-Telegram-Consulta",
      demo:null, image:null, featured:false,
    },
    
    {
      user:"JoaoPedroSerra", repo:"CSV-Processor-API",
      title:"CSV Processor API",
      termDesc: {
        pt: `API REST para upload e processamento assíncrono de arquivos CSV e Excel.`,
        en: `REST API for asynchronous upload and processing of CSV and Excel files.`,
      },
      desc: {
        pt: "Cada arquivo enviado gera um job rastreável com ciclo de vida completo (pending → processing → done/failed), estatísticas automáticas e notificação via webhook.",
        en: "Each uploaded file generates a trackable job with a complete lifecycle (pending → processing → done/failed), automatic statistics, and webhook notifications.",
      },
      tags:["Python","PostgreSQL","FastAPI", "SQLAlchemy"],
      contributors:1,
      github:"https://github.com/JoaoPedroSerra/API-com-Upload-e-Processamento-de-arquivos",
      demo:null, image:null, featured:false,
    },
    
    {
      user:"JoaoPedroSerra", repo:"Blog-API-Django",
      title:"Blog API",
      termDesc: {
        pt: `API RESTful de blog construída com Django e Django REST Framework.`,
        en: `RESTful blog API built with Django and Django REST Framework.`,
      },
      desc: {
        pt: "Gerencia posts, categorias, tags e comentários com autenticação JWT, controle de acesso por autor e documentação interativa via Swagger.",
        en: "Manages blog posts, categories, tags, and comments with JWT authentication, author-based access control, and interactive documentation via Swagger.",
      },
      tags:["Python","Django","Django REST"],
      contributors:1,
      github:"https://github.com/JoaoPedroSerra/Blog-API-Django",
      demo:null, image:null, featured:false,
    },
  ],

  /* ══════════════════════════════════════
     ABOUT PAGE CONFIG
  ══════════════════════════════════════ */
  about: {

    title: { pt: "Desenvolvedor Fullstack", en: "Fullstack Developer" },

    scheduleUrl: "joaopedroserra.o@hotmail.com",

    intro: {
      pt: `Sou desenvolvedor Full Stack com foco em back-end Python — Django e FastAPI. 
           Construo APIs REST, sistemas de autenticação, automações assíncronas com Celery e pipelines de CI/CD.
           No front-end trabalho com React, Next.js e TypeScript, entregando interfaces integradas às APIs que desenvolvo. 
           Tenho experiência com containerização Docker, bancos de dados relacionais e não-relacionais.`,
      en: `I'm a Full Stack developer with a focus on Python back-end — Django and FastAPI.
          I build REST APIs, authentication systems, asynchronous automations with Celery, and CI/CD pipelines.
          On the front-end, I work with React, Next.js, and TypeScript, delivering interfaces integrated with the APIs I develop.
          I have experience with Docker containerization, relational and non-relational databases.`,
    },

    currentRole: {
      company:    "Freelancer",
      companyUrl: "#",
      role: {
        pt: "Desenvolvedor Full Stack",
        en: " Fullstack Developer",
      },
      period: { pt: "Ago 2024 - Presente", en: "Aug 2024 - Present" },
      bullets: {
        pt: [
          "Desenvolveu APIs REST em Python (Django DRF e FastAPI) — e-commerce com transação atômica, autenticação JWT/Google OAuth2 com RBAC, processador assíncrono de CSV/Excel e bot de suporte no Telegram — todos containerizados com Docker.",
          "Implementou pipeline CI/CD no GitHub Actions com lint, testes em matriz Python, smoke test e deploy automático, reduzindo tempo de entrega em 50%.",
          "Manteve cobertura de testes ≥ 80% com pytest em todos os projetos, com relatórios integrados ao Codecov e testes isolados em SQLite em memória.",
          "Entregou 8+ projetos web para clientes (SaaS, microsserviços, landing pages e e-commerces) com 100% de entregas no prazo; dashboards com Oauth2/JWT.",
          "Estruturou componentes reutilizáveis em React e React Native, reduzindo retrabalho e acelerando entregas de novas funcionalidades.",
          "Projetou e desenvolveu APIs REST com Node.js/Express para o módulo de notificações, garantindo comunicação segura e escalável.",
        ],
        en: [
          "Developed REST APIs in Python (Django DRF and FastAPI) — e-commerce with atomic transactions, JWT/Google OAuth2 authentication with RBAC, asynchronous CSV/Excel processor, and Telegram support bot — all containerized with Docker.",
          "Implemented CI/CD pipeline on GitHub Actions with linting, Python matrix testing, smoke test, and automatic deployment, reducing delivery time by 50%.",
          "Maintained test coverage ≥ 80% with pytest across all projects, with reports integrated into Codecov and isolated tests using in-memory SQLite.",
          "Delivered 8+ web projects for clients (SaaS, microservices, landing pages, and e-commerce) with 100% on-time delivery; dashboards with Oauth2/JWT.",
          "Structured reusable components in React and React Native, reducing rework and accelerating new feature deliveries.",
          "Designed and developed REST APIs with Node.js/Express for the notifications module, ensuring secure and scalable communication.",
        ],
      },
    },

    experience: [
      {
        company:    "Tauge",
        companyUrl: "#",
        role: {
          pt: "Estagiário de Infraestrutura",
          en: "Estágio em Infraestrutura",
        },
        period: "Jan 2024 - Jun 2024",
        bullets: {
          pt: [
             "Monitorou infraestrutura de clientes com Zabbix, criando dashboards e alertas que reduziram o tempo médio de resposta a incidentes.",
             "Desenvolveu scripts Python e Bash para automação de tarefas operacionais e integração com plataformas de nuvem, eliminando processos manuais repetitivos.",
          ],
          en: [
            "Monitored client infrastructure with Zabbix, creating dashboards and alerts that reduced average incident response time.",
            "Developed Python and Bash scripts for automating operational tasks and integrating with cloud platforms, eliminating repetitive manual processes.",
          ],
        },
      },

      {
        company:    "DD Solutions",
        companyUrl: "#",
        role: {
          pt: "Desenvolvedor Full Stack Estágio",
          en: "Full Stack Developer Intern",
        },
        period: "Fev 2023 - Ago 2023",
        bullets: {
          pt: [
             "Desenvolveu sistema de visão computacional com YOLOv8 (Python) para identificação automática de pontos de descarte irregular de lixo urbano.",
             "Construiu e manteve aplicações web com React.js, Next.js e Node.js, reduzindo em 30% o tempo médio de carregamento.",
             "Aplicou SOLID e Clean Code em code reviews, contribuindo para a redução de bugs em produção.",
          ],
          en: [
            "Developed a computer vision system with YOLOv8 (Python) for automatic identification of illegal urban waste disposal points.",
            "Built and maintained web applications with React.js, Next.js, and Node.js, reducing average load time by 30%.",
            "Applied SOLID principles and Clean Code practices in code reviews, contributing to a reduction in production bugs.",
          ],
        },
      },
    ],

    education: [
      {
        institution: "Unifor",
        course: {
          pt: [
            "Ciências da Computação",
            "Estruturas de dados e grafos, arquitetura de computadores, POO, algoritmos e resolução de problemas de natureza discreta.",
            "Inteligência Artificial, computação distribuída, banco de dados, desenvolvimento de plataformas web e gerenciamento de projetos.",
            "Modelagem matemática, álgebra e geometria computacional, métodos quantitativos em computação.",
          ],
          en: [
            "Computer Science",
            "Data structures & graphs, computer architecture, OOP, algorithms and discrete problem-solving.",
            "Artificial Intelligence, distributed computing, databases, web platform development and project management.",
            "Mathematical modelling, algebra & computational geometry, quantitative methods in computing.",
          ],
        },
        period: "Jan 2019 - Dez 2024",
      },
    ],

    expertise: {
      pt: {
        "Linguagens e Tecnologias": ["Python", "JavaScript", "TypeScript"],
        "Back-end":  ["Django", "FastAPI", "Node.js", "Express", "NestJS"],
        "Front-end":    ["React", "Next.js", "TailwindCSS"],
        "Banco de dados":     ["PostgreSQL", "Redis", "SQLite"],
        "DevOps & CI/CD":       ["Docker", "Docker Compose", "Vercel", "Netlify", "Railway"],
        "Testes":       ["pytest", "pytest-cov", "Jest"],
        "IA & Dados":       ["YOLO", "Pandas", "Parquet", "OpenCV"],
        "Monitoramento":       ["Zabbix", "cloud infrastructure", "Linux", "Prettier"],
        "Integrações":       ["Google OAuth2", "Celery", "APScheduler", "Swagger/OpenAPI"],
      },
      en: {
        "Languages & Technologies": ["Python", "JavaScript", "TypeScript", "SQL"],
        "Back-end":  ["Django", "FastAPI", "Node.js", "Express", "NestJS"],
        "Front-end":    ["React", "Next.js", "TailwindCSS"],
        "Databases":     ["PostgreSQL", "Redis", "SQLite"],
        "DevOps & CI/CD":       ["Docker", "Docker Compose", "Vercel", "Netlify", "Railway"],
        "Testing":       ["pytest", "pytest-cov", "Jest"],
        "AI & Data":       ["YOLO", "Pandas", "Parquet", "OpenCV"],
        "Monitoring":       ["Zabbix", "cloud infrastructure", "Linux", "Prettier"],
        "Integrations":       ["Google OAuth2", "Celery", "APScheduler", "Swagger/OpenAPI"],
      },
    },

  }, /* end: about */

};
