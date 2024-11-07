"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Controller } from "react-hook-form";
import { IDatePicker } from "./types";
import { Label } from "../ui/label";

/**
 * A date picker component for selecting a single date.
 *
 * @param control - The React Hook Form control object for managing form state.
 * @returns A React component for rendering the date picker.
 */
export function DatePicker({ control }: Readonly<IDatePicker>) {
  return (
    <Controller
      control={control}
      name="birthdate"
      render={({ field: { onChange, value }, formState: { errors } }) => (
        <div>
          <Label
            htmlFor="birthdate"
            className={errors.birthdate?.message && "text-destructive"}
          >
            Data de aniversário
          </Label>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !value && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {value ? (
                    format(value, "PPP", { locale: ptBR })
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  locale={ptBR}
                  defaultMonth={new Date(1992, 9)}
                  selected={value}
                  onSelect={onChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {errors.birthdate?.message ?? (
            <span className="text-xs text-destructive">
              {errors.birthdate?.message}
            </span>
          )}
        </div>
      )}
    />
  );
}
