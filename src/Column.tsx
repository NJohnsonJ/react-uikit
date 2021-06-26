import React, { HTMLAttributes } from "react";
import ColumnSpan from "./ColumnSpan";
import { className, toClassName } from "./util";

type ColumnCount = "2" | "3" | "4" | "5" | "6";

export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
    count?: ColumnCount;
    s?: ColumnCount; // Only affects device widths of 640px and higher
    m?: ColumnCount; // Only affects device widths of 960px and higher
    l?: ColumnCount; // Only affects device widths of 1200px and higher
    xl?: ColumnCount; // Only affects device widths of 1600px and higher
    divider?: boolean;
}

const prefix = "column";

function getClassName(value?: string) {
    return className(prefix, value);
}

function countValue(count?: string) {
    return count ? `1-${count}` : "";
}

function breakpointValue(breakpoint: string, count?: string) {
    return countValue(count ? `${count}@${breakpoint}` : "");
}

const Column = React.forwardRef<HTMLDivElement, ColumnProps>((props, ref) => {

    const {
        count = "2",
        s,
        m, 
        l,
        xl,
        divider = false,
        children,
        ...other
    } = props;

    const classes = toClassName([
        getClassName(countValue(count)),
        getClassName(breakpointValue("s", s)),
        getClassName(breakpointValue("m", m)),
        getClassName(breakpointValue("l", l)),
        getClassName(breakpointValue("xl", xl)),
        getClassName(divider ? "divider" : "")
    ]);

    return (
        <div {...other} ref={ref} className={classes}>
            {children}
        </div>
    );
});

export default Object.assign(Column, {
    Span: ColumnSpan
});
