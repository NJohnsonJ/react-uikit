import React, { ElementType } from "react";
import { className, componentClassNames, PolymorphicComponentProps, toClassName } from "./util";

export interface CommentProps {
    primary?: boolean;
}

const prefix = "comment";

const Comment = <C extends ElementType = "article">(props: PolymorphicComponentProps<C, CommentProps>) => {

    const {
        primary = false,
        as: Component = "article",
        children,
        ref,
        ukComponents = [],
        ...other
    } = props;
    
    const classes = toClassName([
        `uk-${prefix}`,
        className(prefix, primary ? "primary" : ""),
        ...componentClassNames(ukComponents)
    ]);

    return (
        <Component {...other} ref={ref} className={classes}>
            {children}
        </Component>
    );
}

const CommentComponent = (name: string, defaultAs: ElementType) => <C extends ElementType = typeof defaultAs>(props: PolymorphicComponentProps<C, never>) => {

    const {
        as: Component = defaultAs,
        children,
        ref,
        ukComponents: ukComponent = [],
        ...other
    } = props;

    const classes = toClassName([
        className("comment", name),
        ...componentClassNames(ukComponent)
    ]);

    return (
        <Component {...other} ref={ref} className={classes}>
            {children}
        </Component>
    );
}

export default Object.assign(Comment, {
    Body: CommentComponent("body", "div"),
    Header: CommentComponent("header", "header"),
    Title: CommentComponent("title", "h1"),
    Meta: CommentComponent("meta", "meta"),
    Avatar: CommentComponent("avatar", "img"),
    List: CommentComponent("list", "ul")
});
