
export interface AccordionContentProps extends React.HTMLAttributes<HTMLLIElement> {
    title: string
}

const AccordionContent = (props: AccordionContentProps) => {
    const { title } = props;
    return (
        <li>
            <a className="uk-accordion-title" href="#">{title}</a>
            <div className="uk-acccordion-content">
                {props.children}
            </div>
        </li>
    )
}

export default AccordionContent;
