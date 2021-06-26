import React, { HTMLAttributes } from "react";

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
}

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>((props, ref) => {

  const {
    children,
    ...other
  } = props;

  return (
    <div {...other} ref={ref} className="uk-card-body">
      {children}
    </div>
  );
});

export default CardBody;
