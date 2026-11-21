import { injectables } from "@/data/products/injectables"
import { tablets } from "@/data/products/tablets"
import { pct } from "@/data/products/pct"
import { peptides } from "@/data/products/peptides"
import { oralPeptides } from "@/data/products/oral-peptides"
import { performanceWellness } from "@/data/products/performance-wellness"
import { sarms } from "@/data/products/sarms"
import { TitleSection } from "@/components/ui/titleSection"
import Link from "next/link"
import Image from "next/image"

export default function page() {

    return (
        <>
            <TitleSection
                title={"Products"}
                prevLink={"home"}
                currentLink={"products"}
            />

            {/* main all product list container  */}
            <section className="mx-auto">

                {/* INJECTABLES  */}
                <section className="w-full px-4 py-12 md:px-8 lg:px-12">
                    <h2 className="font-medium text-center text-black text-4xl">INJECTABLES</h2>
                    {/* horizontal line  */}
                    <div className="w-[70%] md:w-[50%] lg:w-[50%] h-1 bg-sky-500 mx-auto my-4"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                        {injectables.map((product) => (
                            <Link
                                key={product.name}
                                href={`/injectables/${product.slug}`}
                                className="group-block"
                            >
                                <div className="relative w-full aspect-square overflow-hidden">
                                    <Image
                                        src={product.images?.hero}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* product title  */}
                                <h2 className="mt-4 text-center text-lg font-base">
                                    {product.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* TABLETS  */}
                <section className="w-full px-4 py-12 md:px-8 lg:px-12">
                    <h2 className="font-medium text-center text-black text-4xl">TABLETS</h2>
                    {/* horizontal line  */}
                    <div className="w-[70%] md:w-[50%] lg:w-[50%] h-1 bg-sky-500 mx-auto my-4"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

                        {tablets.map((product) => (
                            <Link
                                key={product.name}
                                href={`/tablets/${product.slug}`}
                                className="group-block"
                            >
                                <div className="relative w-full aspect-square overflow-hidden">
                                    <Image
                                        src={product.images?.hero}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* product title  */}
                                <h2 className="mt-4 text-center text-lg font-base">
                                    {product.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* PCT  */}
                <section className="w-full px-4 py-12 md:px-8 lg:px-12">
                    <h2 className="font-medium text-center text-black text-4xl">PCT & HORMONE SUPPPORT</h2>
                    {/* horizontal line  */}
                    <div className="w-[70%] md:w-[50%] lg:w-[50%] h-1 bg-sky-500 mx-auto my-4"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

                        {pct.map((product) => (
                            <Link
                                key={product.name}
                                href={`/pct/${product.slug}`}
                                className="group-block"
                            >
                                <div className="relative w-full aspect-square overflow-hidden">
                                    <Image
                                        src={product.images?.hero}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* product title  */}
                                <h2 className="mt-4 text-center text-lg font-base">
                                    {product.name}
                                </h2>
                            </Link>
                        ))}

                    </div>
                </section>

                {/* SARMS  */}
                <section className="w-full px-4 py-12 md:px-8 lg:px-12">
                    <h2 className="font-medium text-center text-black text-4xl">SARMS</h2>
                    {/* horizontal line  */}
                    <div className="w-[70%] md:w-[50%] lg:w-[50%] h-1 bg-sky-500 mx-auto my-4"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

                        {sarms.map((product) => (
                            <Link
                                key={product.name}
                                href={`/sarms/${product.slug}`}
                                className="group-block"
                            >
                                <div className="relative w-full aspect-square overflow-hidden">
                                    <Image
                                        src={product.images?.secondary[0]}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* product title  */}
                                <h2 className="mt-4 text-center text-lg font-base">
                                    {product.name}
                                </h2>
                            </Link>
                        ))}

                    </div>
                </section>

                {/* PEPTIDES  */}
                <section className="w-full px-4 py-12 md:px-8 lg:px-12">
                    <h2 className="font-medium text-center text-black text-4xl">PEPTIDES</h2>
                    {/* horizontal line  */}
                    <div className="w-[70%] md:w-[50%] lg:w-[50%] h-1 bg-sky-500 mx-auto my-4"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

                        {peptides.map((product) => (
                            <Link
                                key={product.name}
                                href={`/peptides/${product.slug}`}
                                className="group-block"
                            >
                                <div className="relative w-full aspect-square overflow-hidden">
                                    <Image
                                        src={product.images?.secondary[0]}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* product title  */}
                                <h2 className="mt-4 text-center text-lg font-base">
                                    {product.name}
                                </h2>
                            </Link>
                        ))}

                    </div>
                </section>

                {/* ORAL-PEPTIDES  */}
                <section className="w-full px-4 py-12 md:px-8 lg:px-12">
                    <h2 className="font-medium text-center text-black text-4xl">ORAL PEPTIDES</h2>
                    {/* horizontal line  */}
                    <div className="w-[70%] md:w-[50%] lg:w-[50%] h-1 bg-sky-500 mx-auto my-4"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

                        {oralPeptides.map((product) => (
                            <Link
                                key={product.name}
                                href={`/oral-peptides/${product.slug}`}
                                className="group-block"
                            >
                                <div className="relative w-full aspect-square overflow-hidden">
                                    <Image
                                        src={product.images?.secondary[0]}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* product title  */}
                                <h2 className="mt-4 text-center text-lg font-base">
                                    {product.name}
                                </h2>
                            </Link>
                        ))}

                    </div>
                </section>

                {/* PERFORMANCE WELLNESS  */}
                <section className="w-full px-4 py-12 md:px-8 lg:px-12">
                    <h2 className="font-medium text-center text-black text-4xl">PERFORMANCE & WELLNESS</h2>
                    {/* horizontal line  */}
                    <div className="w-[70%] md:w-[50%] lg:w-[50%] h-1 bg-sky-500 mx-auto my-4"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

                        {performanceWellness.map((product) => (
                            <Link
                                key={product.name}
                                href={`/performance-wellness/${product.slug}`}
                                className="group-block"
                            >
                                <div className="relative w-full aspect-square overflow-hidden">
                                    <Image
                                        src={product.images?.secondary[0]}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* product title  */}
                                <h2 className="mt-4 text-center text-lg font-base">
                                    {product.name}
                                </h2>
                            </Link>
                        ))}

                    </div>
                </section>

            </section>
        </>
    )
}