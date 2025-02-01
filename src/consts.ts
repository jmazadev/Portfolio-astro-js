import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const STUDIES: Page = {
  TITLE: "Estudios",
  DESCRIPTION: "Donde he realizado mis estudios",
}

// Experience Page
export const EXPERIENCE: Page = {
  TITLE: "Experiencia",
  DESCRIPTION: "Sitios donde he trabajado",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Inicio", 
    HREF: "/", 
  },
  { 
    TEXT: "Estudios", 
    HREF: "/estudios", 
  },
  { 
    TEXT: "Experiencia", 
    HREF: "/experiencia", 
  }
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "jmazario91@gmail.com",
    HREF: "mailto:jmazario91@gmail.com",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "javier-mazarío-morales",
    HREF: "https://www.linkedin.com/in/javier-mazar%C3%ADo-morales-821411aa/",
  },
  { 
    NAME: "Teléfono",
    ICON: "phone",
    TEXT: "635 08 06 73",
    HREF: "tel:635080673",
  },

]

