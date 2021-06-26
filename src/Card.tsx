import React, { HTMLAttributes } from "react";
import { Size } from "./Button";
import CardBody from "./CardBody";
import { className, toClassName } from "./util";

export type CardStyle = "default"
  | "primary" 
  | "secondary"
  ;

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  color?: CardStyle;
  hover?: boolean;
  size?: Size;
}

const prefix = "card";

function getClassName(value?: string) {
  return className(prefix, value);
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {

  const {
    color,
    hover = false,
    children,
    ...other
  } = props;

  const classes = toClassName([
    "uk-card",
    getClassName(color),
    getClassName(hover ? "hover" : "")
  ]);

  return (
    <div {...other} ref={ref} className={classes}>
      { children }
    </div>
  );
});

export default Object.assign(Card, {
  Body: CardBody,
});
