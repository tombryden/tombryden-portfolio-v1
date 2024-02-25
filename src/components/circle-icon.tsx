import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface CircleIconProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  Icon: ReactNode;
}

const CircleIcon = React.forwardRef<HTMLDivElement, CircleIconProps>(
  ({ Icon, className, ...props }, ref) => {
    const standardClassname =
      "flex items-center justify-center size-12 rounded-full border border-foreground";

    const finalClassname = twMerge(`${standardClassname} ${className}`);

    return (
      <div ref={ref} {...props} className={finalClassname}>
        {Icon}
      </div>
    );
  }
);

CircleIcon.displayName = "CircleIcon";

export default CircleIcon;
