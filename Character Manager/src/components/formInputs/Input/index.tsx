import classNames from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"

type InputProps<T extends FieldValues> = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string
    label?: string
    styling?: keyof typeof INPUT_STYLE
    className?: string

} & (
        {
            methods: UseFormReturn<T>,
            name: Path<T>;
            unattached?: never;
        } | {
            methods?: never;
            name?: string;
            unattached: true;
        }
    );

const INPUT_STYLE = {
    ATTRIBUTE: "bg-transparent outline-0 text-5xl font-bold text-center w-full h-full",
    MODIFIER: "w-12 bg-gray-400 border-4 border-double rounded-lg mt-[-10px] border-black outline-0 text-center",
    NORMAL: "px-3 py-1 rounded-lg border-2 border-dnd-accent-100 outline-none bg-dnd-secondary-200 text-dnd-black",
    SKILL: "outline-0 w-6 rounded-lg text-center text-sm border-b-2 border-black bg-transparent",
    SQUARE: "w-full h-full outline-0 bg-transparent text-3xl font-bold text-center",
    AC: "outline-0 bg-transparent text-center w-full text-3xl font-bold"
}

export default function Input<T extends FieldValues>({ name, label, className, type, methods, value, onChange, required, disabled, defaultValue, styling, ...props }: InputProps<T>) {
    const fieldState = methods ? methods.getFieldState(name) : null
    const fieldValue = methods ? methods.watch(name) : value
    const classes = classNames(
        INPUT_STYLE[styling ?? "NORMAL"]
    )
    return (
        <label className={classNames("flex flex-col", className)}>
            {label && <span className="font-bold">{label} {required && <span className="text-dnd-primary-100">*</span>}</span>}
            <input type={type} className={classes} {...(methods ? methods.register(name, { onChange, required }) : { value: fieldValue, onChange })} disabled={disabled} defaultValue={defaultValue} {...props} />
            {fieldState?.error && (
                <p>Field is required</p>
            )}
        </label>
    )
}