import Image from "next/image";
import { notFound } from "next/navigation";
import { TitleSection } from "@/components/ui/titleSection";
import { performanceWellness } from "@/data/products/performance-wellness";

// Generate product pages at build time
export function generateStaticParams() {
    return performanceWellness.map((product) => ({
        slug: product.slug
    }));
}

export default async function ProductPage({ params }) {

    const { slug } = await params;

    // Find product using slug
    const product = performanceWellness.find(
        (item) => item.slug === slug
    );

    // Handle invalid product URL
    if (!product) {
        notFound();
    }

    return (
        <main className="bg-white">

            {/* TITLE SECTION */}
            <TitleSection
                title={product.name}
                prevLink="Products"
                currentLink={product.name}
            />

            <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-24">

                {/* PRODUCT SECTIONS */}
                {product.sections?.map((section, index) => (

                    <section
                        key={index}
                        className="mb-16 md:mb-20"
                    >

                        {section.type === "paragraph" && (
                            <>
                                <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                                    {section.title}
                                </h2>

                                <p className="mt-6 text-base leading-7 text-black md:mt-8 md:text-lg md:leading-9">
                                    {section.content}
                                </p>
                            </>
                        )}

                    </section>

                ))}

                {/* SECONDARY PRODUCT IMAGES */}
                {product.images.secondary?.length > 0 && (
                    <section className="mt-16 md:mt-20">

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                            {product.images.secondary.map((image, index) => (

                                <div
                                    key={index}
                                    className="relative aspect-square overflow-hidden"
                                >

                                    <Image
                                        src={image}
                                        alt={`${product.name} - Image ${index + 1}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                                        className="object-contain"
                                    />

                                </div>

                            ))}

                        </div>

                    </section>
                )}

            </div>

        </main>
    );
}