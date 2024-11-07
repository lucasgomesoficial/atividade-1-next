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
