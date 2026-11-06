'use client'

import Link from "next/link";
import { ChevronRight, Mail } from 'lucide-react'
import { useState } from "react";
import Button from "@/components/ui/button"
import axios from "axios";
const page = () => {

    const [userData, setUserData] = useState({
        fullName: "",
        wpNumber: "",
        countryState: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, SetMessage] = useState("")
    const [apiError, setApiError] = useState("")

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        //todo: send data to backend
        console.log(userData)

        const { fullName, wpNumber, countryState, message } = userData
        try {
            isSubmitting(true)
            const response = await axios.post('/api/partner-program', {
                fullName,
                wpNumber,
                countryState,
                message
            })

            SetMessage(response.data.message)
        } catch (error) {
            console.error("Failed to send data")
            setApiError(error?.response?.data?.message || "Failed to send data")
        } finally {
            isSubmitting(false)
        }



        e.currentTarget.reset();
    }

    return (
        <>
            <section className="flex flex-col items-center justify-center bg-black px-5 py-20 text-center md:py-24 lg:py-28">

                <div className="flex flex-col items-center">

                    {/* HEADING */}
                    <h1 className="font-heading text-4xl font-medium uppercase leading-[1.3] tracking-tight text-white sm:text-5xl md:text-[76px]">
                        PARTNER PROGRAM
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
                            Partner Program
                        </span>

                    </div>

                </div>
            </section>

            {/* CONTACT SECTION  */}
            <section className="bg-[#F5F5F5] px-5 py-16 md:px-7 md:py-20">

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-0">

                    {/* LEFT - PARTNER FORM */}
                    <div className="bg-white px-6 py-12 md:px-10 md:py-16">

                        <h2 className="mx-auto max-w-lg text-center font-heading text-xl font-medium uppercase leading-relaxed text-black md:text-2xl">
                            Submit Your Details for Our Partner Program
                        </h2>

                        <form
                            onSubmit={handleFormSubmit}
                            className="mt-8 flex flex-col gap-6">

                            {/* NAME AND WHATSAPP */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={(e) => {
                                        setUserData((prev) => ({ ...prev, fullName: e.target.value }))
                                    }}
                                    aria-label="Full Name"
                                    className="h-14 w-full border border-[#E0E0E0] bg-white px-6 font-body text-base text-black outline-none placeholder:text-black focus:border-[#54B2E5]"
                                />

                                <input
                                    type="tel"
                                    placeholder="WhatsApp Number"
                                    onChange={(e) => {
                                        setUserData((prev) => ({ ...prev, wpNumber: e.target.value }))
                                    }}
                                    aria-label="WhatsApp Number"
                                    className="h-14 w-full border border-[#E0E0E0] bg-white px-6 font-body text-base text-black outline-none placeholder:text-black focus:border-[#54B2E5]"
                                />

                            </div>

                            {/* EMAIL */}
                            <input
                                type="email"
                                placeholder="Email Address"
                                onChange={(e) => {
                                    setUserData((prev) => ({ ...prev, wpNumber: e.target.value }))
                                }}
                                aria-label="Email Address"
                                className="h-14 w-full border border-[#E0E0E0] bg-white px-6 font-body text-base text-black outline-none placeholder:text-black focus:border-[#54B2E5]"
                            />

                            {/* COUNTRY */}
                            <input
                                type="text"
                                placeholder="Country & State"
                                onChange={(e) => {
                                    setUserData((prev) => ({ ...prev, countryState: e.target.value }))
                                }}
                                aria-label="Country and State"
                                className="h-14 w-full border border-[#E0E0E0] bg-white px-6 font-body text-base text-black outline-none placeholder:text-black focus:border-[#54B2E5]"
                            />

                            {/* MESSAGE */}
                            <textarea
                                placeholder="Write Your Message"
                                onChange={(e) => {
                                    setUserData((prev) => ({ ...prev, message: e.target.value }))
                                }}
                                aria-label="Write Your Message"
                                rows={5}
                                className="min-h-40 w-full resize-y border border-[#E0E0E0] bg-white px-6 py-4 font-body text-base text-black outline-none placeholder:text-black focus:border-[#54B2E5]"
                            />

                            {/* SUBMIT */}
                            <Button addArrow={false} hoverTextBlack={true} className={"w-fit px-8 py-4 text-white hover:text-white hover:bg-black"} type={"submit"}>SEND MESSAGE</Button>

                        </form>

                        {message && (
                            <p className="py-4 px-2 mt-2 text-sm text-green-600">
                                {message}
                            </p>
                        )}

                        {apiError && (
                            <p className="py-4 px-2 mt-3 text-sm text-red-600">
                                {apiError}
                            </p>
                        )}

                    </div>

                    {/* RIGHT - ALTERNATIVE CONTACT */}
                    <div className="flex flex-col justify-center px-5 py-8 md:px-16 lg:px-20">

                        <p className="font-body text-sm font-medium uppercase text-[#959595]">
                            Only for serious distributors
                        </p>

                        <h2 className="mt-3 max-w-lg font-heading text-3xl font-medium uppercase leading-[1.4] text-black md:text-4xl">
                            Alternatively, Write Us At
                        </h2>

                        <a
                            href="mailto:partner@rogerpharma.com"
                            className="mt-3 flex items-center gap-3 font-body text-base text-black transition-colors hover:text-[#54B2E5] md:text-lg"
                        >
                            <Mail size={20} strokeWidth={1.8} />
                            partner@rogerpharma.com
                        </a>

                    </div>

                </div>

            </section >
        </>
    )
}

export default page