"use client";

import { useEffect, useRef } from "react";

interface AdSenseProps {
    adSlot: string;
    adClient?: string;
    adFormat?: "auto" | "fluid" | "rectangle" | "vertical" | "horizontal";
    adLayout?: string; // required when adFormat="fluid"
    fullWidthResponsive?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

const AdSense = ({
    adSlot,
    adClient = "ca-pub-4659100624570587",
    adFormat = "auto",
    adLayout,
    fullWidthResponsive = true,
    className,
    style,
}: AdSenseProps) => {
    const adRef = useRef<HTMLModElement>(null);
    const pushed = useRef(false);

    useEffect(() => {
        if (pushed.current) return;
        if (!adClient) return;

        try {
            pushed.current = true;
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch {
            // adsbygoogle not yet loaded
        }
    }, [adClient]);

    if (!adClient || process.env.NODE_ENV !== "production") return null;

    return (
        <div className={className}>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: "block", ...style }}
                data-ad-client={adClient}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                {...(adLayout ? { "data-ad-layout": adLayout } : {})}
                {...(fullWidthResponsive ? { "data-full-width-responsive": "true" } : {})}
            />
        </div>
    );
};

export default AdSense;
