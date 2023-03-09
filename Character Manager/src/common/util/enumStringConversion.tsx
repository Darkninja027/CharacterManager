export function enumStringConversion(enumValue: string) {
    return enumValue.replace('_', " ")
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

}