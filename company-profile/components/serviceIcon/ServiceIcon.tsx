import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import {
  FiSun,
  FiTool,
  FiMove,
  FiMessageCircle,
  FiDroplet,
  FiCheckCircle,
} from "react-icons/fi";
import { GiHammerNails } from "react-icons/gi";

type ServiceIconName =
  | "Glasses"
  | "Sun"
  | "Wrench"
  | "Ruler"
  | "Hammer"
  | "CircleDot"
  | "MessageCircle"
  | "Sparkles";

type ServiceIconProps = {
  name: ServiceIconName;
};

const ICONS = {
  Glasses: BsFillEmojiSunglassesFill,
  Sun: FiSun,
  Wrench: FiTool,
  Ruler: FiMove,
  Hammer: GiHammerNails,
  CircleDot: FiCheckCircle,
  MessageCircle: FiMessageCircle,
  Sparkles: FiDroplet,
};

export default function ServiceIcon({ name }: ServiceIconProps) {
  const Icon = ICONS[name];

  return (
    <div className="flex size-12 items-center justify-center border border-primary/20 text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
      <Icon className="size-5" strokeWidth={1.5} />
    </div>
  );
}