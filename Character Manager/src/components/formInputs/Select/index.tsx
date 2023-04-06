import classNames from "classnames";
import { DetailedHTMLProps, ReactNode, SelectHTMLAttributes, useEffect, useMemo } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type SelectProps<T extends FieldValues> = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
    methods: UseFormReturn<T>
    options?: ItemType[]
    label?: string
    name: Path<T>
    className?: string
}

type ItemType = ({ id: string | number, name: string | number });

export default function Select<T extends FieldValues>({ methods, label, name, options, className, onChange, required, value }: SelectProps<T>) {

    const fieldState = methods ? methods?.getFieldState(name) : null;
    const formValue = methods ? methods?.getValues(name) : value;
    const children = useMemo(() => {
        return options?.map((option, ind) => (
            <option value={option.id} key={option.id}>{option?.name}</option>
        ))
    }, [options])
    return (
        <div className="flex flex-col gap-1">
            <label>{label}</label>
            <select className="px-2 py-1 rounded-full" {...(methods && name ? methods?.register(name, { onChange }) : { value: formValue, onChange })}>
                {children}
            </select>
            {fieldState?.error && (
                <p>Field is required</p>
            )}
        </div>
    )
}