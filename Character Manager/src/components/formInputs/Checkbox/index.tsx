import classNames from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type CheckboxProps<T extends FieldValues> = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label?: string | ReactNode;
    className?: string;
} & (
        {
            methods: UseFormReturn<T>,
            name: Path<T>;
            unattached?: never;
        } | {
            methods?: never | undefined;
            name?: string;
            unattached: true;
        }
    );

export default function Checkbox<T extends FieldValues>({ methods, name, label, className, ...props }: CheckboxProps<T>) {
    const fieldState = methods ? methods?.getFieldState(name) : null;

    const classes = classNames(
        "rounded h-4 w-4 border border-light-grey focus:ring-offset-0 focus:outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-light disabled:bg-light-grey disabled:text-light-grey disabled:border-light-grey disabled:shadow-none hover:border-accent-purple hover:border-2 hover:ring-2 hover:ring-accent-light",
        {
            "border-red-100": fieldState?.error
        },
        className
    );

    return (
        <label className="inline-flex gap-2 items-center">
            <input type="checkbox" className={classes} {...methods ? methods?.register(name ?? '') : {}} {...props} />
            <span className="text-[13px] text-dark-grey flex gap-2 items-center">{label}</span>
            {fieldState?.error && (
                <p className='text-red-100 text-[13px] leading-none mt-1'>
                    {fieldState?.error?.message}
                </p>
            )}
        </label>
    );
}