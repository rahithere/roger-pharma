import Image from "next/image";
import { notFound } from "next/navigation";
import { TitleSection } from "@/components/ui/titleSection";
import { pct } from "@/data/products/pct";

// Generate PCT product pages at build time
export function generateStaticParams() {
    return pct.map((product) => ({
        slug: product.slug
    }));
}

export default async function ProductPage({ params }) {

    const { slug } = await params;

    // Find product using dynamic slug
    const product = pct.find(
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
                prevLink={"Products"}
                currentLink={product.name}
            />

            <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-24">

                {/* PRODUCT HERO IMAGE */}
                {product.images.hero.trim() !== "" && (
                    <section className="mb-16 md:mb-20">

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

                    </section>
                )}

                {/* DYNAMIC PRODUCT SECTIONS */}
                {product.sections.map((section, index) => (

                    <section
                        key={index}
                        className="mb-16 md:mb-20"
                    >

                        {/* PARAGRAPH */}
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

                        {/* LIST */}
                        {section.type === "list" && (
                            <>
                                <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                                    {section.title}
                                </h2>

                                <ul className="mt-6 space-y-3 text-base leading-7 md:text-lg md:leading-8">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="list-none">
                                            {i + 1}. {item}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {/* INGREDIENT GROUPS */}
                        {section.type === "ingredient-groups" && (
                            <>
                                <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                                    {section.title}
                                </h2>

                                <div className="mt-8 space-y-8">
                                    {section.items.map((item, i) => (
                                        <div key={i}>
                                            <h3 className="text-lg font-semibold uppercase md:text-xl">
                                                {item.name}
                                            </h3>

                                            <p className="mt-3 text-base leading-7 md:text-lg md:leading-9">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* FEATURE GROUPS */}
                        {section.type === "feature-groups" && (
                            <div className="space-y-8">
                                {section.items.map((item, i) => (
                                    <div key={i}>
                                        <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                                            {item.title}
                                        </h2>

                                        <p className="mt-4 text-base leading-7 md:text-lg md:leading-9">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* WARNING */}
                        {section.type === "warning" && (
                            <div className="bg-[#F0F8FF] p-6 md:p-10">
                                <h2 className="font-heading text-2xl font-medium uppercase md:text-3xl">
                                    {section.title}
                                </h2>

                                <p className="mt-6 text-base leading-7 md:text-lg md:leading-9">
                                    {section.content}
                                </p>
                            </div>
                        )}

                    </section>

                ))}

            </div>

        </main>
    );
}