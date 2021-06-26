import React, { HTMLAttributes } from "react";
import { className } from "./util";

export interface ColumnSpanProps extends HTMLAttributes<HTMLDivElement> {}

const ColumnSpan = React.forwardRef<HTMLDivElement, ColumnSpanProps>(({children, ...other}, ref) => (
    <div {...other} ref={ref} className={className("column", "span")}>
        {children}
    </div>
));

export default ColumnSpan;
