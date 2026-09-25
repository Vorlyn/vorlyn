import type {
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormReturn,
} from "react-hook-form";

export interface FormProviderProps<T extends FieldValues> {
  onSubmit: (data: T) => void | Promise<void>;
  defaultValues?: Record<string, unknown>;
  schema?: T;
  form: UseFormReturn<T>;
  children: React.ReactNode;
  className?: string;
}

export interface FormFieldWrapperProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  description?: string;
  className?: string;
  children: (
    field: ControllerRenderProps<T, Path<T>>,
    isInvalid: boolean
  ) => React.ReactNode;
}
