import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const page = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center bg-black px-5 py-20 text-center md:py-24 lg:py-28">

                <div className="flex flex-col items-center">

                    {/* HEADING */}
                    <h1 className="font-heading text-4xl font-medium uppercase leading-[1.3] tracking-tight text-white sm:text-5xl md:text-[76px]">
                        NASAL SPRAY
                        <br />
                        PEPTIDES
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
                            Nasal Spray Peptides
                        </span>

                    </div>

                </div>
            </section>

            {/* TEMPORARY SECTION  */}
            <section className='py-60'>
                <div className=' flex justify-center align-center'>
                    <h2 className='text-center font-medium text-6xl'>COMING SOON</h2>
                </div>
            </section>
        </>
    )
}

export default page