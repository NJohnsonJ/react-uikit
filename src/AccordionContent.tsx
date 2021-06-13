import React from "react";

export interface AccordionContentProps extends React.HTMLAttributes<HTMLLIElement> {
    title: string
}

const AccordionContent = React.forwardRef<HTMLLIElement, AccordionContentProps>((props, ref) => {
  const { title, ...other } = props;

  const id = `accordion-content-${title}`;

  return (
    <li ref={ref} {...other}>
      <a id={id} className="uk-accordion-title" href={`#${id}`}>{title}</a>
      <div className="uk-accordion-content">
        {props.children}
      </div>
    </li>
  );
});

export default AccordionContent;
