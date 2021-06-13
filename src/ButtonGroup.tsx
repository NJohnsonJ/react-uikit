import React, { HTMLAttributes } from "react";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {

  const {
    children,
    ...other
  } = props;

  return (
    <div {...other} ref={ref} className="uk-button-group">
      {children}
    </div>
  )

});

export default ButtonGroup;
