"use client";

import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { IInputForm, InputFieldProps, TextareaFieldProps } from "./types";
import { Label } from "../ui/label";
import { formatNameField } from "@/utils/format-name-field/index.utils";

const InputField = ({
  name,
  value,
  onBlur,
  onChange,
  error,
}: InputFieldProps) => {
  return (
    <div>
      <Label htmlFor={name} className={error && "text-destructive"}>
        {formatNameField(name)}
      </Label>
      <Input
        id={name}
        type={name === "email" ? "email" : "text"}
        value={value}
        onBlur={onBlur}
        color="#f51b0c54"
        onChange={onChange}
      />
      {error ?? <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
};

const TextareaField = ({
  value,
  onBlur,
  onChange,
  error,
}: TextareaFieldProps) => {
  return (
    <div>
      <Label htmlFor="bio" className={error && "text-destructive"}>
        Bio
      </Label>
      <Textarea
        id="bio"
        rows={4}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error ?? <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
};

/**
 * A form component that renders an input field or a textarea based on the provided props.
 * It uses react-hook-form's Controller component to handle form state and validation.
 *
 * @param control - The react-hook-form control object.
 * @param name - The name of the input field or textarea.
 * @param hasTextArea - A boolean indicating whether to render a textarea instead of an input field.
 *
 * @returns A JSX element representing the input form.
 */
export function InputForm({
  control,
  name,
  hasTextArea,
}: Readonly<IInputForm>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        formState: { errors },
      }) => (
        <>
          {hasTextArea ? (
            <TextareaField
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={errors.bio?.message}
            />
          ) : (
            <InputField
              name={name}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={errors[name]?.message}
            />
          )}
        </>
      )}
    />
  );
}
