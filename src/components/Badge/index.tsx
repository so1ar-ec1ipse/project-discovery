import { BadgeType } from "../../types";
import { ReactElement } from "react";

type BadgeProps = {
  type: BadgeType;
  className?: string;
  children?: Array<ReactElement> | ReactElement | string | number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function Badge({
  type,
  children,
  className,
  onClick,
}: BadgeProps) {
  const getClassName = (type: BadgeType) => {
    let className =
      "flex items-center box-border font-medium border border-solid gap-2 rounded-[4px] text-xs p-1 ";

    switch (type) {
      case BadgeType.DARK:
        className += "text-[#A1A1AA] bg-[#18181B] border-[#3F3F46]";
        break;
      case BadgeType.GRAY:
        className += "text-[#A1A1AA] bg-[#27272A] border-[#3F3F46]";
        break;
      case BadgeType.YELLOW:
        className += "text-[#FAFAFA] bg-[rgba(202,138,4,0.3)] border-[#CA8A04]";
        break;
      case BadgeType.ORANGE:
        className += "text-[#FAFAFA] bg-[rgba(217,119,6,0.3)] border-[#D97706]";
        break;
      case BadgeType.RED:
        className += "text-[#FAFAFA] bg-[rgba(220,38,38,0.3)] border-[#EF4444]";
        break;
      case BadgeType.BLUE:
        className += "text-[#FAFAFA] bg-[#262262] border-[#4F46E5]";
        break;
      default:
        break;
    }

    return className;
  };

  return (
    <div
      className={`${getClassName(type)} ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick(e);
      }}
    >
      {children}
    </div>
  );
}
