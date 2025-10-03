// Unified skills data: single source of truth for About and Skills
// Fields: title, category, status (proficient|learning), updatedYear

const skillsUnified = [
    // Newest and recent (from LinkedIn/experience)
    { title: "Kubernetes (K8s)", category: "Infra", status: "learning", updatedYear: 2025, description: "Deployments, services, Helm; exploring production GitOps workflows and observability." },
    { title: "Flux (GitOps)", category: "Infra", status: "learning", updatedYear: 2025, description: "Git-driven cluster state with Flux controllers; multi-env and multi-tenant repos." },
    { title: "Keycloak", category: "Platform", status: "proficient", updatedYear: 2025, description: "Customized themes, flows, plugins and events; user admin middleware across projects." },
    { title: "Pulumi", category: "Infra as Code", status: "proficient", updatedYear: 2025, description: "TypeScript IaC for AWS (S3, CF, Route53, ECS/EKS); stacks and CI pipelines." },
    { title: "Terraform", category: "Infra as Code", status: "proficient", updatedYear: 2024, description: "Modules, workspaces, remote state; AWS infra provisioning alongside Pulumi." },
    { title: "Datadog", category: "Observability", status: "proficient", updatedYear: 2024, description: "APM, logs, RUM dashboards for end-to-end tracing across UI and backend." },
    { title: "Angular", category: "Frontend", status: "proficient", updatedYear: 2025, description: "Angular 16–20, PrimeNG, Tailwind; component-driven UIs from Figma; Cypress E2E." },
    { title: "NestJS", category: "Backend", status: "proficient", updatedYear: 2025, description: "CQRS, microservices, BFFs with OpenAPI generators; monorepos with NX." },
    { title: "NX Monorepo", category: "Tooling", status: "proficient", updatedYear: 2024, description: "Workspace generators, affected builds, shared libs for fullstack projects." },
    { title: "TypeScript", category: "Language", status: "proficient", updatedYear: 2025, description: "Strict typing across front/back; DTOs, generics, utility types, ESLint setups." },
    { title: "LLM / AI Integrations", category: "AI", status: "learning", updatedYear: 2025, description: "OpenAI-style APIs for document processing, enrichment, and assistants." },
    { title: "AWS Textract", category: "AI", status: "proficient", updatedYear: 2024, description: "Document OCR/parse pipelines, post-processing and enrichment." },

    // Established
    { title: "Node.js", category: "Backend", status: "proficient", updatedYear: 2024, description: "APIs, workers, sockets; CSV/XLSX processing; tooling and automation." },
    { title: "MySQL / Aurora", category: "Database", status: "proficient", updatedYear: 2024, description: "Schema design, performance tuning, procedures, triggers, views; RDS ops." },
    { title: "PostgreSQL", category: "Database", status: "proficient", updatedYear: 2023, description: "Migrations, performance tuning; prior IBM Cloud → AWS RDS Aurora migrations." },
    { title: "AWS", category: "Cloud", status: "proficient", updatedYear: 2024, description: "EC2, ALB, ASG, S3, CloudFront, Route53, WAF; CI/CD pipelines; budgets." },
    { title: "Serverless (Lambda, API GW)", category: "Cloud", status: "proficient", updatedYear: 2024, description: "SES/SNS/SQS integrations; event-driven processing; secure API Gateway setups." },
    { title: "Amazon DynamoDB", category: "Database", status: "proficient", updatedYear: 2024, description: "KV/Document design, TTL, GSIs; streams for event-driven processing." },
    { title: "Amazon ElastiCache", category: "Cache", status: "proficient", updatedYear: 2023, description: "Redis for caching, locks, queues; sizing and eviction strategies." },
    { title: "React.js", category: "Frontend", status: "proficient", updatedYear: 2023, description: "SPA development, routing, forms; webpack/Vite; CRA legacy maintenance." },
    { title: "Vite", category: "Tooling", status: "proficient", updatedYear: 2024, description: "Lightning-fast dev/build for React/Angular/Electron integrations." },
    { title: "Ionic", category: "Mobile", status: "proficient", updatedYear: 2021, description: "Capacitor plugins, camera, biometric auth; push notifications via Firebase." },
    { title: "Electron", category: "Desktop", status: "proficient", updatedYear: 2021, description: "Packaged desktop apps (macOS/Windows), auto-update flows, installers." },
    { title: "PHP", category: "Backend", status: "proficient", updatedYear: 2021, pinned: true, description: "Legacy systems, REST APIs; composer; migrations; performance fixes." },
    { title: "jQuery", category: "Frontend", status: "proficient", updatedYear: 2018, description: "Legacy UI maintenance and gradual migration to vanilla/modern frameworks." },

    // Tooling
    { title: "GitHub Actions / GitLab CI", category: "CI/CD", status: "proficient", updatedYear: 2024, description: "Pipelines for build/test/deploy across environments; infra deploys." },
    { title: "Cypress", category: "Testing", status: "proficient", updatedYear: 2024, description: "E2E testing, fixtures, CI integration, component testing." },
    { title: "Webpack", category: "Tooling", status: "proficient", updatedYear: 2023, description: "Bundle config, code splitting, asset pipelines; CRA v3/4 maintenance." },
    { title: "SASS", category: "Styling", status: "proficient", updatedYear: 2023, description: "BEM-ish structure, mixins, variables; migration path to @use/@forward." },
    { title: "TailwindCSS", category: "Styling", status: "proficient", updatedYear: 2025, description: "Utility-first workflow, theming, responsive design; paired with Angular/React." },
    { title: "PrimeNG", category: "Frontend UI Library", status: "proficient", updatedYear: 2025, description: "Rich Angular UI components; theming and accessibility customization." },
    { title: "Shell scripting (bash/zsh)", category: "Tooling", status: "proficient", updatedYear: 2024, description: "Automation, release scripts, dev tooling, CI helpers." },
    { title: "Bootstrap", category: "Styling", status: "proficient", updatedYear: 2022, description: "Utility-first layouts, theming; migration to Tailwind where applicable." },
    { title: "HTML5/CSS3", category: "Styling", status: "proficient", updatedYear: 2024, description: "Accessible, responsive layouts; performance-minded CSS architecture." },
    { title: "AJAX", category: "Frontend", status: "proficient", updatedYear: 2021, description: "Async UI flows; graceful degradation and error handling." },
    { title: "SQL", category: "Database", status: "proficient", updatedYear: 2024, description: "Query tuning, indexes, EXPLAIN plans across MySQL/PostgreSQL." },
    { title: "Git", category: "Tooling", status: "proficient", updatedYear: 2024, description: "Trunk/flow strategies; PR hygiene; submodules and monorepos." },
    { title: "Jira", category: "Process", status: "proficient", updatedYear: 2023, description: "Backlog, boards, workflows and reporting for agile delivery." },
    { title: "API Development", category: "Backend", status: "proficient", updatedYear: 2024, description: "REST/JSON, OpenAPI-first, auth (JWT/OAuth), pagination, rate limiting." },
    { title: "OpenAPI / Swagger", category: "Backend", status: "proficient", updatedYear: 2024, description: "Spec-first design, code generation for BFFs and clients." },
    { title: "tRPC", category: "Backend", status: "learning", updatedYear: 2024, description: "Type-safe RPC exploration for newer BFF-style services." },
    { title: "Hedera Hashgraph", category: "Blockchain", status: "proficient", updatedYear: 2024, description: "Supply-chain data integrations and platform support." },
    { title: "Braze / Sendgrid / Liquid.js", category: "Messaging", status: "proficient", updatedYear: 2022, description: "Templates, campaigns, and developer tooling for CRM workflows." },
    { title: "Bun", category: "Runtime/Tooling", status: "proficient", updatedYear: 2024, description: "Node-compatible runtime, ultra-fast dev server, test runner, and bundler." },
    { title: "BuddyWorks", category: "CI/CD", status: "proficient", updatedYear: 2021, description: "Multi-step workflows for web, APIs, Lambdas; CF invalidations and S3." }
];

export default skillsUnified;


