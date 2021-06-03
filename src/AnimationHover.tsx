import React from "react";

interface AnimationHoverProps extends React.HTMLAttributes<HTMLDivElement> {
}

const AnimationHover = React.forwardRef<HTMLDivElement, AnimationHoverProps>((props, ref) => {

    const {
        children,
        ...other
    } = props;

    return (
        <div className="uk-animation-toggle" tabIndex={0} ref={ref} {...other}>
            {children}
        </div>
    )
});

export default AnimationHover;
