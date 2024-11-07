"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormData } from "../types";
import { formSchema } from "../utils/form-schema";
import App from "../view/app.view";

export default function AppController() {
  const { handleSubmit, control } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [formData, setFormData] = React.useState<FormData>({
    name: "Jhon Doe",
    username: "Jhon",
    email: "jhon@doe.com",
    birthdate: new Date(),
    bio: "My not so easy life!",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setFormData(data);
  };

  return (
    <App
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      formData={formData}
      control={control}
    />
  );
}
