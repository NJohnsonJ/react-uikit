import React, { ElementType } from "react";
import { className, componentClassName, PolymorphicComponentProps, toClassName } from "./util";

export type ContainerSize = "xsmall"
    | "small"
    | "large"
    | "xlarge"
    | "expand"
    ;

export interface ContainerProps {
    size?: ContainerSize;
}

const prefix = "container";

const Container = <C extends ElementType = "div">(props: PolymorphicComponentProps<C, ContainerProps>) => {

    const {
        size,
        children,
        ...other
    } = props;

    const classes = toClassName([
        className("container", size),
        componentClassName(prefix)
    ]);

    return (
        <div {...other} className={classes}>
            {children}
        </div>
    );
}

export default Container;
