import React, { HTMLAttributes } from "react";

export type Alignment = "left" | "right" | "center";
export type ResponsiveAlignment = "left" | "right"

export interface AlignProps extends HTMLAttributes<HTMLElement> {
    alignment: Alignment;
    s?: ResponsiveAlignment;
    m?: ResponsiveAlignment;
    l?: ResponsiveAlignment;
    xl?: ResponsiveAlignment;
}

const baseClassName = "uk-align";
const responsiveSeparator = "@";

function getClassName(alignment?: string, breakpoint?: string) {
  if (!alignment) return "";

  const responsive = breakpoint ? `${responsiveSeparator}${breakpoint}` : "";

  return `${baseClassName}-${alignment}${responsive}`;
}

function getClassNames(alignments: string[][]): string {
  return alignments
    .map(([alignment, breakpoint]) => getClassName(alignment, breakpoint))
    .reduce((prev, curr) => `${prev} ${curr}`);
}

const Align = React.forwardRef<HTMLDivElement, AlignProps>((props, ref) => {
  const {
    alignment,
    s = "",
    m = "",
    l = "",
    xl = "",
    children,
    ...other
  } = props;

  const alignments = [[alignment], [s, "s"], [m, "m"], [l, "l"], [xl, "xl"]];

  return (
    <div className={getClassNames(alignments)} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default Align;
