import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IApp } from "../types";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/form/index.component";

/**
 * @module
 *
 * @name App
 * @description This is the main App component that displays the user's submitted form data.
 *
 * @param formData - An object containing the user's form data.
 * @param handleSubmit - A function to handle form submission.
 * @param onSubmit - A function to be called when the form is submitted.
 * @param control - The form control object.
 *
 * @returns A React component that displays the user's form data.
 */
export default function App({
  formData,
  handleSubmit,
  onSubmit,
  control,
}: Readonly<IApp>) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Dados do {formData.username} 😊</CardTitle>
          <CardDescription>
            Aqui estão os dados que você enviou no formulário
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Nome:</Label>
              <p>{formData.name}</p>
            </div>
            <div>
              <Label>Data de Nascimento:</Label>
              <p>{formData.birthdate?.toLocaleDateString()}</p>
            </div>
            <div>
              <Label>Nome de Usuário:</Label>
              <p>{formData.username}</p>
            </div>
            <div>
              <Label>E-mail:</Label>
              <p>{formData.email}</p>
            </div>
            <div>
              <Label>Bio:</Label>
              <p>{formData.bio}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Form
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            control={control}
          />
        </CardFooter>
      </Card>
    </div>
  );
}
