import React, { HTMLAttributes } from "react";

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
  href?: string;
  disabled?: boolean;
}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>((props, ref) => {

  const {
    href = "",
    disabled = false,
    children,
    ...other
  } = props;

  return (
    <li {...other} ref={ref}>
      <a href={href} className={disabled ? "uk-disabled" : ""}>
        { children }
      </a>
    </li>
  )
});

export default BreadcrumbItem;
