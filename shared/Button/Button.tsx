import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  /**
   * primary  — solid burgundy (Concierge Booking, Add to Try-On)
   * outline  — hairline burgundy (View Details, Discover Atelier)
   * ghost    — text only
   * inverse  — white fill for use on dark / photographic grounds
   * outline-inverse — hairline white for dark grounds
   */
  variant?: "primary" | "outline" | "ghost" | "inverse" | "outline-inverse";
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
    "inline-flex h-12 items-center justify-center gap-2.5",
    "px-8 rounded-none",
    "text-[11px] font-semibold uppercase tracking-[0.16em] leading-4",
    "transition-colors duration-300",
    "disabled:pointer-events-none disabled:opacity-50",

    variant === "primary" &&
      "bg-primary text-primary-foreground hover:bg-primary-deep",

    variant === "outline" &&
      "border border-primary bg-transparent text-primary hover:bg-primary-soft",

    variant === "ghost" && "text-foreground hover:bg-primary-soft",

    variant === "inverse" &&
      "bg-primary-foreground text-primary hover:bg-primary-soft",

    variant === "outline-inverse" &&
      "border border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10",

    "rtl:tracking-normal rtl:normal-case",
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
