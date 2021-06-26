import React, { HTMLAttributes } from "react";
import PropTypes from "prop-types";

export interface CardTitleProps extends HTMLAttributes<HTMLDivElement> {
  heading: React.ElementType;
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>((props, ref) => {

  const {
    heading: Component = "h1",
    children,
    ...other
  } = props;

  return (
    <Component {...other} ref={ref} className="uk-card-title">
      {children}
    </Component>
  )
});

export default CardTitle;
