'use client'


import Link from "next/link";
import { ChevronRight, Loader2 } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/button"
import axios from "axios";
const page = () => {
    const [productCode, setProductCode] = useState({
        code: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [apiError, setApiError] = useState("")
    const [message, setMessage] = useState("")

    const handleCodeSubmit = async (e) => {
        e.preventDefault()

        try {
            setIsSubmitting(true)
            const response = await axios.post('/api/trustkey-verify', { uniqueKey: productCode.code })
            console.log(response)
            setMessage(response.data.message)
        } catch (error) {
            console.error("Failed to send the data: ", error.response.data.message)
            setApiError(error.response.data.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <section className="flex flex-col items-center justify-center bg-black px-5 py-20 text-center md:py-24 lg:py-28">

                <div className="flex flex-col items-center">

                    {/* HEADING */}
                    <h1 className="font-heading text-4xl font-medium uppercase leading-[1.3] tracking-tight text-white sm:text-5xl md:text-[76px]">
                        TRUSTKEY™
                        <br />
                        VERIFICATION
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
                            TRUSTKEY™ VERIFICATION
                        </span>

                    </div>

                </div>
            </section>

            <section className="bg-white px-5 py-16 md:px-10 md:py-20 lg:py-60">

                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="font-heading text-2xl font-medium uppercase leading-[1.5] text-black md:text-3xl">
                            GOT YOUR PRODUCT?
                            <br />
                            ENTER THE TRUSTKEY™ TO VALIDATE YOUR
                            PRODUCT'S AUTHENTICITY.
                        </h2>
                    </div>

                    {/* RIGHT FORM */}
                    <form
                        onSubmit={handleCodeSubmit}
                        className="flex flex-col gap-3">

                        <input
                            type="text"
                            placeholder="ENTER YOUR PRODUCT CODE"
                            onChange={(e) => {
                                setProductCode((prev) => ({ ...prev, code: e.target.value }))
                            }}
                            aria-label="Enter your product code"
                            className="w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-4 font-body text-base text-black outline-none transition-colors placeholder:text-black focus:border-[#54B2E5]"
                        />

                        <button
                            type="submit"
                            className={`w-full rounded-xl bg-[#54B2E5] px-5 py-4 font-body text-lg font-medium uppercase text-white transition-colors duration-300  flex justify-center items-center ${productCode.code.trim() === "" ? "bg-gray-500" : "bg-[#54B2E5] hover:bg-[#399CCF]"}`}
                            disabled={productCode.code.trim() === ""}
                        >
                            {isSubmitting ? <Loader2 className="" /> : "VERIFY PRODUCT"}
                        </button>

                    </form>
                    {message && (
                        <p className="mt-3 text-center text-sm text-green-600">
                            {message}
                        </p>
                    )}
                    {
                        apiError && (
                            <p className="mt-2 text-center text-sm text-red-600">
                                {apiError}
                            </p>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default page