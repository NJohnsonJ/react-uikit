import React, { HTMLAttributes } from "react";

interface CoverImageProps extends HTMLAttributes<HTMLImageElement> {
    width?: number;
    height?: number;
}

const CoverImage = React.forwardRef<HTMLImageElement, CoverImageProps>((props, ref) => {

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
        <img {...other} ref={ref} uk-cover={config}>
            {children}
        </img>
    )
});

export default CoverImage;
