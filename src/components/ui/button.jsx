import { ArrowUpRight } from "lucide-react";

export default function Button({
    children,
    variant = "primary",
    className = "",
    href,
    ...props
}) {
    const baseStyles =
        "group inline-flex items-center justify-center gap-3 px-7 py-4 font-button font-medium text-sm uppercase transition-all duration-300";

    const variants = {
        primary: "bg-[#54B2E5] text-white",
        secondary: "bg-[#050505] text-white",
    };

    const styles = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={styles} {...props}>
                {children}
                <ArrowUpRight size={20} strokeWidth={2} className="absolute inset-0 translate-y-full -translate-x-full transition-transform duration-300 group-hover:translate-y-0 group-hover:translate-x-0" />
            </a>
        );
    }

    return (
        <button className={styles} {...props}>
            {children}
            <ArrowUpRight size={20} strokeWidth={2} />
        </button>
    );
}