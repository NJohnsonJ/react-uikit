import React, { HTMLAttributes } from "react";

export interface ArticleMetaProps extends HTMLAttributes<HTMLParagraphElement> {
}

const ArticleMeta = React.forwardRef<HTMLParagraphElement, ArticleMetaProps>(({ children, ...other }, ref) => (
  <p {...other} ref={ref} className="uk-article-meta">
    {children}
  </p>
));

export default ArticleMeta;
