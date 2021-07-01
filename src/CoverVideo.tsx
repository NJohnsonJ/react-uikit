import React, { HTMLAttributes } from "react";

interface CoverImageProps extends HTMLAttributes<HTMLVideoElement> {
    width?: number;
    height?: number;
}

const CoverVideo = React.forwardRef<HTMLVideoElement, CoverImageProps>((props, ref) => {

    const {
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
        <video {...other} ref={ref} uk-cover={config}>
            {children}
        </video>
    )
});

export default CoverVideo;
