import { FormData } from "@/app/types";
import { Control, UseFormHandleSubmit } from "react-hook-form";

export interface IForm {
  handleSubmit: UseFormHandleSubmit<FormData>;
  onSubmit(data: FormData): void;
  control: Control<FormData>;
}
