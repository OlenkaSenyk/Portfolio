import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailFormSchema } from "./schema.ts";
import type { EmailFormProps } from "./types.ts";
import { toast } from "sonner";

const useEmailForm = () => {
    const { handleSubmit, register, formState: { isSubmitting, errors } } = useForm({
        resolver: zodResolver(emailFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: EmailFormProps) {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    message: values.message,
                }),
            });

            if (res.ok) {
                toast.success("Thank you for message!", { position: "top-center" });
            } else {
                toast.error("Something went wrong...", { position: "top-center" });
            }
        } catch {
            toast.error("Something went wrong...", { position: "top-center" });
        }
    }

    return { onSubmit, handleSubmit, register, isSubmitting, errors };
}

export default useEmailForm;