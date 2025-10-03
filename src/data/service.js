const service = [
    {
        title: "AWS Computing",
        mode: "DevOps",
        subtitle: "Budget planning and setup using S3 Buckets, EC2 (Installation, Set-Up, AMI), ELBS, AutoScaling, CloudFront Optimization. Lambda functions to integrate triggers from other AWS services like Dynamo, SNS, SES, SQS and Api Gateway, Setup of Cloudwatch Events and Alarms. Setup of CI/CD with CodeCommit and Pipelines. Rekognition, Route53 and WAF.",
        link: "/service-details",
        icon: "ti-cloud"
    },
    {
        title: "AWS RDS",
        mode: "DevOps",
        subtitle: "RDS estructuration and querie optimization for best performance on production process data, secure connections and access to the data from Secure Manager to be accessible from antoher AWS resources. Triggers, Store Procedures and Functions to get a better performance in the transactions. Horizontal and Vertically Scaling DB.",
        link: "/service-details",
        icon: "ti-cloud-down"
    },
    {
        title: "Websocket",
        mode: "Front-Back-End",
        subtitle: "Develop of real-time applications and integrations for best user experience and real data updates on his interface. Development and/or set-up from NodeJS running in EC2 machine as PM2 service or as Serverless in Lambda trough Api Gateway service for socket on AWS Cloud. I use this for most of apps that involve chat or communications processes.",
        link: "/service-details",
        icon: "ti-wand"
    },
    {
        title: "UI Development",
        mode: "Front-End",
        subtitle: "Design and development of user interfaces (Web/Mobile), transitions, animations, color balance. HTML5 estructure with proper syntax, CSS3 (Saas, Bootstrap, UI Material) and mobile layout. Balance handler between the text, images and icons set. I work with Adobe XD, Illustrator and Photoshop for build the wireframe or proposal to the customers.",
        link: "/service-details",
        icon: "ti-ruler-pencil"
    },
    {
        title: "UX Design",
        mode: "Front-End",
        subtitle: "Develop of interactive interfaces that helps user to have a good experience on navigation (buttons, cta, popups, panels). I know how to guide the user to find in an easy way the elements to interact with, using some tools like heatmaps and ux analyzer i get the feedback to optimize the UI layout or relocation/render of the components.",
        link: "/service-details",
        icon: "ti-ruler-alt-2"
    },
    {
        title: "Api Connections",
        mode: "Back-End",
        subtitle: "Third api's connections to consume, save, analyze and show data. Perfomance on batch handler to consume from different accounts and different services. Connections to platforms like Facebook, Google, Twilio, FullContact, WhatsApp, MessageBird, Vtex, Aws. Connection to the account trough Oauth2 to save the tokens and connections to use it offline.",
        link: "/service-details",
        icon: "ti-control-shuffle"
    },
    {
        title: "Mobile APPS",
        mode: "Front-End",
        subtitle: "iOnic build UI (Angular or React) and use some native hardware functions and connections with databases trough API. Creation of Apple Store and Google Play accounts, certifications and knowledge of the process deployment to the stores. Use of UX/UI experience to get amazing products.",
        link: "/service-details",
        icon: "ti-mobile"
    },
    {
        title: "Api Build / Documentation",
        mode: "Front-End",
        subtitle: "Documentation (Swagger, Readme, Postman), development with NodeJS (Lambda or Express), PHP (Laravel), setup with EC2, ELB, AutoScaling or ApiGateway with Lambda (NodeJS). Develop of authorizations with JWT trough AWS Cognito or Firebase and DynamoBD sessions manage.",
        link: "/service-details",
        icon: "ti-direction-alt"
    },
    {
        title: "CI/CD",
        mode: "DevOps",
        subtitle: "Setup of Worflows with BuddyWorks for build and deploy applications in different environment (Dev,QA,Production) using SFTP, Lambda Deploy, SSH, Bash Scripts, S3 upload, Image Optimizations, CloudFront Invalidations. All this connected to Git and with automated flows for each branch or event.",
        link: "/service-details",
        icon: "ti-rocket"
    },
    // New services aligned with current stack
    {
        title: "Identity & Access (Keycloak)",
        mode: "Platform",
        subtitle: "Customization of themes, login/registration flows, custom providers (SPI), events, and admin workflows. Integration with web/mobile apps and APIs.",
        link: "/service-details",
        icon: "ti-id-badge"
    },
    {
        title: "Kubernetes & GitOps",
        mode: "DevOps",
        subtitle: "Application packaging and deployment with Helm; GitOps pipelines using Flux; environment promotion, secrets handling, and observability wiring.",
        link: "/service-details",
        icon: "ti-control-shuffle"
    },
    {
        title: "Infra as Code (Pulumi/Terraform)",
        mode: "DevOps",
        subtitle: "Provision AWS infrastructure (S3, CloudFront, Route53, EC2/EKS/ECS, RDS, WAF) with TypeScript-based Pulumi or Terraform modules and CI integration.",
        link: "/service-details",
        icon: "ti-settings"
    },
    {
        title: "Observability (Datadog)",
        mode: "DevOps",
        subtitle: "Full-stack visibility: APM, logs, RUM dashboards, alerting, SLOs, and runbooks to monitor UI and backend services end-to-end.",
        link: "/service-details",
        icon: "ti-pulse"
    },
    {
        title: "AI & Document Processing",
        mode: "Back-End",
        subtitle: "Pipelines with AWS Textract and LLMs (e.g., OpenAI-style APIs) to extract, enrich, and route data from PDFs and documents.",
        link: "/service-details",
        icon: "ti-thought"
    },
    {
        title: "Messaging & CRM Tooling",
        mode: "Front-Back-End",
        subtitle: "Templates and automation for Braze/Sendgrid; Liquid.js tooling; internal dev tools and VSCode extensions for campaign workflows.",
        link: "/service-details",
        icon: "ti-email"
    },
    {
        title: "Angular UI (Tailwind/PrimeNG)",
        mode: "Front-End",
        subtitle: "Design and build Angular 16–20 applications using TailwindCSS and PrimeNG components, with Cypress for E2E testing.",
        link: "/service-details",
        icon: "ti-layout"
    },
    {
        title: "APIs with NestJS/Node",
        mode: "Back-End",
        subtitle: "CQRS, microservices, BFFs, OpenAPI-first design, authentication/authorization (JWT/OAuth), and performance-tuned data access.",
        link: "/service-details",
        icon: "ti-server"
    },
    {
        title: "Desktop & Mobile Apps",
        mode: "Frontend",
        subtitle: "Electron apps for macOS/Windows with auto-updates and installers. Ionic mobile apps with Capacitor and push notifications.",
        link: "/service-details",
        icon: "ti-mobile"
    }
];

export default service;