import React, { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({ children, ...other }, ref) => (
  <span {...other} ref={ref} className="uk-badge">
    {children}
  </span>
));

export default Badge;
