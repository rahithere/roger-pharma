
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function AnnouncementPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-3 py-4 sm:px-6 sm:py-6"
            onClick={() => setIsOpen(false)}
        >
            <div
                className="relative w-full max-w-[520px]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close announcement"
                    className="absolute right-2 top-2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/90 text-white shadow-md transition hover:bg-black sm:-right-3 sm:-top-3"
                >
                    <X size={20} strokeWidth={2} />
                </button>

                {/* Announcement Image */}
                <div className="relative flex max-h-[calc(100dvh-32px)] w-full items-center justify-center overflow-hidden rounded-lg bg-white shadow-2xl sm:max-h-[90dvh]">
                    <Image
                        src="/images/press-release/announcement.jpg"
                        alt="Roger Pharma press release announcement"
                        width={1080}
                        height={1350}
                        priority
                        sizes="(max-width: 640px) 94vw, 520px"
                        className="h-auto max-h-[calc(100dvh-32px)] w-full object-contain sm:max-h-[90dvh]"
                    />
                </div>
            </div>
        </div>
    );
}
