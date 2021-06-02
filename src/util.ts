type ConfigProps = Record<string, any>;

export function ukConfig(props: ConfigProps): string {
    return Object.entries(props)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => `${key}: ${value}`)
        .reduce((prev, curr) => `${prev}; ${curr}`, "");
}