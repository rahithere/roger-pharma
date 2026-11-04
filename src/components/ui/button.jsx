import { ArrowUpRight } from "lucide-react";

export default function Button({
    children,
    variant = "primary",
    hoverTextBlack = false,
    addArrow = true,
    className = "",
    href,
    ...props
}) {
    const baseStyles =
        "group inline-flex items-center justify-center gap-3 px-7 py-4 font-button font-medium text-sm uppercase transition-all duration-300 cursor-pointer";

    const variants = {
        primary: "bg-[#54B2E5] text-white",
        secondary: "bg-[#050505] text-white",
    };

    const hoverTextStyle = hoverTextBlack
        ? "hover:text-black"
        : "hover:text-white";

    const arrowStyle = hoverTextBlack
        ? "group-hover:text-black"
        : "group-hover:text-white";

    const styles = `${baseStyles} ${variants[variant]} ${hoverTextStyle} ${className}`;

    if (href) {
        return (
            <a href={href} className={styles} {...props}>
                {children}
                {addArrow && (<ArrowComponent />)}
            </a>
        );
    }

    return (
        <button className={styles} {...props}>
            {children}
            {addArrow && (<ArrowComponent />)}
        </button>
    );
}

function ArrowComponent() {
    return (
        <span className="relative inline-block h-5 w-5 shrink-0 overflow-hidden">

            {/* First arrow - visible initially */}
            <ArrowUpRight
                size={20}
                className="absolute left-0 top-0 translate-x-0 translate-y-0 transition-transform duration-300 ease-in-out group-hover:translate-x-full group-hover:-translate-y-full"
            />

            {/* Second arrow - hidden initially */}
            <ArrowUpRight
                size={20}
                className="absolute left-0 top-0 -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
            />
        </span>
    )
}