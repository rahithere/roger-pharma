"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "@/components/ui/button";
import { useState } from "react";


const products = [
    { name: "Injectables", href: "/injectables" },
    { name: "Tablets", href: "/tablets" },
    { name: "PCT & Hormone Support", href: "/pct" },
    { name: "SARMS", href: "/sarms" },
    { name: "Peptides", href: "/peptides" },
    { name: "Oral Peptides", href: "/oral-peptides" },
    { name: "Performance & Wellness", href: "/performance-wellness" },
    { name: "Reconstitutor", href: "/reconstitutor" },
    { name: "Nasal Spray Peptides", href: "/nasal-spray-peptides" },
    { name: "Transdermal Patches", href: "/transdermal-patches" },
];

const moreLinks = [
    { name: "Product Authentication", href: "/trustkey" },
    { name: "Partner Program", href: "/partner-program" },
    { name: "Heat Safe", href: "/heat-safe" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null);

    const pathname = usePathname();

    const isActive = (href) =>
        href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);

    const navStyle = (href) =>
        `flex items-center gap-2 text-sm font-body font-medium uppercase transition-colors duration-300 ${isActive(href)
            ? "underline decoration-[#54B2E5] underline-offset-4 text-black"
            : "text-black hover:text-[#54B2E5]"
        }`;

    const dropdownStyle =
        "absolute left-0 top-full z-50 min-w-60 bg-white p-5 shadow-lg invisible opacity-0 translate-y-2 pointer-events-none transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto";

    const dropdownLinkStyle =
        "block py-3 text-sm font-body text-black transition-colors duration-200 hover:text-[#54B2E5]";

    return (
        <header className="relative z-50 w-full border-b border-[#E5E5E5] bg-white">

            <nav className="relative flex h-[90px] items-center justify-between px-4 md:h-40 md:px-6">

                {/* LOGO */}
                <Link href="/" className="relative z-10 shrink-0">
                    <Image
                        src="/logo/roger-logo.png"
                        alt="Roger Pharma"
                        width={260}
                        height={90}
                        priority
                        className="h-auto w-[125px] md:w-[260px] object-contain"
                    />
                </Link>

                {/* NAVIGATION LINKS */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">

                    {/* HOME */}
                    <Link href="/" className={navStyle("/")}>
                        HOME
                    </Link>

                    {/* PRODUCTS DROPDOWN */}
                    <div className="group relative py-5">

                        <span
                            className={navStyle("/products")}
                        >
                            PRODUCTS

                            <ChevronDown
                                size={16}
                                strokeWidth={2}
                                className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                            />
                        </span>

                        <div className={dropdownStyle}>
                            {products.map((product) => (
                                <Link
                                    onClick={(e) => {
                                        e.currentTarget.blur();
                                    }}
                                    key={product.href}
                                    href={product.href}
                                    className={dropdownLinkStyle}
                                >
                                    {product.name}
                                </Link>
                            ))}
                        </div>

                    </div>

                    {/* MORE DROPDOWN */}
                    <div className="group relative py-5">

                        <button
                            type="button"
                            className={navStyle("/about")}
                        >
                            MORE

                            <ChevronDown
                                size={16}
                                strokeWidth={2}
                                className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                            />
                        </button>

                        <div className={dropdownStyle}>
                            {moreLinks.map((item) => (
                                <Link
                                    onClick={(e) => {
                                        e.currentTarget.blur();
                                    }}
                                    key={item.href}
                                    href={item.href}
                                    className={dropdownLinkStyle}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                    </div>

                </div>

                {/* CTA */}
                <div className="relative z-10 hidden md:block">
                    <Button variant="primary" href="/contact">
                        GET IN TOUCH
                    </Button>
                </div>

                {/* MOBILE MENU BUTTON  */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-black"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={25} /> : <Menu size={25} />}
                </button>
            </nav>


            {
                isOpen && (
                    <div className="absolute left-0 top-full z-50 w-full border-t border-[#E5E5E5] bg-white px-6 py-6 md:hidden">

                        <div className="flex flex-col gap-6">

                            {/* HOME */}
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="font-body text-sm"
                            >
                                HOME
                            </Link>

                            {/* PRODUCTS */}
                            <div>

                                <button
                                    onClick={() =>
                                        setActiveDropdown(
                                            activeDropdown === "products" ? null : "products"
                                        )
                                    }
                                    className="flex w-full items-center justify-between font-body text-sm"
                                    aria-expanded={activeDropdown === "products"}
                                >
                                    PRODUCTS

                                    <ChevronDown
                                        size={16}
                                        strokeWidth={2}
                                        className={`transition-transform duration-300 ${activeDropdown === "products" ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${activeDropdown === "products"
                                        ? "grid-rows-[1fr] opacity-100 mt-4"
                                        : "grid-rows-[0fr] opacity-0 mt-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="flex flex-col gap-4 border-l border-[#E5E5E5] pl-4">
                                            {products.map((product) => (
                                                <Link
                                                    key={product.href}
                                                    href={product.href}
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setActiveDropdown(null);
                                                    }}
                                                    className="font-body text-sm text-gray-500 hover:text-[#54B2E5] transition-colors"
                                                >
                                                    {product.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* MORE */}
                            <div>

                                <button
                                    onClick={() =>
                                        setActiveDropdown(
                                            activeDropdown === "more" ? null : "more"
                                        )
                                    }
                                    className="flex w-full items-center justify-between font-body text-sm"
                                    aria-expanded={activeDropdown === "more"}
                                >
                                    MORE

                                    <ChevronDown
                                        size={16}
                                        strokeWidth={2}
                                        className={`transition-transform duration-300 ${activeDropdown === "more" ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${activeDropdown === "more"
                                        ? "grid-rows-[1fr] opacity-100 mt-4"
                                        : "grid-rows-[0fr] opacity-0 mt-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="flex flex-col gap-4 border-l border-[#E5E5E5] pl-4">
                                            {moreLinks.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setActiveDropdown(null);
                                                    }}
                                                    className="font-body text-sm text-gray-500 hover:text-[#54B2E5] transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <Button
                                variant="primary"
                                href="/contact"
                                className="w-full"
                                onClick={() => {
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                }}
                            >
                                GET IN TOUCH
                            </Button>

                        </div>
                    </div>
                )
            }

        </header >
    );
}