import React, { HTMLAttributes } from "react";

interface CoverImageProps extends HTMLAttributes<HTMLIFrameElement> {
    automute?: boolean;
    width?: number;
    height?: number;
}

const CoverIFrame = React.forwardRef<HTMLIFrameElement, CoverImageProps>((props, ref) => {

    const {
        automute = false,
        width,
        height,
        children,
        ...other
    } = props;

    const config = JSON.stringify({
        width,
        height
    })

    return (
        <iframe {...other} ref={ref} uk-cover={config}>
            {children}
        </iframe>
    )
});

export default CoverIFrame;
