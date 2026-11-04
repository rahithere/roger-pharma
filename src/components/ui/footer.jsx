'use client'
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const usefulLinks = [
    { name: "Products", href: "/products" },
    { name: "Product Verification", href: "/trustkey" },
    { name: "Partner Program", href: "/partner-program" },
    { name: "Heat Safe", href: "/heat-safe" },
    { name: "Contact", href: "/contact" },
];

export default function Footer() {
    const [contactData, setContactData] = useState({
        email: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        //handle what to do with contact data
    }

    return (
        <footer className="flex min-h-screen flex-col justify-between bg-black px-7 py-16 text-white md:px-10 md:py-20">

            {/* MAIN FOOTER */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-50 px-20 pt-16">

                {/* COLUMN 1 */}
                <div className="flex flex-col items-start">

                    <Link href="/">
                        <Image
                            src="/logo/roger-negative-logo.png"
                            alt="Roger Pharma"
                            width={150}
                            height={55}
                            className="h-auto w-[150px]"
                        />
                    </Link>

                    <p className="mt-5 max-w-sm font-body text-base leading-relaxed text-white">
                        Advanced Pharmaceutical Solutions for
                        Modern Healthcare
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 flex w-full max-w-sm items-center border-b border-[#959595] pb-3"
                    >
                        <input
                            type="email"
                            placeholder="Enter email address"
                            onChange={(e) => {
                                setContactData((prev) => ({ ...prev, email: e.target.value }))
                            }}
                            aria-label="Email address"
                            className="w-full bg-transparent font-body text-base text-white outline-none placeholder:text-[#959595]"
                        />

                        <button
                            type="submit"
                            aria-label="Submit email"
                            className="text-white transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1"
                        >
                            <ArrowUpRight size={24} />
                        </button>
                    </form>

                </div>

                {/* COLUMN 2 */}
                <div className="flex flex-col items-start">

                    <h3 className="font-body text-sm font-normal uppercase text-[#959595]">
                        About Us
                    </h3>

                    <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-white">
                        Engineered Using German Technology.
                        Designed & Developed in Romania.
                    </p>

                    <div className="mt-14">

                        <h3 className="font-body text-sm font-normal uppercase text-[#959595]">
                            Get In Touch
                        </h3>

                        <a
                            href="mailto:support@rogerpharma.com"
                            className="mt-5 inline-block font-body text-base text-white transition-colors hover:text-[#54B2E5]"
                        >
                            support@rogerpharma.com
                        </a>

                    </div>
                </div>

                {/* COLUMN 3 */}
                <div className="flex flex-col items-start">

                    <h3 className="font-body text-sm font-normal uppercase text-[#959595]">
                        Useful Links
                    </h3>

                    <div className="mt-6 flex flex-col items-start gap-3">

                        {usefulLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-body text-base text-white transition-colors duration-300 hover:text-[#54B2E5]"
                            >
                                {link.name}
                            </Link>
                        ))}

                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="mt-16 border-t border-[#333333] pt-6">

                <p className="font-body text-sm text-white">
                    © 2026 Roger Pharma. All Rights Reserved.
                </p>

            </div>
        </footer >
    );
}
