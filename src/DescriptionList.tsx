import React, { HTMLAttributes } from "react";
import { className, componentClassName, toClassName } from "./util";

export interface DescriptionListProps extends HTMLAttributes<HTMLDListElement> {
    divider?: boolean;
}

const prefix = "description-list";

const DescriptionList = React.forwardRef<HTMLDListElement, DescriptionListProps>((props, ref) => {
    const {
        divider = false,
        children,
        ...other
    } = props;

    const classes = toClassName([
        componentClassName(prefix),
        className(prefix, divider ? "divider" : "")
    ]);

    return (
        <dl {...other} ref={ref} className={classes}>
            {children}
        </dl>
    )
})

export default DescriptionList;
