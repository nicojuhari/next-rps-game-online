interface Props {
    label: string;
    rock: string;
    paper: string;
    scissors: string;
    suffix: string;
    suffixClassName?: string;
    subtitle?: React.ReactNode;
}

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
        <p className="block text-sm font-normal text-gray-400 tracking-widest uppercase mb-2">{label}</p>
        <h1 className="font-semibold leading-tight">
            <span className="text-blue-500 text-3xl md:text-4xl">{rock} </span>
            <span className="text-yellow-500 text-3xl md:text-4xl">{paper} </span>
            <span className="text-red-500 text-3xl md:text-4xl">{scissors} </span>
            <span className={suffixClassName}>{suffix}</span>
        </h1>
        {subtitle && <p className="text-gray-400 text-sm font-light">{subtitle}</p>}
    </div>
);

export default AnimatedPageTitle;
