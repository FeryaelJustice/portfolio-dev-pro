import { motion, useReducedMotion } from "motion/react";
import { ui } from "@i18n/ui";
import type { Lang } from "@i18n/utils";
import { profile } from "@data/profile";
import { spring, staggerContainer, riseItem } from "@lib/motion";
import {
    GithubIcon,
    LinkedinIcon,
    MailIcon,
    FileIcon,
    ArrowUpRightIcon,
    ArrowDownIcon,
} from "./icons";

export default function Hero({ lang }: { lang: Lang }) {
    const t = (k: keyof (typeof ui)["en"]) => ui[lang][k];
    const reduce = useReducedMotion();

    const float = (delay: number) =>
        reduce
            ? {}
            : {
                  animate: {
                      y: [0, -22, 0],
                      x: [0, 12, 0],
                      scale: [1, 1.06, 1],
                  },
                  transition: {
                      duration: 14,
                      repeat: Infinity,
                      ease: "easeInOut" as const,
                      delay,
                  },
              };

    const socials = [
        { href: `mailto:${profile.email}`, label: t("hero.cta.contact"), Icon: MailIcon },
        { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
        { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
        { href: profile.cv[lang], label: t("cv"), Icon: FileIcon },
    ];

    return (
        <div className="relative isolate overflow-hidden">
            {/* Animated tonal blobs */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <motion.div
                    {...float(0)}
                    className="absolute -top-24 -left-10 h-104 w-104 rounded-full bg-primary/20 blur-[90px]"
                />
                <motion.div
                    {...float(3)}
                    className="absolute top-20 right-0 h-104 w-104 rounded-full bg-tertiary/15 blur-[100px]"
                />
                <motion.div
                    {...float(6)}
                    className="absolute bottom-0 left-1/3 h-104 w-104 rounded-full bg-secondary/10 blur-[90px]"
                />
            </div>
            <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0 -z-10 opacity-60" />

            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pt-28 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-36 lg:pb-28">
                {/* Text column */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-2xl"
                >
                    <motion.a
                        variants={riseItem}
                        href={profile.socials.linkedin}
                        target="_blank"
                        rel="noopener"
                        className="state-layer inline-flex items-center gap-2 rounded-m3-xl border border-outline-variant bg-surface-2/70 px-3.5 py-1.5 text-sm text-on-surface-variant backdrop-blur transition hover:border-primary/50"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            {!reduce && (
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                            )}
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                        </span>
                        {t("hero.badge")}
                    </motion.a>

                    <motion.h1
                        variants={riseItem}
                        className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-on-surface sm:text-6xl lg:text-7xl"
                    >
                        {t("hero.greeting")}{" "}
                        <span className="relative whitespace-nowrap text-primary">Feryael Justice</span>
                    </motion.h1>

                    <motion.p
                        variants={riseItem}
                        className="mt-4 font-display text-xl font-medium text-on-surface sm:text-2xl"
                    >
                        {t("hero.role")}
                    </motion.p>

                    <motion.p
                        variants={riseItem}
                        className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-on-surface-variant sm:text-lg"
                    >
                        {t("hero.tagline")}
                    </motion.p>

                    <motion.div variants={riseItem} className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href="#projects"
                            className="state-layer group inline-flex items-center gap-2 rounded-m3-xl bg-primary px-6 py-3 font-semibold text-on-primary transition hover:shadow-lg hover:shadow-primary/20"
                        >
                            {t("hero.cta.projects")}
                            <ArrowUpRightIcon className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <a
                            href="#contact"
                            className="state-layer inline-flex items-center gap-2 rounded-m3-xl border border-outline-variant px-6 py-3 font-semibold text-on-surface transition hover:border-primary/50"
                        >
                            {t("hero.cta.contact")}
                        </a>
                    </motion.div>

                    <motion.nav variants={riseItem} className="mt-7 flex flex-wrap gap-2.5">
                        {socials.map(({ href, label, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener"
                                aria-label={label}
                                className="state-layer inline-flex items-center gap-2 rounded-m3-lg border border-outline-variant bg-surface-2/60 px-3.5 py-2 text-sm text-on-surface-variant backdrop-blur transition hover:text-on-surface"
                            >
                                <Icon className="text-base" />
                                {label}
                            </a>
                        ))}
                    </motion.nav>

                    {/* Stats */}
                    <motion.dl variants={riseItem} className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                        {profile.stats.map((s) => (
                            <div key={s.key}>
                                <dt className="font-display text-3xl font-bold text-primary">{s.value}</dt>
                                <dd className="text-sm text-on-surface-variant">{t(s.key)}</dd>
                            </div>
                        ))}
                    </motion.dl>
                </motion.div>

                {/* Avatar column */}
                <motion.div
                    initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85, rotate: -6 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ ...spring.bouncy, delay: 0.15 }}
                    className="relative mx-auto hidden w-full max-w-sm lg:block"
                >
                    <div className="relative aspect-square">
                        {/* Rotating conic ring */}
                        {!reduce && (
                            <motion.div
                                aria-hidden
                                animate={{ rotate: 360 }}
                                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                                className="shape-cookie absolute inset-0"
                                style={{
                                    background:
                                        "conic-gradient(from 0deg, var(--color-primary), var(--color-tertiary), var(--color-secondary), var(--color-primary))",
                                }}
                            />
                        )}
                        <div className="shape-cookie absolute inset-1.5 bg-surface" />
                        <img
                            src={profile.avatar}
                            alt={profile.alias}
                            loading="eager"
                            className="shape-cookie absolute inset-2.5 h-[calc(100%-20px)] w-[calc(100%-20px)] object-cover"
                        />
                    </div>
                    {/* Floating tech chip */}
                    <motion.div
                        animate={reduce ? {} : { y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-3 -left-3 rounded-m3-lg border border-outline-variant bg-surface-3/90 px-4 py-2.5 backdrop-blur"
                    >
                        <p className="font-mono text-xs text-on-surface-variant">{`{ android: true }`}</p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll cue */}
            <div className="flex justify-center pb-8">
                <motion.a
                    href="#about"
                    aria-label={t("hero.scroll")}
                    className="inline-flex flex-col items-center gap-1 text-xs text-on-surface-variant/70"
                    animate={reduce ? {} : { y: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                    {t("hero.scroll")}
                    <ArrowDownIcon className="text-base" />
                </motion.a>
            </div>
        </div>
    );
}
