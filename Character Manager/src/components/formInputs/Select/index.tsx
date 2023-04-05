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
    console.log(value, name)
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

// type Props<T extends FieldValues> = {
//     emptyItem?: boolean | string | null;
//     label?: string;
//     required?: boolean;
//     disabled?: boolean;
//     className?: string;
//     children?: never;
//     placeholder?: string;
//     items?: ItemType[];
// } & (
//         {
//             methods: UseFormReturn<T>,
//             name: Path<T>;
//             onChange?: never;
//             value?: never;
//             unattached?: never;
//         } | {
//             methods?: never;
//             name?: string;
//             onChange?: never;
//             value?: never;
//             unattached: true;
//         } | {
//             methods?: never;
//             name?: string;
//             onChange: React.ChangeEventHandler<HTMLSelectElement>;
//             value?: string | number;
//             unattached: true;
//         }
//     );


// type ItemType = ({ id: string | number, name: string | number; indent?: number } | number | string);

// function normalise(input: ItemType) {
//     if (typeof input === "string" || typeof input === "number") {
//         return { id: input, name: input };
//     }

//     return input;
// }


// export default function Select<T extends FieldValues>({ methods, label, name, className, placeholder, emptyItem = undefined, disabled, required, items, onChange, value }: Props<T>) {
//     const fieldState = methods ? methods?.getFieldState(name) : null;
//     const formValue = methods ? methods?.getValues(name) : value;

//     useEffect(() => {
//         if (items?.length == 1) {
//             onChange?.({ target: { value: normalise(items[0]).id.toString() } } as React.ChangeEvent<HTMLSelectElement>);
//         }
//     }, [items?.length]);

//     var classes = classNames(
//         "mt-1 block w-full pl-3 h-8 pr-9 bg-background-grey border rounded text-[13px] text-dark-grey shadow-sm placeholder-light-grey focus:bg-white focus:outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-light disabled:bg-light-grey disabled:border-light-grey disabled:shadow-none leading-none",
//         {
//             "border-light-grey": !fieldState?.error,
//             "border-red-100": fieldState?.error,
//             "px-0 py-0": disabled,
//             "border-1": !disabled,
//         },
//         className,
//     );

//     const children = useMemo(() => items?.map(x => normalise(x)).map(x => {
//         return <option key={x.id} value={x.id}>{"\u00A0".repeat((x.indent ?? 0) * 2)}{x.name}</option>;
//     }), [items]);

//     return (
//         <label className={classNames("block", className)}>
//             <span className="block text-[13px] font-semibold text-dark-grey leading-none">{label}{required && <span className="text-red-100 ml-1">*</span>}</span>
//             <div className="relative mt-1">
//                 {children?.length ? (
//                     <select placeholder={placeholder} {...(methods && name ? methods?.register(name, { onChange }) : { value: formValue, onChange })} className={classes} disabled={disabled}>
//                         {emptyItem !== false && children?.length > 1 && <option value="">{emptyItem}</option>}
//                         {children}
//                     </select>
//                 ) : <div className={classes}></div>}
//             </div>
//             {fieldState?.error && (
//                 <p className='text-red-100 text-[13px] leading-none mt-1'>
//                     {fieldState?.error?.message}
//                 </p>
//             )}
//         </label>
//     );
// }