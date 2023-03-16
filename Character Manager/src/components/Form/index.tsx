import { ReactNode, useRef } from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, UseFormReturn } from "react-hook-form";

interface FormProps<T extends FieldValues> {
    className?: string
    methods: UseFormReturn<T>,
    onSubmit?: SubmitHandler<T>,
    onInvalid?: SubmitErrorHandler<T> | undefined,
    children: ReactNode

}

export default function Form<T extends FieldValues>({ className, children, methods, onInvalid, onSubmit }: FormProps<T>): JSX.Element {
    const ref = useRef<HTMLFormElement>(null);

    return (
        <FormProvider {...methods}>
            <form className={className} onSubmit={onSubmit ? methods.handleSubmit(onSubmit, onInvalid) : undefined} noValidate ref={ref}>
                <fieldset>
                    {children}
                </fieldset>
            </form>
        </FormProvider>
    )
}