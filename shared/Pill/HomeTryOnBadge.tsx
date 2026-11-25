import { cn } from "@/lib/utils";

/** Home Try-On Eligible — pill, gold hairline, ivory ground, gold ◆ prefix. */
export default function HomeTryOnBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("pill-tryon", className)}>{children}</span>;
}
