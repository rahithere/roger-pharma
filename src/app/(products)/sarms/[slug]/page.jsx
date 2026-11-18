import Image from "next/image";
import { notFound } from "next/navigation";
import { TitleSection } from "@/components/ui/titleSection";
import { sarms } from "@/data/products/sarms";

export function generateStaticParams() {
    return sarms.map((product) => ({
        slug: product.slug
    }));
}

function ProductImageGrid({ images, productName }) {
    if (!images?.length) return null;

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="relative aspect-square overflow-hidden"
                >
                    <Image
                        src={image}
                        alt={`${productName} - Image ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
    );
}

export default async function ProductPage({ params }) {
    const { slug } = await params;

    const product = sarms.find((item) => item.slug === slug);

    if (!product) {
        notFound();
    }

    const secondaryImages = product.images?.secondary || [];

    return (
        <main className="bg-white">
            <TitleSection
                title={product.name}
                prevLink="Products"
                currentLink={product.name}
            />

            <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-24">

                {/* FIRST TWO IMAGES */}
                {secondaryImages.length > 0 && (
                    <section className="mb-16 md:mb-20">
                        <ProductImageGrid
                            images={secondaryImages.slice(0, 2)}
                            productName={product.name}
                        />
                    </section>
                )}

                {/* PRODUCT CONTENT */}
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

                                <p className="mt-6 whitespace-pre-line text-base leading-7 text-black md:mt-8 md:text-lg md:leading-9">
                                    {section.content}
                                </p>
                            </>
                        )}

                        {section.type === "list" && (
                            <>
                                <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                                    {section.title}
                                </h2>

                                <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-7 text-black md:mt-8 md:text-lg md:leading-9">
                                    {section.items?.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        )}


                    </section>
                ))}

                <section className="mb-16 md:mb-20">
                    {/* LAST TWO IMAGES AFTER BENEFITS */}
                    {secondaryImages.length > 0 && (
                        <section className="mb-16 md:mb-20">
                            <ProductImageGrid
                                images={secondaryImages.slice(2, 4)}
                                productName={product.name}
                            />
                        </section>
                    )}
                </section>

            </div>
        </main>
    );
}