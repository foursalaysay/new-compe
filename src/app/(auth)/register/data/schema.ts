import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

// Name

export const userDetails = z.
  object({
    userPhoto: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
  })

export const RegisterSchema = z
  .object({
    fullName : z.string().min(3),
    email: z.string().email(),
    address: z.string().min(3),
    description: z.string().min(1).optional(),
    contact: z.string().refine(
      (value) => {
        const contactNumberRegex = /^09\d{9}$/; // Pattern for a 10-digit number starting with '09'
        return contactNumberRegex.test(value);
      },
      {
        message: "Invalid contact number format",
      }
    ),
    role: z.enum(["donator", "recipient"]),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterData = z.infer<typeof RegisterSchema>;
