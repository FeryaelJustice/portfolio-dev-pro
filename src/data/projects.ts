import type { Localized } from "./profile";

export type ProjectCategory = "mobile" | "web" | "other" | "monorepo-all-platforms";

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    order: number;
    featured?: boolean;
    inDevelopment?: boolean;
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
        id: "signal-vault",
        title: "Signal Vault",
        category: "monorepo-all-platforms",
        order: 1,
        featured: true,
        inDevelopment: true,
        description: {
            en: "A secure, end-to-end encrypted messaging and vault app available on all platforms. Spring Boot + JPA backend, STOMP for real-time messaging, a Next.js web client with TanStack Query, Web Crypto API for client-side encryption, native Android with Jetpack Compose and native iOS with SwiftUI.",
            es: "App de mensajería y bóveda cifrada de extremo a extremo disponible en todas las plataformas. Backend con Spring Boot + JPA, STOMP para mensajería en tiempo real, cliente web en Next.js con TanStack Query, Web Crypto API para cifrado en cliente, Android nativo con Jetpack Compose e iOS nativo con SwiftUI.",
        },
        metrics: [
            { value: "E2E", label: { en: "Encrypted", es: "Cifrado" } },
            { value: "Web + Android + iOS", label: { en: "Platforms", es: "Plataformas" } },
            { value: "STOMP", label: { en: "Real-time", es: "Tiempo real" } },
        ],
        tags: ["Spring Boot", "JPA", "STOMP", "Next.js", "TanStack Query", "Web Crypto", "Kotlin", "Jetpack Compose", "SwiftUI"],
        image: "/projects/signalvault.webp",
        links: {
            github: "https://github.com/FeryaelJustice/signal-vault",
        },
    },
    {
        id: "vinceproshop-web",
        title: "Vince Pro Shop - Web",
        category: "web",
        order: 2,
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
        order: 3,
        featured: true,
        inDevelopment: true,
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
            github: "https://github.com/FeryaelJustice/vinceproshopapp",
        },
    },
    {
        id: "mirailink",
        title: "MiraiLink",
        category: "mobile",
        order: 4,
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
        order: 5,
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
        order: 6,
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
        order: 7,
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
        order: 8,
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
        order: 9,
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
