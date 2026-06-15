import type { Localized } from "./profile";

/** `icon` maps to a component key in Skills.astro's icon lookup. */
export interface Skill {
    name: string;
    icon: string;
}

export interface SkillGroup {
    category: Localized;
    accent: "primary" | "tertiary" | "secondary";
    skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
    {
        category: { en: "Mobile / Android", es: "Móvil / Android" },
        accent: "primary",
        skills: [
            { name: "Kotlin", icon: "Kotlin" },
            { name: "Jetpack Compose", icon: "Android" },
            { name: "Android", icon: "Android" },
            { name: "Kotlin Multiplatform", icon: "Kotlin" },
            { name: "Swift / iOS", icon: "Swift" },
            { name: "Material 3", icon: "Android" },
            { name: "Hilt / Koin", icon: "Code" },
        ],
    },
    {
        category: { en: "Frontend / Web", es: "Frontend / Web" },
        accent: "tertiary",
        skills: [
            { name: "React", icon: "React" },
            { name: "Next.js", icon: "NextJS" },
            { name: "Astro", icon: "Astro" },
            { name: "Vue.js", icon: "Code" },
            { name: "TailwindCSS", icon: "TailwindCSS" },
            { name: "JavaScript / TS", icon: "JS" },
        ],
    },
    {
        category: { en: "Backend / Data", es: "Backend / Datos" },
        accent: "secondary",
        skills: [
            { name: "Node.js", icon: "Code" },
            { name: "Express.js", icon: "Express" },
            { name: "Laravel", icon: "Code" },
            { name: "MySQL", icon: "Code" },
            { name: "Ktor", icon: "Code" },
            { name: "REST APIs", icon: "Code" },
        ],
    },
    {
        category: { en: "Architecture & Tooling", es: "Arquitectura y herramientas" },
        accent: "primary",
        skills: [
            { name: "Clean Architecture", icon: "Code" },
            { name: "MVVM / MVI", icon: "Code" },
            { name: "Coroutines", icon: "Kotlin" },
            { name: "Retrofit", icon: "Code" },
            { name: "Firebase", icon: "Code" },
            { name: "Stripe", icon: "Code" },
            { name: "AI / ML", icon: "AI" },
        ],
    },
];
