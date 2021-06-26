import React from "react";
import AlertButton from "./AlertButton";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    animation?: boolean;
    duration?: number;
    variant?: "primary" | "success" | "warning" | "danger"
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    animation,
    duration,
    variant,
    ...other
  } = props;

  const alertConfig = JSON.stringify({ animation, duration, variant });

  const styledClass = variant ? `uk-alert-${variant}` : "";

  return (
    <div uk-alert={alertConfig} ref={ref} {...other} className={styledClass}>
      {props.children}
    </div>
  );
});

export default Object.assign(Alert, {
  Button: AlertButton,
});
