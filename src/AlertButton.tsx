import React, { HTMLAttributes } from "react";

export interface AlertButtonProps extends HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
} 

const AlertButton = React.forwardRef<HTMLAnchorElement, AlertButtonProps>((props, ref) => {
    const {
        children,
        ...other
    } = props;

    return (
        <a className="uk-alert-close" uk-close="" ref={ref} {...other}>
            {children}
        </a>
    )
});

export default AlertButton;
