"use client";
import { motion } from "framer-motion";

interface Props {
    label: string;
    rock: string;
    paper: string;
    scissors: string;
    suffix: string;
    suffixClassName?: string;
    subtitle?: React.ReactNode;
}

const up = (delay: number) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.35, delay, ease: "easeOut" as const },
});

const AnimatedPageTitle = ({
    label,
    rock,
    paper,
    scissors,
    suffix,
    suffixClassName = "text-gray-400 text-2xl md:text-3xl",
    subtitle,
}: Props) => (
    <div className="pt-8 pb-6 text-center space-y-3">
        <motion.p className="block text-sm font-normal text-gray-400 tracking-widest uppercase mb-2" {...up(0)}>
            {label}
        </motion.p>
        <h1 className="font-semibold leading-tight">
            <motion.span className="text-blue-500 text-3xl md:text-4xl" {...up(0.08)}>{rock} </motion.span>
            <motion.span className="text-yellow-500 text-3xl md:text-4xl" {...up(0.16)}>{paper} </motion.span>
            <motion.span className="text-red-500 text-3xl md:text-4xl" {...up(0.24)}>{scissors} </motion.span>
            <motion.span className={suffixClassName} {...up(0.32)}>{suffix}</motion.span>
        </h1>
        {subtitle && (
            <motion.p className="text-gray-500 text-sm font-light" {...up(0.42)}>
                {subtitle}
            </motion.p>
        )}
    </div>
);

export default AnimatedPageTitle;
