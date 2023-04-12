export function formatString(value: string) {
    return value.replace('_', " ")
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

}

export function pascalCamelSplit(value: string) {
    return value.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
}