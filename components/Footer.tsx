const Footer = () => {
    return (
        <footer className="bg-white/10 border-t border-gray-100">
            <div className="h-14 flex items-center container text-center justify-center gap-1">
                Created with{" "}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-600" viewBox="0 0 256 256">
                    <path
                        fill="currentColor"
                        d="M236 92c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a8.1 8.1 0 0 1-7.8 0C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36Z"
                    />
                </svg>{" "}
                by{" "}
                <a href="https://nicojuhari.com" title="Web design by Nick">
                    {" "}
                    Nick
                </a>
            </div>
        </footer>
    );
};

export default Footer;
