import React, { ComponentPropsWithRef, ElementType } from "react";

export interface AsProps<C extends ElementType> {
    as?: C;
}

export type PolymorphicComponentProps<C extends ElementType, P = unknown> = React.PropsWithChildren<AsProps<C> & Omit<ComponentPropsWithRef<C>, keyof AsProps<C> & keyof P>>;

type ConfigProps = Record<string, any>;

export function ukConfig(props: ConfigProps): string {
  const configs = Object.entries(props)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}: ${value}`);

  if (configs.length) return configs.reduce((prev, curr) => `${prev}; ${curr}`);

  return "";
}

export function className(prefix: string, name?: string) {
  return name ? `uk-${prefix}-${name}` : "";
}

export function toClassName(classNames: string[]) {
  return classNames
    .filter((it) => it.length)
    .reduce((prev, curr) => `${prev} ${curr}`, "");
}
