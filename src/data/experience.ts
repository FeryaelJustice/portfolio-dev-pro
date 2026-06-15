import type { Localized } from "./profile";

export interface Experience {
    role: string;
    company: string;
    /** ISO year-month of first day worked, e.g. "2024-12" */
    start: string;
    /** ISO year-month of last day worked (inclusive), e.g. "2025-06" */
    end: string;
    date: Localized;
    description: Localized;
    link: string;
    tags: string[];
}

export const experience: Experience[] = [
    {
        role: "Android Developer (Junior)",
        company: "ExisTI",
        start: "2024-12",
        end: "2025-06",
        date: {
            en: "Dec 2024 – Jun 2025 · 6 months",
            es: "Dic 2024 – Jun 2025 · 6 meses",
        },
        description: {
            en: "Tech consultant focused on Android. Collaborated on a banking app with NTTData, building 5+ new features with Kotlin, Jetpack Compose, Hilt, MVVM and Retrofit, and shipping secure builds with Proguard/Dexguard.",
            es: "Consultor tecnológico especializado en Android. Colaboré en una app bancaria con NTTData, desarrollando más de 5 funcionalidades con Kotlin, Jetpack Compose, Hilt, MVVM y Retrofit, y publicando builds seguros con Proguard/Dexguard.",
        },
        link: "https://www.exis-ti.com/",
        tags: ["Kotlin", "Compose", "Hilt", "Retrofit"],
    },
    {
        role: "Fullstack Web Developer",
        company: "Homerti",
        start: "2023-09",
        end: "2024-08",
        date: {
            en: "Sep 2023 – Aug 2024 · ~1 year",
            es: "Sep 2023 – Ago 2024 · ~1 año",
        },
        description: {
            en: "Maintained and developed internal web products with Laravel and Vue.js, in an Agile team using Bitbucket for version control. Started as a higher vocational training internship (Sep–Dec 2023).",
            es: "Mantuve y desarrollé productos web internos con Laravel y Vue.js, en un equipo Agile con Bitbucket para el control de versiones. Empecé con prácticas de formación superior (Sep–Dic 2023).",
        },
        link: "https://www.homerti.com",
        tags: ["Laravel", "Vue.js", "Agile"],
    },
    {
        role: "Software Developer",
        company: "Tec-Soft",
        start: "2022-05",
        end: "2022-08",
        date: {
            en: "May 2022 – Aug 2022 · 4 months",
            es: "May 2022 – Ago 2022 · 4 meses",
        },
        description: {
            en: "Developed enterprise software in Delphi Seattle for desktop environments, including tooling such as PDFBuilder.",
            es: "Desarrollé software empresarial en Delphi Seattle para entornos de escritorio, incluyendo herramientas como PDFBuilder.",
        },
        link: "https://www.tec-soft.com",
        tags: ["Delphi", "Desktop"],
    },
];
