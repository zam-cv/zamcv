export type Language = "es" | "en";

export interface Project {
  title: string;
  description: string;
  link: string;
  demo?: string;
  tags: string[];
}

export interface Experience {
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
}

export const texts = {
  es: {
    hero: {
      subtitle: "Desarrollador Full Stack",
      description: "Apasionado por la tecnología, disfruto crear soluciones innovadoras y eficientes.",
      cta: "Ver Proyectos",
      downloadCV: "Descargar CV"
    },
    about: {
      title: "Sobre mí",
      description: "Me especializo en desarrollo web, móvil y sistemas backend robustos."
    },
    projects: {
      title: "Proyectos Destacados",
      list: [
        {
          title: "Tau",
          description: "Herramienta de construcción de proyectos en Rust basada en plantillas y comandos.",
          link: "https://github.com/zam-cv/tau",
          tags: ["Rust", "CLI"]
        },
        {
          title: "HackMx",
          description: "Plataforma para organizar y gestionar hackathons en México.",
          link: "https://github.com/zam-cv/hackmx",
          tags: ["Rust", "Astro.js", "PostgreSQL"]
        },
        {
          title: "Qrops",
          description: "Videojuego educativo 2D sobre agricultura, desarrollado para Verqor.",
          link: "https://github.com/zam-cv/qrops",
          tags: ["Unity", "C#", "Game Dev"]
        },
        {
          title: "Microtime",
          description: "Smartwatch y sistema de sensores para monitoreo de salud en tiempo real.",
          link: "https://github.com/zam-cv/microtime",
          tags: ["IoT", "Embedded", "Rust", "MongoDB"]
        },
        {
          title: "Todas Brillamos",
          description: "App móvil de e-commerce para productos femeninos.",
          link: "https://github.com/zam-cv/todas_brillamos",
          tags: ["Flutter", "Mobile", "Golang", "Kotlin"]
        }
      ]
    },
    experience: {
      title: "Experiencia y Logros",
      list: [
        {
          title: "Desarrollador Full Stack Mobile",
          organization: "Fundación Todas Brillamos",
          location: "Ciudad de México",
          date: "Julio 2024 - Octubre 2024",
          description: "Colaboré en equipo para desarrollar una app de e-commerce, implementando pasarelas de pago y sistemas de inventario en tiempo real. Optimicé la UI/UX para mejorar la retención de usuarios."
        },
        {
          title: "Segundo Lugar en Hackathon",
          organization: "HackMX 5",
          location: "Ciudad de México",
          date: "Octubre 2023",
          description: "Con mi equipo, desarrollamos una solución de IA para Liverpool que analiza preferencias de compra y optimiza recomendaciones personalizadas, logrando el segundo lugar entre 40 equipos."
        },
        {
          title: "Primer Lugar en Competencia de Ciberseguridad",
          organization: "Hackrocks",
          location: "Tecnológico de Monterrey",
          date: "Junio 2024",
          description: "Obtuve el primer lugar individual identificando vulnerabilidades en sistemas y aplicando técnicas de pentesting en entornos controlados."
        },
        {
          title: "Organizador y Desarrollador de Plataforma",
          organization: "HackMX 6",
          location: "Ciudad de México",
          date: "Julio 2024",
          description: "Coordiné y desarrollé la plataforma web para el evento, con sistema de evaluación de proyectos y comunicación en tiempo real."
        }
      ]
    },
    contact: {
      title: "Contacto",
      description: "¿Tienes un proyecto interesante en mente? ¡Contáctame y hablemos sobre cómo puedo ayudarte!"
    }
  },
  en: {
    hero: {
      subtitle: "Full Stack Developer",
      description: "Passionate about technology, I enjoy building innovative and efficient solutions.",
      cta: "View Projects",
      downloadCV: "Download CV"
    },
    about: {
      title: "About me",
      description: "I specialize in web, mobile, and robust backend systems."
    },
    projects: {
      title: "Featured Projects",
      list: [
        {
          title: "Tau",
          description: "Project construction tool in Rust based on templates and commands.",
          link: "https://github.com/zam-cv/tau",
          tags: ["Rust", "CLI"]
        },
        {
          title: "HackMx",
          description: "Platform to organize and manage hackathons in Mexico.",
          link: "https://github.com/zam-cv/hackmx",
          demo: "https://hackmx.mx",
          tags: ["Rust", "Astro.js", "PostgreSQL"]
        },
        {
          title: "Qrops",
          description: "2D educational farming game developed for Verqor.",
          link: "https://github.com/zam-cv/qrops",
          tags: ["Unity", "C#", "Game Dev"]
        },
        {
          title: "Microtime",
          description: "Smartwatch and sensor system for real-time health monitoring.",
          link: "https://github.com/zam-cv/microtime",
          tags: ["IoT", "Embedded", "Rust", "MongoDB"]
        },
        {
          title: "Todas Brillamos",
          description: "Mobile e-commerce app for women's products.",
          link: "https://github.com/zam-cv/todas_brillamos",
          demo: "https://todasbrillamos.com",
          tags: ["Flutter", "Mobile", "Golang", "Kotlin"]
        }
      ]
    },
    experience: {
      title: "Experience & Achievements",
      list: [
        {
          title: "Full Stack Mobile Developer",
          organization: "Fundación Todas Brillamos",
          location: "Mexico City",
          date: "July 2024 - October 2024",
          description: "Collaborated in a team to develop an e-commerce app, implementing payment gateways and real-time inventory systems. Optimized UI/UX to improve user retention."
        },
        {
          title: "Second Place in Hackathon",
          organization: "HackMX 5",
          location: "Mexico City",
          date: "October 2023",
          description: "With my team, developed an AI solution for Liverpool that analyzes shopping preferences and optimizes personalized recommendations, achieving second place among 40 teams."
        },
        {
          title: "First Place in Cybersecurity Competition",
          organization: "Hackrocks",
          location: "Tecnologico de Monterrey",
          date: "June 2024",
          description: "Secured first place in the individual category by identifying vulnerabilities and applying pentesting techniques in controlled environments."
        },
        {
          title: "Platform Organizer and Developer",
          organization: "HackMX 6",
          location: "Mexico City",
          date: "July 2024",
          description: "Coordinated and developed the web platform for the event, with project evaluation system and real-time communication."
        }
      ]
    },
    contact: {
      title: "Contact",
      description: "Have an interesting project in mind? Reach out and let's discuss how I can help you!"
    }
  }
}
