
import { cn } from "@/lib/utils";



type IconButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  ariaLabel: string;
  className?: string;
  onClick?: () => void;
  ariaExpanded?: boolean;
};

export default function IconButton({
  children,
  type = "button",
  ariaLabel,
  className,
  onClick,
  ariaExpanded,
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center",
        "transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
}