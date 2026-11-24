import { Solway } from "next/font/google";

const solway = Solway({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <span className={`text-xl font-medium font-serif tracking-tight text-stone-900 ${solway.className}`}>
                        MedSpa
                    </span>
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
                    <a
                        href="#services"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Services
                    </a>
                    <a
                        href="#about"
                        className="hover:text-stone-900 transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="#testimonials"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Testimonials
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Contact
                    </a>
                </nav>
                <div>
                    <a
                        href="#contact"
                        className="rounded-full bg-stone-200/60 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-stone-800 hover:text-white"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </header>
    );
}
