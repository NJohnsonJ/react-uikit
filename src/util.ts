import React, { ComponentPropsWithRef, ElementType } from "react";

export interface AsProps<C extends ElementType> {
    as?: C;
}

export interface UkComponentProps {
  ukComponents?: string[];
}

export type PolymorphicComponentProps<C extends ElementType, P = unknown> = React.PropsWithChildren<AsProps<C> & UkComponentProps & Omit<ComponentPropsWithRef<C>, keyof AsProps<C> & keyof P & keyof UkComponentProps>>;

type ConfigProps = Record<string, any>;

const ukPrefix = "uk";

export function ukConfig(props: ConfigProps): string {
  const configs = Object.entries(props)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}: ${value}`);

  if (configs.length) return configs.reduce((prev, curr) => `${prev}; ${curr}`);

  return "";
}

export function className(prefix: string, name?: string) {
  return name ? `${ukPrefix}-${prefix}-${name}` : "";
}

export function toClassName(classNames: string[]) {
  return classNames
    .filter((it) => it.length)
    .reduce((prev, curr) => `${prev} ${curr}`, "")
    .trim();
}

export function componentClassName(ukComponent?: string) {
  return ukComponent ? `${ukPrefix}-${ukComponent}` : "";
}

export function componentClassNames(ukComponents: string[]) {
  return ukComponents.map(componentClassName);
}