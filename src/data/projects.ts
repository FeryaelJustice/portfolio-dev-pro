import type { Localized } from "./profile";

export type ProjectCategory = "mobile" | "web" | "other";

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    featured?: boolean;
    description: Localized;
    /** Short highlight chips shown as KPIs on the card. */
    metrics: { value: string; label: Localized }[];
    tags: string[];
    image: string;
    links: {
        github?: string;
        live?: string;
        store?: string;
        appstore?: string;
        youtube?: string;
    };
}

export const projects: Project[] = [
    {
        id: "vinceproshop-web",
        title: "Vince Pro Shop - Web",
        category: "web",
        featured: true,
        description: {
            en: "Full-stack e-commerce for a billiards store on Node.js: React (Next.js) + Express, MySQL, VPS on Debian. Secured with JWT and bcrypt, custom admin panel, Stripe checkout, an AI chatbot and ML-powered product suggestions.",
            es: "E-commerce full-stack para una tienda de billar sobre Node.js: React (Next.js) + Express, MySQL y VPS con Debian. Seguridad con JWT y bcrypt, panel de administración propio, pagos con Stripe, chatbot de IA y sugerencias de productos con Machine Learning.",
        },
        metrics: [
            { value: "Stripe", label: { en: "Payments", es: "Pagos" } },
            { value: "AI + ML", label: { en: "Built-in", es: "Integrado" } },
            { value: "JWT", label: { en: "Auth", es: "Auth" } },
        ],
        tags: ["Next.js", "React", "Express", "MySQL", "Stripe", "AI/ML"],
        image: "/projects/vinceproshop.webp",
        links: { live: "https://vinceproshop.com/" },
    },
    {
        id: "vinceproshop-mobile",
        title: "Vince Pro Shop - Mobile",
        category: "mobile",
        featured: true,
        description: {
            en: "The mobile companion for Vince Pro Shop, built with Kotlin Multiplatform + Compose Multiplatform for both iOS and Android. Clean architecture with Koin, SQLDelight, Ktor, Room, Datastore, CredentialManager/Keychain, Material 3 and Stripe.",
            es: "La app móvil de Vince Pro Shop, construida con Kotlin Multiplatform + Compose Multiplatform para iOS y Android. Arquitectura limpia con Koin, SQLDelight, Ktor, Room, Datastore, CredentialManager/Keychain, Material 3 y Stripe.",
        },
        metrics: [
            { value: "KMP", label: { en: "Shared code", es: "Código común" } },
            { value: "iOS + Android", label: { en: "Platforms", es: "Plataformas" } },
            { value: "Material 3", label: { en: "Design", es: "Diseño" } },
        ],
        tags: ["Kotlin", "KMP", "Compose", "Ktor", "Stripe"],
        image: "/projects/vinceproshop_mobile.webp",
        links: {
            store: "https://play.google.com/store/apps",
            appstore: "https://www.apple.com/es/app-store/",
        },
    },
    {
        id: "mirailink",
        title: "MiraiLink",
        category: "mobile",
        featured: true,
        description: {
            en: "A social app designed for anime and video-game fans, with its own Express.js backend. Native Android built with Jetpack Compose, MVVM, Hilt, Version Catalog and Clean Architecture.",
            es: "App social pensada para fans del anime y los videojuegos, con su propio backend en Express.js. Android nativo con Jetpack Compose, MVVM, Hilt, Version Catalog y Clean Architecture.",
        },
        metrics: [
            { value: "Compose", label: { en: "Native UI", es: "UI nativa" } },
            { value: "Clean Arch", label: { en: "Architecture", es: "Arquitectura" } },
            { value: "Express", label: { en: "Own backend", es: "Backend propio" } },
        ],
        tags: ["Android", "Kotlin", "Compose", "Hilt", "Express"],
        image: "/projects/mirailink.webp",
        links: {
            store: "https://play.google.com/store/apps/details?id=com.feryaeljustice.mirailink",
            github: "https://github.com/FeryaelJustice/MiraiLink",
        },
    },
    {
        id: "compoundinterestmaster",
        title: "Compound Interest Master",
        category: "mobile",
        description: {
            en: "An app that helps you understand and calculate compound interest simply. Built with Jetpack Compose, MVVM, Hilt, Clean Architecture, StateFlow, Coroutines, unit testing, Material 3 and Vico charts.",
            es: "Una app que te ayuda a entender y calcular el interés compuesto de forma sencilla. Hecha con Jetpack Compose, MVVM, Hilt, Clean Architecture, StateFlow, Coroutines, testing unitario, Material 3 y gráficas Vico.",
        },
        metrics: [
            { value: "Vico", label: { en: "Charts", es: "Gráficas" } },
            { value: "Unit tests", label: { en: "Tested", es: "Testeada" } },
            { value: "StateFlow", label: { en: "Reactive", es: "Reactiva" } },
        ],
        tags: ["Android", "Kotlin", "Compose", "Hilt", "Testing"],
        image: "/projects/compoundinterestmaster.webp",
        links: {
            store: "https://play.google.com/store/apps/details?id=com.feryaeljustice.compoundinterestmaster",
            github: "https://github.com/FeryaelJustice/CompoundInterestMaster",
        },
    },
    {
        id: "supersnakegame",
        title: "Super Snake Game",
        category: "mobile",
        description: {
            en: "Relive the classic Snake with a 2D style and more. Compete for your high score! Built with Jetpack Compose, MVVM, Hilt, Firebase, Credentials, Google Sign-in and Clean Architecture.",
            es: "Revive el clásico Snake con estilo 2D y más. ¡Compite por tu récord! Hecho con Jetpack Compose, MVVM, Hilt, Firebase, Credentials, Google Sign-in y Clean Architecture.",
        },
        metrics: [
            { value: "Firebase", label: { en: "Leaderboard", es: "Ranking" } },
            { value: "Google", label: { en: "Sign-in", es: "Acceso" } },
            { value: "2D", label: { en: "Game", es: "Juego" } },
        ],
        tags: ["Android", "Kotlin", "Compose", "Firebase"],
        image: "/projects/supersnakegame.webp",
        links: { github: "https://github.com/FeryaelJustice/SuperSnakeGame" },
    },
    {
        id: "supernewsapp",
        title: "Super News App",
        category: "mobile",
        description: {
            en: "Your favourite news app, built with Jetpack Compose, MVVM, Hilt, Version Catalog, SOLID principles and Retrofit for API calls.",
            es: "Tu app de noticias favorita, construida con Jetpack Compose, MVVM, Hilt, Version Catalog, principios SOLID y Retrofit para las llamadas a la API.",
        },
        metrics: [
            { value: "Retrofit", label: { en: "Networking", es: "Networking" } },
            { value: "SOLID", label: { en: "Principles", es: "Principios" } },
            { value: "MVVM", label: { en: "Pattern", es: "Patrón" } },
        ],
        tags: ["Android", "Kotlin", "Compose", "Retrofit"],
        image: "/projects/supernewsapp.webp",
        links: {
            store: "https://play.google.com/store/apps/details?id=com.feryaeljustice.supernewsapp",
            github: "https://github.com/FeryaelJustice/SuperNewsApp",
        },
    },
    {
        id: "hotelaurademallorca",
        title: "Hotel Aura de Mallorca",
        category: "web",
        description: {
            en: "A hotel website (React + Express) with a weather API that decides booking availability based on local conditions. Uses Axios, QR codes, React Calendar, i18next, Google reCAPTCHA, Socket.io, cryptography, Nodemailer and Helmet.",
            es: "Web de hotel (React + Express) con una API meteorológica que decide la disponibilidad de reserva según el clima local. Usa Axios, códigos QR, React Calendar, i18next, Google reCAPTCHA, Socket.io, criptografía, Nodemailer y Helmet.",
        },
        metrics: [
            { value: "Weather API", label: { en: "Booking logic", es: "Lógica reserva" } },
            { value: "i18next", label: { en: "Multilingual", es: "Multilingüe" } },
            { value: "Socket.io", label: { en: "Realtime", es: "Tiempo real" } },
        ],
        tags: ["React", "Express", "Socket.io", "i18next"],
        image: "/projects/hotelaurademallorca.webp",
        links: {
            live: "https://darkseagreen-octopus-728733.hostingersite.com/",
            github: "https://github.com/FeryaelJustice/HotelAuraDeMallorca",
        },
    },
    {
        id: "feryaeldev",
        title: "Feryael Dev",
        category: "other",
        description: {
            en: "My programming YouTube channel, showcasing mobile projects and knowledge across different Android topics.",
            es: "Mi canal de YouTube de programación, mostrando proyectos móviles y conocimiento sobre diferentes temas de Android.",
        },
        metrics: [
            { value: "YouTube", label: { en: "Channel", es: "Canal" } },
            { value: "Android", label: { en: "Topics", es: "Temas" } },
        ],
        tags: ["YouTube", "Android", "Content"],
        image: "/projects/feryaeldev.webp",
        links: { youtube: "https://www.youtube.com/@feryaeldev" },
    },
];
