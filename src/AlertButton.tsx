import React, { HTMLAttributes, HTMLProps } from "react";

export interface AlertButtonProps extends HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
    as?: "a" | "button"
} 

const AlertButton = React.forwardRef<HTMLAnchorElement, AlertButtonProps>((props, ref) => {
    const {
        as: Component = "a",
        children,
        ...other
    } = props;

    return (
        <Component className="uk-alert-close" uk-close="" {...other}>
            {children}
        </Component>
    )
});

export default AlertButton;
