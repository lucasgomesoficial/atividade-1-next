import { Control, UseFormHandleSubmit } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./utils/form-schema";

export type FormData = z.infer<typeof formSchema>;

export interface IApp {
  handleSubmit: UseFormHandleSubmit<FormData>;
  onSubmit(data: FormData): void;
  formData: FormData;
  control: Control<FormData>;
}
