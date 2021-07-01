import React, {ElementType} from "react";
import {className, PolymorphicComponentProps, toClassName} from "./util";
import {prefix} from "./Countdown";

const CountdownSeparator = <C extends ElementType = "div">(props: PolymorphicComponentProps<C, unknown>) => {

    const {
        as: Component = "div",
        children,
        ref,
        ...other
    } = props;

    const classes = className(prefix, "separator");

    return (
        <Component {...other} ref={ref} className={classes}>
            {children}
        </Component>
    )
}

export default CountdownSeparator;
