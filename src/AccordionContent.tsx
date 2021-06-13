import React from "react";

export interface AccordionContentProps extends React.HTMLAttributes<HTMLLIElement> {
    title: string
}

const AccordionContent = React.forwardRef<HTMLLIElement, AccordionContentProps>((props, ref) => {
  const { title } = props;

  return (
    <li ref={ref} {...props}>
      <a className="uk-accordion-title" href="#">{title}</a>
      <div className="uk-accordion-content">
        {props.children}
      </div>
    </li>
  );
});

export default AccordionContent;
