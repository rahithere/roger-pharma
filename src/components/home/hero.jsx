import Image from "next/image";
import Button from "@/components/ui/button";

export default function Hero() {
    return (
        <>
            {/* HERO  */}
            <section className="grid grid-cols-1 md:grid-cols-12 mt-2 pb-30">

                {/* LEFT CONTENT */}
                <div className="flex flex-col justify-center px-5 py-10 md:col-span-7 md:px-7 md:py-16">

                    <h1 className="font-heading text-4xl font-medium leading-[1.15] tracking-tight text-[#0f171b] md:text-6xl lg:text-[76px]">
                        BUILT ON EUROPEAN PHARMACEUTICAL STANDARDS
                    </h1>

                    <p className="mt-4 max-w-xl font-body text-base leading-[1.8] text-[#0f171b] md:text-lg">
                        Our products are engineered using German pharmaceutical
                        technology and designed & developed in Romania, combining
                        precision manufacturing with advanced formulation expertise.
                    </p>

                    {/* CTA BUTTONS */}
                    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-start md:mt-10">

                        <Button
                            variant="primary"
                            hoverTextBlack={true}
                            href="/products"
                            className="w-full sm:w-auto"
                        >
                            OUR PRODUCTS
                        </Button>

                        <Button
                            variant="secondary"
                            href="/verify"
                            className="w-full sm:w-auto"
                        >
                            VERIFY TRUST KEY
                        </Button>

                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="relative mx-5 mb-5 h-[280px] overflow-hidden md:col-span-5 md:mx-0 md:mb-0 md:h-full md:min-h-[650px]">

                    <Image
                        src="/images/home/hero.jpeg"
                        alt="Pharmaceutical laboratory"
                        fill
                        priority
                        sizes="(max-width: 767px) calc(100vw - 40px), 42vw"
                        className="object-cover"
                    />

                </div>
            </section>

            {/* HEATSAFE SECTION */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 px-5 md:px-10 py-16 md:py-24 pb-30">

                {/* LEFT IMAGE */}
                <div className="w-full">
                    <Image
                        src="/images/home/heat-safe.png"
                        alt="Roger HeatSafe temperature protection"
                        width={700}
                        height={450}
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex flex-col">

                    <span className="font-body text-sm md:text-base text-[#959595] uppercase tracking-wide">
                        Advanced temperature control for uncompromised medicine quality
                    </span>

                    <h2 className="mt-5 font-heading text-3xl md:text-4xl lg:text-[42px] font-medium leading-tight text-[#0f171b ]">
                        HEATSAFE™ PROTECTION
                    </h2>

                    <p className="mt-3 font-body text-base md:text-lg leading-[1.7] text-[#0f171b ]">
                        HeatSafe™ is an integrated protection system designed to safeguard
                        pharmaceutical products from temperature-related degradation.
                        By maintaining precise thermal stability, HeatSafe™ helps preserve
                        the potency, quality, and effectiveness of the product throughout
                        its lifecycle.
                    </p>

                    <p className="mt-5 font-body text-base md:text-lg leading-[1.7] text-[#0f171b ]">
                        This controlled approach ensures that every dose remains safe,
                        reliable, and consistent, giving you complete confidence.
                    </p>

                </div>

            </section>

            {/* AUTHENTICATION  */}
            <section className="relative flex min-h-[75svh] md:min-h-screen items-center justify-center overflow-hidden">

                {/* BACKGROUND IMAGE */}
                <Image
                    src="/images/home/authentication-bg.jpeg"
                    alt="Pharmaceutical laboratory"
                    fill
                    priority={false}
                    sizes="100vw"
                    className="object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/65" />

                {/* CONTENT */}
                <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-5 py-20 text-center">

                    <p className="font-body text-xs md:text-sm font-medium uppercase text-white">
                        Authentication system designed to help you confirm the originality of your medicine
                    </p>

                    <h2 className="mt-5 font-heading text-4xl font-medium leading-[1.1] tracking-tight text-white md:text-6xl lg:text-8xl">
                        YOUR ASSURANCE OF
                        <br className="hidden md:block" />
                        GENUINE MEDICINE
                    </h2>

                    <Button
                        variant="primary"
                        hoverTextBlack={true}
                        href="/verify"
                        className="mt-8"
                    >
                        TRUST KEY™ AUTHENTICATION
                    </Button>

                </div>

            </section>
        </>
    );
}