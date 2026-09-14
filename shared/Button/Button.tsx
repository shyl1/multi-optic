
import { cn } from "@/lib/utils";
import Link from "next/link";


type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    variant?: "primary" | "outline" | "ghost";
    onClick?: () => void;
};

export default function Button({
    children,
    href,
    type = "button",
    className,
    variant = "primary",
    onClick,
}: ButtonProps) {
    const styles = cn(
        "inline-flex items-center justify-center gap-2",
        "px-5 py-3",
        "text-sm uppercase tracking-[0.15em]",
        "transition-all duration-300",
        "disabled:pointer-events-none disabled:opacity-50",

        variant === "primary" &&
        "bg-primary text-primary-foreground hover:bg-primary-deep",

        variant === "outline" &&
        "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",

        variant === "ghost" &&
        "text-foreground hover:bg-muted",

        className
    );

    if (href) {
        return (
            <Link href={href} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={styles}>
            {children}
        </button>
    );
}