import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { tablets } from '@/data/products/tablets'
import Image from 'next/image'

const page = () => {
    return (
        <main>
            {/* NOT USING TITLECOMPONENT  */}
            <section className="flex flex-col items-center justify-center bg-black px-5 py-20 text-center md:py-24 lg:py-28">

                <div className="flex flex-col items-center">

                    {/* HEADING */}
                    <h1 className="font-heading text-4xl font-medium uppercase leading-[1.3] tracking-tight text-white sm:text-5xl md:text-[76px]">
                        Tablets
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
                            Tablets
                        </span>

                    </div>

                </div>
            </section>

            <section className="w-full px-4 py-12 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {tablets.map((product) => (
                        <Link
                            key={product.id}
                            href={`/tablets/${product.slug}`}
                            className="group block"
                        >
                            {/* Product Image */}
                            <div className="relative w-full aspect-square overflow-hidden">
                                <Image
                                    src={product.images.hero}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Product Title */}
                            <h2 className="mt-4 text-center text-lg font-base">
                                {product.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default page