"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "pt", label: "PT" },
] as const;

const Footer = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
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
                <div className="flex items-center gap-1">
                    {languages.map(({ code, label }) => (
                        <button
                            key={code}
                            onClick={() => switchLocale(code)}
                            className={`text-xs px-2 py-1 rounded transition-colors cursor-pointer ${
                                locale === code
                                    ? "bg-gray-200 text-gray-700 font-semibold"
                                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
