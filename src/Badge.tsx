import React from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    children,
    ...other
  } = props;

  return (
    <div {...other} ref={ref} className="uk-badge">
      {children}
    </div>
  );
});

export default Badge;
