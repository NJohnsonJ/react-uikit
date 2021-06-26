import React, { HTMLAttributes } from "react";

export interface CloseProps extends HTMLAttributes<HTMLButtonElement> { }

const Close = React.forwardRef<HTMLButtonElement, CloseProps>((props, ref) => (
    <button type="button" {...props} ref={ref} uk-close="" />
));

export default Close;
