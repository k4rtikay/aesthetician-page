import Image from "next/image";
import { Award, ShieldCheck, Sparkles } from "lucide-react";
import { Solway } from "next/font/google";

const solway = Solway({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export function HeroSection() {
    return (
        <section className="relative overflow-hidden mx-4 mt-2 py-8 sm:py-10 min-h-172 h-172 rounded-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Medical Spa Ambiance"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>

            {/* Hero Content */}
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between">
                {/* Top: Headline, Subheadline, CTA Buttons */}
                <div className="max-w-3xl">
                    <h1
                        className={`mt-4 text-4xl font-medium tracking-tight text-stone-100 sm:text-6xl ${solway.className}`}
                    >
                        Your Best Skin, Revealed.
                    </h1>
                    <p className="max-w-2xl mt-6 text-base leading-8 text-stone-100 text-pretty text-shadow-xs">
                        Physician-supervised aesthetic procedures and
                        personalized skincare, tailored to your skin and your
                        goals, for confidence you can see.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="rounded-full bg-stone-100 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-stone-800 hover:text-white"
                        >
                            Book a Consultation
                        </a>
                        {/*<a
                            href="#services"
                            className="rounded-full border border-stone-100/15 bg-stone-800/15 px-6 py-3 text-sm font-medium text-stone-200 transition-colors hover:bg-white/60"
                        >
                            View Treatments
                        </a>*/}
                    </div>
                </div>

                {/* Bottom: Credibility Signals */}
                <div className="w-full max-w-2xl pt-6 pb-2">
                    <div className="flex flex-col gap-3 text-stone-100 text-xs sm:text-sm text-shadow-xs">
                        <div className="flex items-center gap-3">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-stone-100">
                                <Award className="h-3.5 w-3.5" />
                            </div>
                            <span>10+ years of clinical experience</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-stone-100">
                                <ShieldCheck className="h-3.5 w-3.5" />
                            </div>
                            <span>
                                Led by Dr. Evelyn Vance, MD, Dermatology (Reg.
                                #MED-48291)
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-stone-100">
                                <Sparkles className="h-3.5 w-3.5" />
                            </div>
                            <span>
                                Free skin assessment before any treatment
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
