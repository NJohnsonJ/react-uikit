type ConfigProps = Record<string, any>;

export function ukConfig(props: ConfigProps): string {
    const configs = Object.entries(props)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => `${key}: ${value}`);

    if (configs.length)
        return configs.reduce((prev, curr) => `${prev}; ${curr}`);

    return "";
}

export function className(prefix: string, name?: string) {
    return name ? `uk-${prefix}-${name}` : "";
}

export function toClassName(classNames: string[]) {
    return classNames.reduce((prev, curr) => `${prev} ${curr}`, "");
}
