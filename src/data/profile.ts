import type { Lang } from "@i18n/utils";

export type Localized = Record<Lang, string>;

export const profile = {
    name: "Fernando González Serrano",
    alias: "Feryael Justice",
    avatar:
        "/mePro.webp",
    photo: "/me.webp",
    email: "nano9gs@hotmail.es",
    location: {
        en: "Mallorca, Spain",
        es: "Mallorca, España",
    } satisfies Localized,
    cv: {
        en: "/cv.pdf",
        es: "/cv.pdf",
    } satisfies Localized,
    socials: {
        github: "https://github.com/FeryaelJustice",
        linkedin: "https://linkedin.com/in/feryael-justice",
        youtube: "https://www.youtube.com/@feryaeldev",
    },
    stats: [
        { value: "4+", key: "stat.years" as const },
        { value: "6+", key: "stat.apps" as const },
        { value: "5+", key: "stat.stacks" as const },
    ],
    bio: [
        {
            en: "My name is Fernando González Serrano, but everyone calls me Fer or Feryael Justice. I started programming at 15, exploring web development and desktop software, and never stopped building since.",
            es: "Mi nombre es Fernando González Serrano, pero todos me llaman Fer o Feryael Justice. Empecé a programar con 15 años, explorando el desarrollo web y el software de escritorio, y desde entonces no he parado de construir.",
        },
        {
            en: "Most recently I worked as an Android Developer at ExisTI, a tech consultancy, on a banking app, building it from scratch and migrating a legacy version, alongside a great team in a large company like NTTData.",
            es: "Recientemente trabajé como Desarrollador Android en ExisTI, una consultora tecnológica, en una app bancaria, creándola desde cero y migrando una versión antigua, junto a un gran equipo y en una empresa grande como NTTData.",
        },
        {
            en: "Along the way I've shipped desktop enterprise software with Delphi at Tec-Soft, and full-stack web products with Laravel, Vue.js, Node.js and TailwindCSS. My passion is creating efficient, secure and scalable applications, and growing on impactful projects.",
            es: "En el camino he desarrollado software empresarial de escritorio con Delphi en Tec-Soft, y productos web full-stack con Laravel, Vue.js, Node.js y TailwindCSS. Mi pasión es crear aplicaciones eficientes, seguras y escalables, y crecer en proyectos con impacto.",
        },
    ] satisfies Localized[],
} as const;
