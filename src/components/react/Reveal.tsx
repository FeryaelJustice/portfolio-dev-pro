import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { spring, viewportOnce } from "@lib/motion";

interface RevealProps {
    children: ReactNode;
    /** Stagger delay multiplier for sequenced reveals. */
    delay?: number;
    /** Direction the element rises from. */
    y?: number;
    className?: string;
    as?: "div" | "section" | "li" | "article";
}

/**
 * Scroll-reveal wrapper. Wrap server-rendered Astro markup with this island
 * (via a default slot) to get an M3 spatial-spring entrance, while keeping the
 * actual content static and accessible. Honours `prefers-reduced-motion`.
 */
export default function Reveal({
    children,
    delay = 0,
    y = 28,
    className,
    as = "div",
}: RevealProps) {
    const reduce = useReducedMotion();
    const MotionTag = motion[as] as typeof motion.div;

    return (
        <MotionTag
            className={className}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...spring.spatial, delay }}
        >
            {children}
        </MotionTag>
    );
}
