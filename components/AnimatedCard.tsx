"use client";
import { motion } from "framer-motion";

const variants = (i: number) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.4, delay: i * 0.07, ease: "easeOut" as const },
});

export default function AnimatedCard({ i, children }: { i: number; children: React.ReactNode }) {
    return (
        <motion.div className="bg-white rounded-xl p-6 border" {...variants(i)}>
            {children}
        </motion.div>
    );
}
