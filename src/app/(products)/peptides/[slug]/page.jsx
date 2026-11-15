
import Image from "next/image";
import { notFound } from "next/navigation";
import { TitleSection } from "@/components/ui/titleSection";
import { peptides } from "@/data/products/peptides";

// Generate all peptide product pages
export function generateStaticParams() {
    return peptides.map((product) => ({
        slug: product.slug
    }));
}

export default async function ProductPage({ params }) {

    const { slug } = await params;

    const product = peptides.find(
        (item) => item.slug === slug
    );

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

                {/* PRODUCT IMAGES */}
                {product.images.secondary?.length > 0 && (
                    <section className="mb-16 md:mb-20">

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                            {product.images.secondary.map((image, index) => (

                                <div
                                    key={index}
                                    className="relative aspect-square w-full overflow-hidden"
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} - Image ${index + 1}`}
                                        fill
                                        priority={index === 0}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-contain"
                                    />
                                </div>

                            ))}

                        </div>

                    </section>
                )}

                {/* PRODUCT SECTIONS */}
                {product.sections?.map((section, index) => (

                    <section
                        key={index}
                        className="bg-[#EFF7FD] px-6 py-8 md:px-10 md:py-10"
                    >

                        {section.type === "paragraph" && (
                            <>
                                <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                                    {section.title}!
                                </h2>

                                <p className="mt-8 text-base leading-8 text-black md:text-lg md:leading-9">
                                    {section.content}
                                </p>
                            </>
                        )}

                    </section>

                ))}

            </div>

        </main>
    );
}
