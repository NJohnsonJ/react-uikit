import React, { HTMLAttributes } from "react";
import ButtonGroup from "./ButtonGroup";
import { className, toClassName } from "./util";

export type ButtonColor = "default" 
  | "primary"
  | "secondary"
  | "danger"
  | "text"
  | "link"
  ;

export type ButtonSize = "small"
  | "large"
  ;

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  size?: ButtonSize;
  width?: any; // TODO width component
}

const prefix = "button";

function getClassName(value?: string) {
  return className(prefix, value);
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {

  const {
    color = "default",
    size,
    width,
    children,
    ...other
  } = props;

  const classes = toClassName([
    "uk-button",
    getClassName(color),
    getClassName(size),
    getClassName(width)
  ]);

  return (
    <button {...other} ref={ref} className={classes}>
      { children }
    </button>
  );
});

export default Object.assign(Button, {
  Group: ButtonGroup
});
