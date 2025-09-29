const education = [
    // Formal education (from LinkedIn Education.csv)
    {
        title: "Fundación Universidad de Bogotá Jorge Tadeo Lozano",
        subtitle: "Media Production | Bogotá",
        description: "",
        date: "(2008–2010)",
        icon: "ti-crown",
    },
    {
        title: "Fundación Universitaria Los Libertadores",
        subtitle: "Graphic Design | Bogotá",
        description: "",
        date: "(2004– )",
        icon: "ti-ruler-alt-2",
    },
    {
        title: "Pontificia Universidad Javeriana",
        subtitle: "3D Modeling & Compositing | Bogotá",
        description: "",
        date: "",
        icon: "ti-cup",
    },

    // Certifications (from LinkedIn Certifications.csv)
    {
        title: "EF SET English Certificate 69/100 (C1 Advanced)",
        subtitle: "EF Standard English Test (EF SET)",
        description: "",
        date: "",
        icon: "ti-flag",
    },
    {
        title: "Curso de React Router y Redux",
        subtitle: "Platzi",
        description: "",
        date: "(Dec 2020)",
        icon: "ti-share",
    },
    {
        title: "Curso de End to End Testing con Cypress",
        subtitle: "Platzi",
        description: "",
        date: "(Jul 2021)",
        icon: "ti-settings",
    },
    {
        title: "Curso de ECMAScript 6+",
        subtitle: "Platzi",
        description: "",
        date: "(Dec 2020)",
        icon: "ti-star",
    },
    {
        title: "Curso de Fundamentos de AWS Cloud",
        subtitle: "Platzi",
        description: "",
        date: "(Dec 2020)",
        icon: "ti-cloud",
    },
    {
        title: "Curso de Fundamentos de Node.js",
        subtitle: "Platzi",
        description: "",
        date: "(Dec 2020)",
        icon: "ti-control-shuffle",
    },
    {
        title: "Curso Profesional de Git y GitHub",
        subtitle: "Platzi",
        description: "",
        date: "(Jan 2021)",
        icon: "ti-github",
    },
    {
        title: "Curso de Integración de Backend y Frontend",
        subtitle: "Platzi",
        description: "",
        date: "(Jan 2021)",
        icon: "ti-exchange-vertical",
    },
    {
        title: "Curso de Asincronismo con JavaScript",
        subtitle: "Platzi",
        description: "",
        date: "(Jan 2021)",
        icon: "ti-timer",
    },
    {
        title: "React Native Course",
        subtitle: "Udemy",
        description: "",
        date: "(Mar 2021)",
        icon: "ti-mobile",
    }
];

// Merge-in original course highlights not explicitly in LinkedIn export
education.push(
  {
    title: "TypeScript | ReactJS | Ionic 5",
    subtitle: "Platzi",
    description: "",
    date: "(Ongoing)",
    icon: "ti-ruler-alt-2",
  },
  {
    title: "iOnic 4",
    subtitle: "Platzi",
    description: "",
    date: "(2018)",
    icon: "ti-mobile",
  },
  {
    title: "MySQL",
    subtitle: "Platzi",
    description: "",
    date: "(Auto-Self from 2008 – Certified in Process)",
    icon: "ti-bar-chart",
  },
  {
    title: "Curso Avanzado de PHP",
    subtitle: "Platzi",
    description: "",
    date: "(Sep 2020)",
    icon: "ti-pin2",
  }
);

export default education;