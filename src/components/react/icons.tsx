import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
});

export function GithubIcon(props: IconProps) {
    return (
        <svg {...base(props)} fill="currentColor" viewBox="0 0 24 24" stroke="none">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
            />
        </svg>
    );
}

export function LinkedinIcon(props: IconProps) {
    return (
        <svg {...base(props)} fill="currentColor" stroke="none">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        </svg>
    );
}

export function MailIcon(props: IconProps) {
    return (
        <svg {...base(props)} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
            <path d="m3.5 7 7.2 5.1a2.2 2.2 0 0 0 2.6 0L20.5 7" />
        </svg>
    );
}

export function YoutubeIcon(props: IconProps) {
    return (
        <svg {...base(props)} fill="currentColor" stroke="none">
            <path d="M23.5 6.5a3 3 0 0 0-2.1-2.13C19.5 3.86 12 3.86 12 3.86s-7.5 0-9.4.51A3 3 0 0 0 .5 6.5C0 8.42 0 12 0 12s0 3.58.5 5.5a3 3 0 0 0 2.1 2.13c1.9.51 9.4.51 9.4.51s7.5 0 9.4-.51a3 3 0 0 0 2.1-2.13C24 15.58 24 12 24 12s0-3.58-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
        </svg>
    );
}

export function GooglePlayIcon(props: IconProps) {
    return (
        <svg {...base(props)} fill="currentColor" stroke="none">
            <path d="M3.6 2.3c-.3.27-.46.7-.46 1.26v16.88c0 .56.16.99.47 1.26l.06.05 9.46-9.46v-.22L3.66 2.25l-.06.05Z" opacity=".85" />
            <path d="m16.4 15.5-3.27-3.27v-.22l3.28-3.28.07.05 3.88 2.2c1.1.63 1.1 1.66 0 2.29l-3.88 2.2-.08.03Z" />
            <path d="m16.48 15.46-3.35-3.35-9.52 9.52c.36.39.97.43 1.65.05l11.22-6.22" opacity=".7" />
            <path d="M16.48 8.66 5.26 2.44c-.68-.38-1.29-.33-1.65.05l9.52 9.51 3.35-3.34Z" opacity=".5" />
        </svg>
    );
}

export function AppleIcon(props: IconProps) {
    return (
        <svg {...base(props)} fill="currentColor" stroke="none">
            <path d="M16.37 1.43c.06 1-.34 1.98-.94 2.7-.64.77-1.7 1.37-2.72 1.29-.12-.98.36-2 .92-2.65.63-.74 1.74-1.3 2.74-1.34ZM19.9 17.3c-.5 1.15-.74 1.66-1.38 2.68-.9 1.42-2.16 3.18-3.74 3.2-1.4.01-1.76-.91-3.66-.9-1.9.01-2.3.92-3.7.9-1.58-.02-2.78-1.62-3.67-3.04-2.5-3.96-2.77-8.6-1.22-11.07 1.1-1.75 2.84-2.78 4.47-2.78 1.66 0 2.7.91 4.08.91 1.33 0 2.14-.91 4.06-.91 1.45 0 2.99.79 4.09 2.16-3.6 1.97-3.02 7.1.37 8.85Z" />
        </svg>
    );
}

export function ExternalLinkIcon(props: IconProps) {
    return (
        <svg {...base(props)} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 4h6v6" />
            <path d="M20 4 10 14" />
            <path d="M19 14v4.5A2.5 2.5 0 0 1 16.5 21h-11A2.5 2.5 0 0 1 3 18.5v-11A2.5 2.5 0 0 1 5.5 5H10" />
        </svg>
    );
}

export function ArrowUpRightIcon(props: IconProps) {
    return (
        <svg {...base(props)} stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
        </svg>
    );
}

export function ArrowDownIcon(props: IconProps) {
    return (
        <svg {...base(props)} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14" />
            <path d="m6 13 6 6 6-6" />
        </svg>
    );
}

export function FileIcon(props: IconProps) {
    return (
        <svg {...base(props)} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M19 8.5V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6.5L19 8.5Z" />
        </svg>
    );
}

export function CheckIcon(props: IconProps) {
    return (
        <svg {...base(props)} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}
