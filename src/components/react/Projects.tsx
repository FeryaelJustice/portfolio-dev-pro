import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ui } from "@i18n/ui";
import type { Lang } from "@i18n/utils";
import { projects, type Project, type ProjectCategory } from "@data/projects";
import { spring, viewportOnce } from "@lib/motion";
import {
    GithubIcon,
    ExternalLinkIcon,
    GooglePlayIcon,
    AppleIcon,
    YoutubeIcon,
    ArrowUpRightIcon,
} from "./icons";

type Filter = "all" | ProjectCategory;

export default function Projects({ lang }: { lang: Lang }) {
    const t = (k: keyof (typeof ui)["en"]) => ui[lang][k];
    const reduce = useReducedMotion();
    const [filter, setFilter] = useState<Filter>("all");

    const filters: { id: Filter; label: string }[] = [
        { id: "all", label: t("projects.filter.all") },
        { id: "mobile", label: t("projects.filter.mobile") },
        { id: "web", label: t("projects.filter.web") },
        { id: "other", label: t("projects.filter.other") },
    ];

    const visible = useMemo(
        () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
        [filter],
    );

    return (
        <div>
            {/* Filter segmented control */}
            <div className="mb-10 flex flex-wrap gap-2">
                {filters.map((f) => {
                    const active = filter === f.id;
                    return (
                        <button
                            key={f.id}
                            type="button"
                            onClick={() => setFilter(f.id)}
                            aria-pressed={active}
                            className={`state-layer relative rounded-m3-xl px-4 py-2 text-sm font-medium transition ${
                                active
                                    ? "text-on-primary"
                                    : "border border-outline-variant text-on-surface-variant hover:text-on-surface"
                            }`}
                        >
                            {active && (
                                <motion.span
                                    layoutId="filter-pill"
                                    transition={spring.spatial}
                                    className="absolute inset-0 -z-10 rounded-m3-xl bg-primary"
                                />
                            )}
                            {f.label}
                        </button>
                    );
                })}
            </div>

            <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <AnimatePresence mode="popLayout">
                    {visible.map((p) => (
                        <motion.div
                            key={p.id}
                            layout={!reduce}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={spring.spatial}
                            viewport={viewportOnce}
                        >
                            <ProjectCard project={p} lang={lang} t={t} reduce={!!reduce} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

function ProjectCard({
    project,
    lang,
    t,
    reduce,
}: {
    project: Project;
    lang: Lang;
    t: (k: keyof (typeof ui)["en"]) => string;
    reduce: boolean;
}) {
    const { links } = project;
    const linkButtons = [
        links.github && { href: links.github, label: t("projects.code"), Icon: GithubIcon },
        links.live && { href: links.live, label: t("projects.live"), Icon: ExternalLinkIcon },
        links.store && { href: links.store, label: t("projects.store"), Icon: GooglePlayIcon },
        links.appstore && { href: links.appstore, label: t("projects.appstore"), Icon: AppleIcon },
        links.youtube && { href: links.youtube, label: "YouTube", Icon: YoutubeIcon },
    ].filter(Boolean) as { href: string; label: string; Icon: typeof GithubIcon }[];

    return (
        <motion.article
            whileHover={reduce ? undefined : { y: -6 }}
            transition={spring.spatial}
            className="group flex h-full flex-col overflow-hidden rounded-m3-xl border border-outline-variant bg-surface-2 transition-colors hover:border-primary/40"
        >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-3">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-2 via-transparent to-transparent" />
                {/* Metric chips */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    {project.metrics.map((m) => (
                        <span
                            key={m.value}
                            className="rounded-m3-sm border border-outline-variant/60 bg-surface/80 px-2 py-1 text-[11px] font-medium text-on-surface backdrop-blur"
                        >
                            <span className="text-primary">{m.value}</span>{" "}
                            <span className="text-on-surface-variant">{m.label[lang]}</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-bold text-on-surface">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-on-surface-variant">
                    {project.description[lang]}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <li
                            key={tag}
                            className="rounded-m3-sm bg-surface-4 px-2.5 py-1 text-xs text-on-surface-variant"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>

                {linkButtons.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-outline-variant/50 pt-4">
                        {linkButtons.map(({ href, label, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener"
                                className="state-layer inline-flex items-center gap-1.5 rounded-m3-lg border border-outline-variant px-3 py-1.5 text-xs font-medium text-on-surface-variant transition hover:border-primary/50 hover:text-on-surface"
                            >
                                <Icon className="text-sm" />
                                {label}
                                <ArrowUpRightIcon className="text-xs opacity-50" />
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </motion.article>
    );
}
