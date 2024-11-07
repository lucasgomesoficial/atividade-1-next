import { DatePicker } from "../date-picker/index.component";
import { InputForm } from "../input-form/index.component";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { IForm } from "./types";

export const Form = ({ handleSubmit, onSubmit, control }: IForm) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Editar</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Formulário de Perfil</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo para atualizar seu perfil.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <InputForm control={control} name="name" />
          <DatePicker control={control} />
          <InputForm control={control} name="username" />
          <InputForm control={control} name="email" />
          <InputForm control={control} name="bio" hasTextArea />
          <div className="flex justify-end">
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};
