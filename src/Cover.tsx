import React, { HTMLAttributes } from "react";
import CoverIFrame from "./CoverIframe";
import CoverImage from "./CoverImage";
import CoverVideo from "./CoverVideo";
import { className } from "./util";

export interface CoverProps extends HTMLAttributes<HTMLDivElement> {
    width?: string;
    height?: string;
    viewportHeight?: boolean;
}

const prefix = "cover";

const Cover = React.forwardRef<HTMLDivElement, CoverProps>((props, ref) => {

    const {
        width = "",
        height = "",
        viewportHeight = false,
        children,
        ...other
    } = props;

    return (

        <div {...other} ref={ref} className={className(prefix, "container")} uk-height-viewport={viewportHeight}>
            {width || height ? (
                <canvas width={width} height={height}/>
            ) : null}
        </div>
    );
});

export default Object.assign(Cover, {
    Image: CoverImage,
    IFrame: CoverIFrame,
    Video: CoverVideo
});
