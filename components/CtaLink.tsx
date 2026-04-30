import { Link } from "@/i18n/navigation";
import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<typeof Link>;

export function CtaLink({ className = "", ...props }: Props) {
    return (
        <Link
            className={`btn-cta-green inline-flex items-center justify-center gap-1.5 rounded-lg font-semibold text-white ${className}`}
            {...props}
        />
    );
}
