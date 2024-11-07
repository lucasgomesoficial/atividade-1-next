import { FormData } from "@/app/types";
import { Control } from "react-hook-form";

type NameTypes = "name" | "username" | "email" | "bio";

type FieldTypes = {
  value: string;
  onBlur(): void;
  onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  error: string | undefined;
};

export type TextareaFieldProps = FieldTypes;

export type InputFieldProps = FieldTypes & {
  name: NameTypes;
};

export interface IInputForm {
  control: Control<FormData>;
  name: NameTypes;
  hasTextArea?: boolean;
}
