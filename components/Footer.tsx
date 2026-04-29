"use client";
import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "pt", label: "Português", flag: "🇵🇹" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
] as const;

type LangCode = (typeof languages)[number]["code"];

const Footer = () => {
    const locale = useLocale() as LangCode;
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const current = languages.find((l) => l.code === locale) ?? languages[0];

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
        setOpen(false);
    };

    return (
        <footer className="bg-white/10 border-t border-gray-100">
            <div className="h-14 flex items-center container justify-between gap-4">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                    Created with{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-600" viewBox="0 0 256 256">
                        <path
                            fill="currentColor"
                            d="M236 92c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a8.1 8.1 0 0 1-7.8 0C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36Z"
                        />
                    </svg>{" "}
                    by{" "}
                    <a href="https://nicojuhari.com" title="Web design by Nick" className="text-gray-500 hover:text-gray-700">
                        Nick
                    </a>
                </div>

                <div className="relative" ref={ref}>
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <span className="text-base leading-none">{current.flag}</span>
                        <span className="text-xs font-medium uppercase tracking-wide">{current.code}</span>
                        <svg
                            className={`w-3 h-3 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
                            viewBox="0 0 12 12"
                            fill="none"
                        >
                            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {open && (
                        <div className="absolute bottom-full right-0 mb-1.5 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden min-w-[140px] py-1">
                            {languages.map(({ code, label, flag }) => (
                                <button
                                    key={code}
                                    onClick={() => switchLocale(code)}
                                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors cursor-pointer ${
                                        code === locale
                                            ? "bg-gray-50 text-gray-800 font-medium"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                                    }`}
                                >
                                    <span className="text-base leading-none">{flag}</span>
                                    <span>{label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
