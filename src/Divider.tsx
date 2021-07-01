import React from "react";
import { className } from "./util";

export interface DividerProps {
    type?: "icon" | "small" | "vertical";
}

const prefix = "divider";

const Divider = React.forwardRef<HTMLHRElement, DividerProps>((props, ref) => (
    <hr {...props} ref={ref} className={className(prefix, props.type)}/>
))

export default Divider;
