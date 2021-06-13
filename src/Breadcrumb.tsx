import React, { HTMLAttributes } from "react";
import BreadcrumbItem from "./BreadcrumbItem";

export interface BreadcrumbProps extends HTMLAttributes<HTMLUListElement> {
}

const Breadcrumb = React.forwardRef<HTMLUListElement, BreadcrumbProps>(({ children, ...other }, ref) => (
  <ul {...other} ref={ref} className="uk-breadcrumb">
    {children}
  </ul>
));

export default Object.assign(Breadcrumb, {
  Item: BreadcrumbItem
});
