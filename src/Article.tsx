import React, { HTMLAttributes } from "react";
import ArticleMeta from "./ArticleMeta";
import ArticleTitle from "./ArticleTitle";

interface ArticleProps extends HTMLAttributes<HTMLElement> {
}

const Article = React.forwardRef<HTMLElement, ArticleProps>((props, ref) => {
    const {
        children,
        ...other
    } = props;
    return (
        <article {...other} ref={ref} className="uk-article">
            {children}
        </article>
    )
});

export default Object.assign(Article, {
    Title: ArticleTitle,
    Meta: ArticleMeta
});
