import z from "zod";

export const emailFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters",
    }),
    email: z.string().includes("@", { message: "Incorrect format of email address" }),
    message: z.string(),
});