import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Button } from "@/components/ui/button.tsx";
import useEmailForm from "./useEmailForm.ts";

export default function EmailForm() {
    const { onSubmit, isSubmitting, handleSubmit, errors, register } = useEmailForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full max-w-150 bg-background/50 drop-shadow-2xl rounded-xl p-5">
            <FieldGroup className="gap-3">
                <div className="flex flex-col md:flex-row md:gap-5">
                    <Field>
                        <FieldLabel>Your Name</FieldLabel>
                        <div>
                            <Input {...register("name")} type="text" placeholder="John Doe" />
                            <FieldError>{errors.name?.message}</FieldError>
                        </div>
                    </Field>
                    <Field className="mt-3 md:mt-0">
                        <FieldLabel>Your Email</FieldLabel>
                        <div>
                            <Input {...register("email")} type="email" placeholder="john.doe@gmail.com" />
                            <FieldError>{errors.email?.message}</FieldError>
                        </div>
                    </Field>
                </div>
                <Field>
                    <FieldLabel>Message</FieldLabel>
                    <div>
                        <Textarea {...register("message")} rows={5} className="min-h-30" placeholder="Send a message..." />
                        <FieldError>{errors.message?.message}</FieldError>
                    </div>
                </Field>
                <Field>
                    <Button className="p-0" type="submit">{isSubmitting ? "Sending..." : "Send"}</Button>
                </Field>
            </FieldGroup>
        </form>
    );
}