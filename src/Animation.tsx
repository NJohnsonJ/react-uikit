import React, { HTMLAttributes } from "react";
import AnimationHover from "./AnimationHover";

export type AnimationType = "fade"
    | "scale-up"
    | "scale-down"
    | "slide-top"
    | "slide-bottom"
    | "slide-right"
    | "slide-left"
    | "slide-top-small"
    | "slide-bottom-small"
    | "slide-right-small"
    | "slide-left-small"
    | "slide-top-medium"
    | "slide-bottom-medium"
    | "slide-right-medium"
    | "slide-left-medium"
    | "kenburns"
    | "shake"
    | "stroke"
    ;

export type TransformOrigin = "top-left"
    | "top-center"
    | "top-right"
    | "center-left"
    | "center-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    ;

interface AnimationProps extends HTMLAttributes<HTMLDivElement> {
    type: AnimationType,
    reverse?: boolean,
    fast?: boolean,
    // The origin prop only has an effect when the type is one of the scale animations.
    origin?: TransformOrigin,
}

const classNamePrefix = "uk-animation"

function getClassName(name: string) {
    return `${classNamePrefix}-${name}`;
}

function getOriginClassName(origin: string) {
    return `uk-transform-origin-${origin}`;
}

function getClassNames(type: string, reverse: boolean, fast: boolean, origin: string) {

    const classNames = [type];

    if (reverse) {
        classNames.push("reverse");
    }

    if (fast) {
        classNames.push("fast");
    }

    const baseClasses = classNames.map(name => getClassName(name))
        .reduce((prev, curr) => `${prev} ${curr}`);

    return `${baseClasses} ${getOriginClassName(origin)}`;
}

const Animation = React.forwardRef<HTMLDivElement, AnimationProps>((props, ref) => {

    const {
        type,
        reverse = false,
        fast = false,
        origin,
        children,
        ...other
    } = props;

    return (
        <div className={getClassNames(type, reverse, fast, origin)} ref={ref} {...other}>
            {children}
        </div>
    )
});

export default Object.assign(Animation, {
    Hover: AnimationHover
});
