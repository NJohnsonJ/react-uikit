import React, { HTMLAttributes } from "react";
import { TransformOrigin } from "./Animation";
import { className, toClassName } from "./util";

export type BackgroundColor = "default"
    | "muted"
    | "primary"
    | "secondary";
export type BackgroundSize = "cover"
    | "contain"
    | "fill-width"
    | "fill-height";
export type Position = TransformOrigin | "center-center";

export type ResponsiveSize = "s" | "m" | "l" | "xl";

export type BlendMode = "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity";
export interface BackgroundProps extends HTMLAttributes<HTMLDivElement> {
    color?: BackgroundColor;
    size?: BackgroundSize;
    position?: Position;
    noRepeat?: boolean;
    fixed?: boolean;
    breakpoint?: ResponsiveSize;
    blendMode?: BlendMode;
    image?: string;
}

const sizeMap: Record<BackgroundSize, string> = {
  cover: "cover",
  contain: "contain",
  "fill-height": "height-1-1",
  "fill-width": "width-1-1",
};

function convertSize(size?: BackgroundSize) {
  return size ? sizeMap[size] : "";
}

function convertBreakpoint(breakpoint?: ResponsiveSize) {
  return breakpoint ? `image@${breakpoint}` : "";
}

const classNamePrefix = "background";

function getClassName(name?: string) {
  return className(classNamePrefix, name);
}

const Background = React.forwardRef<HTMLDivElement, BackgroundProps>((props, ref) => {
  const {
    color,
    size,
    position,
    noRepeat = false,
    fixed = false,
    breakpoint,
    blendMode,
    children,
    image,
    ...other
  } = props;

  const classNames = [
    getClassName(color),
    getClassName(convertSize(size)),
    getClassName(position),
    getClassName(noRepeat ? "norepeat" : undefined),
    getClassName(fixed ? "fixed" : ""),
    getClassName(convertBreakpoint(breakpoint)),
    getClassName(blendMode ? `blend-${blendMode}` : undefined),
  ];

  const style = { backgroundImage: image ? `url(${image})` : undefined };

  return (
    <div {...other} ref={ref} className={`${toClassName(classNames)} uk-panel`} style={style}>
      {children}
    </div>
  );
});

export default Background;
