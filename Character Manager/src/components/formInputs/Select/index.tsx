import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type SelectProps<T extends FieldValues> = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
    methods: UseFormReturn<T>
    options: ItemType[]
    label: string
    name: Path<T>
    className?: string
}

type ItemType = ({ id: string | number, name: string | number } | number | string);

export default function Select<T extends FieldValues>({ methods, label, name, options, className, onChange, required }: SelectProps<T>) {

    // const fieldState = methods ? methods.getFieldState(name) : null
    // const fieldValue = methods ? methods.watch(name) : value


    return (
        <div>
            <label>{label}</label>
            <select {...(methods && methods.register(name, { onChange, required }))} id="">

            </select>
        </div>
    )
}