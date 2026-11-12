import Image from "next/image";
import { notFound } from "next/navigation";
import { TitleSection } from "@/components/ui/titleSection"
import { injectables } from "@/data/products/injectables";


// Generate product pages at build time
export function generateStaticParams() {
    return injectables.map((product) => ({
        slug: product.slug
    }));
}


export default async function ProductPage({ params }) {

    const { slug } = await params;

    // Find product using dynamic slug
    const product = injectables.find(
        (item) => item.slug === slug
    );
    console.log(product)

    // Handle invalid product URL
    if (!product) {
        notFound();
    }

    return (
        <main className="bg-white">

            {/* //title section */}
            <TitleSection title={product.name} prevLink={"Products"} currentLink={product.name} />

            <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-24">

                {/* PRODUCT HERO IMAGE */}

                {product.images.hero.trim() !== "" ?
                    (<section className="mb-16 md:mb-20">

                        <div className="relative mx-auto aspect-[16/10] w-full max-w-3xl overflow-hidden">

                            <Image
                                src={product.images.hero}
                                alt={product.name}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 768px"
                                className="object-contain"
                            />

                        </div>

                    </section>)
                    :
                    null
                }



                {/* PRODUCT OVERVIEW */}

                {product.overview.trim() !== "" ?
                    (
                        <section className="mb-16 bg-[#F0F8FF] p-6 md:mb-20 md:p-10 lg:p-12">

                            <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                                PRODUCT OVERVIEW!
                            </h2>

                            <p className="mt-6 text-base leading-7 text-black md:mt-8 md:text-lg md:leading-9">
                                {product.overview}
                            </p>

                        </section>
                    )
                    : null}


                {/* HOW DOES IT WORK */}

                {product.howDoesItWork.trim() !== "" ?
                    (<section className="mb-16 md:mb-20">

                        <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                            HOW DOES IT WORK?
                        </h2>

                        <p className="mt-6 text-base leading-7 text-black md:mt-8 md:text-lg md:leading-9">
                            {product.howDoesItWork}
                        </p>

                    </section>)
                    : null}




                {/* USAGE AND DOSAGE */}

                {product.dosage.trim() !== "" ?
                    (
                        <section className="mb-16 md:mb-20">

                            <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                                PROPER USAGE AND DOSAGE
                            </h2>

                            <p className="mt-6 text-base leading-7 text-black md:mt-8 md:text-lg md:leading-9">
                                {product.dosage}
                            </p>

                        </section>
                    )
                    : null}




                {/* BENEFITS */}

                {product.benefits.desc.trim() !== "" ?
                    (<section className="mb-16 md:mb-20">

                        <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                            WHAT ARE THE BENEFITS?
                        </h2>

                        <p className="mt-5 text-base leading-7 md:text-lg">
                            {product.benefits.desc}
                        </p>

                        <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-7 md:text-lg md:leading-8">

                            {product.benefits.items.map((item, index) => (
                                <li key={index} className="list-none">
                                    {index + 1}. {item}
                                </li>
                            ))}

                        </ul>

                    </section>)
                    : null}




                {/* SECONDARY PRODUCT IMAGES */}

                {product.images.secondary?.some(Boolean) ?
                    (
                        <section className="mb-16 md:mb-20">

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">

                                {product.images.secondary.map((image, index) => (

                                    <div
                                        key={image}
                                        className="relative aspect-[4/3] w-full overflow-hidden"
                                    >

                                        <Image
                                            src={image}
                                            alt={`${product.name} product view ${index + 1}`}
                                            fill
                                            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 560px"
                                            loading="lazy"
                                            className="object-contain"
                                        />

                                    </div>

                                ))}

                            </div>

                        </section>

                    )
                    : null}



                {/* SIDE EFFECTS */}

                {product.sideEffects?.some(Boolean) ?
                    (
                        <section className="mb-10">

                            <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                                SIDE EFFECTS
                            </h2>

                            <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-7 md:text-lg md:leading-8">

                                {product.sideEffects.map((effect, index) => (
                                    <li key={index} className="list-none">
                                        {index + 1}. {effect}
                                    </li>
                                ))}

                            </ul>

                        </section>
                    ) : null}




            </div>

        </main>
    );
}