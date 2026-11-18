import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'


const page = () => {

    const heroImg = "/images/products/reconstitutor/hero.jpg"
    const secondaryImg1 = '/images/products/reconstitutor/s1.jpg'
    const secondaryImg2 = '/images/products/reconstitutor/s2.jpg'
    return (
        <>
            <section className="flex flex-col items-center justify-center bg-black px-5 py-20 text-center md:py-24 lg:py-28">

                <div className="flex flex-col items-center">

                    {/* HEADING */}
                    <h1 className="font-heading text-4xl font-medium uppercase leading-[1.3] tracking-tight text-white sm:text-5xl md:text-[76px]">
                        RECONSTITUTOR™
                    </h1>

                    {/* BREADCRUMB */}
                    <div className="mt-4 flex items-center gap-2 font-body text-sm md:text-base">

                        <Link
                            href="/"
                            className="text-[#555555] transition-colors duration-300 hover:text-white"
                        >
                            Home
                        </Link>

                        <ChevronRight
                            size={17}
                            strokeWidth={2.5}
                            className="text-white"
                        />

                        <span className="text-white">
                            Reconstitutor
                        </span>

                    </div>

                </div>
            </section>


            {/* Product Content */}
            <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-24">

                <section className="mb-16 md:mb-20">

                    <div className="relative mx-auto aspect-[16/10] w-full max-w-3xl overflow-hidden">

                        <Image
                            src={heroImg}
                            alt="Reconstitutor"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 768px"
                            className="object-contain"
                        />

                    </div>

                </section>

                {/* Overview */}
                <section className="mb-16 md:mb-20">
                    <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                        Overview
                    </h2>

                    <p className="mt-6 text-base leading-7 text-black md:mt-8 md:text-lg md:leading-9">
                        RECONSTITUTOR™️, USP is a sterile, non-pyrogenic, sterile water
                        that contains 0.9% benzyl alcohol (9mg/mL) added as a
                        bacteriostatic preservative. Bacteriostatic water can be used
                        multiple times for up to 28 days once opened. It is recommended
                        that after this time you must discard the vial. This preparation
                        of sterile water and benzyl alcohol (BnOH) allows repeated
                        withdrawals to be made from a single 30mL vial.
                    </p>
                </section>


                {/* Product Images */}
                <section className="mb-16 md:mb-20">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
                        <div className="relative aspect-square w-full overflow-hidden">
                            <Image
                                src={secondaryImg1}
                                alt="Reconstitutor - Image 1"
                                fill
                                sizes="(max-width: 639px) 100vw, 50vw"
                                className="object-contain"
                            />
                        </div>

                        <div className="relative aspect-square w-full overflow-hidden">
                            <Image
                                src={secondaryImg2}
                                alt="Reconstitutor - Image 2"
                                fill
                                sizes="(max-width: 639px) 100vw, 50vw"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="mb-16 md:mb-20">
                    <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                        Disclaimer
                    </h2>

                    <p className="mt-6 text-base leading-7 text-black md:mt-8 md:text-lg md:leading-9">
                        Bacteriostatic Water is for research use only. This product is
                        NOT for human use and can be harmful if ingested. This product
                        should only be handled by licensed, qualified professionals.
                        This product is not a drug, food, or cosmetic and should not be
                        misbranded, misused, or mislabeled as a drug, food, or cosmetic.
                    </p>
                </section>

            </div>
        </>
    )
}

export default page