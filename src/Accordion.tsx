import React from "react";
import { ukConfig } from "./util";
import AccordionContent from "./AccordionContent";

export type Transition = "ease" | "ease-in" | "ease-in-out" | "ease-out";

export interface AccordionProps extends React.HTMLAttributes<HTMLUListElement> {
    active?: number;
    animation?: boolean;
    collapsible?: boolean;
    content?: string;
    duration?: number;
    multiple?: boolean;
    targets?: string;
    toggle?: string;
    transition?: Transition;
    offset?: number;
}

const Accordion = React.forwardRef<HTMLUListElement, AccordionProps>((props, ref) => {
    const { 
        active,
        animation,
        collapsible,
        content,
        duration,
        multiple,
        targets,
        toggle,
        transition,
        offset,
        children,
        ...otherProps
    } = props;

    const accordionConfig = ukConfig({active, animation, collapsible, content, duration, multiple, targets, toggle, transition, offset});

    return (
    <ul uk-accordion={accordionConfig} ref={ref} {...otherProps}>
        {children}
    </ul>
)})

export default Object.assign(Accordion, {
    Content: AccordionContent
})
