import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { pct } from '@/data/products/pct'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center bg-black px-5 py-20 text-center md:py-24 lg:py-28">

                <div className="flex flex-col items-center">

                    {/* HEADING */}
                    <h1 className="font-heading text-4xl font-medium uppercase leading-[1.3] tracking-tight text-white sm:text-5xl md:text-[76px]">
                        PCT & Hormone
                        <br className='' />
                        Support
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
                            PCT & Hormone Support
                        </span>

                    </div>

                </div>
            </section>

            {/* PCT PRODUCT GRID */}
            <section className="w-full px-4 py-12 md:px-8 lg:px-12">

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {pct.map((product) => (
                        <Link
                            key={product.id}
                            href={`/pct/${product.slug}`}
                            className="group block"
                        >

                            {/* PRODUCT IMAGE */}
                            <div className="relative aspect-square w-full overflow-hidden">

                                {product.images.hero && (
                                    <Image
                                        src={product.images.hero}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                )}

                            </div>

                            {/* PRODUCT TITLE */}
                            <h2 className="mt-4 text-center text-lg font-base">
                                {product.name}
                            </h2>

                        </Link>
                    ))}

                </div>

            </section>
        </>
    )
}

export default page