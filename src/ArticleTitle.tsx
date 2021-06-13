import React, { HTMLAttributes } from "react";

export interface ArticleTitleProps extends HTMLAttributes<HTMLHeadingElement> {
}

const ArticleTitle = React.forwardRef<HTMLHeadingElement, ArticleTitleProps>(({ children, ...other }, ref) => (
  <h1 {...other} ref={ref} className="uk-article-title">
    {children}
  </h1>
));

export default ArticleTitle;
