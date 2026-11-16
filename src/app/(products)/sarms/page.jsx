import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { sarms } from '@/data/products/sarms'


const page = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center bg-black px-5 py-20 text-center md:py-24 lg:py-28">

                <div className="flex flex-col items-center">

                    {/* HEADING */}
                    <h1 className="font-heading text-4xl font-medium uppercase leading-[1.3] tracking-tight text-white sm:text-5xl md:text-[76px]">
                        SARMS
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
                            SARMS
                        </span>

                    </div>

                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {sarms.map((product) => (
                        <Link
                            key={product.id}
                            href={`/sarms/${product.slug}`}
                            className="group block"
                        >
                            {/* PRODUCT IMAGE */}
                            <div className="relative aspect-square overflow-hidden bg-gray-50">
                                {product.images?.secondary?.[0] && (
                                    <Image
                                        src={product.images.secondary[0]}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                            </div>

                            {/* PRODUCT NAME */}
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