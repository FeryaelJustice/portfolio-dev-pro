import type { Transition, Variants } from "motion/react";

/**
 * Material 3 Expressive motion presets.
 * M3 favours physics-based springs over duration curves:
 *  - "spatial" springs move things in space (position/scale/layout)
 *  - "effects" springs handle non-spatial change (opacity/color)
 */
export const spring = {
    spatial: { type: "spring", stiffness: 380, damping: 32, mass: 1 },
    spatialSlow: { type: "spring", stiffness: 220, damping: 30, mass: 1 },
    effects: { type: "spring", stiffness: 220, damping: 40 },
    bouncy: { type: "spring", stiffness: 460, damping: 18, mass: 0.9 },
} satisfies Record<string, Transition>;

/** Stagger container for revealing groups of children. */
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
};

/** A single item rising into place with a spatial spring. */
export const riseItem: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: spring.spatial,
    },
};

/** Default viewport config: animate once, slightly before fully in view. */
export const viewportOnce = { once: true, amount: 0.25, margin: "0px 0px -10% 0px" } as const;
