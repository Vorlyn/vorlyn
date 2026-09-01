type CheckboxBaseProps = {
  id?: string;
  label: string;
  description?: string;
  required?: boolean;
  className?: string;
  optionClassName?: string;
  orientation?: "horizontal" | "vertical" | "responsive";
  disabled?: boolean;
  isInvalid?: boolean;
};

export type DefaultCheckboxProps = CheckboxBaseProps & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

export type GroupCheckboxProps = CheckboxBaseProps & {
  options?: { label: string; value: string }[];
  checked?: string[];
  onCheckedChange?: (checked: string[]) => void;
};

export type CheckboxProps =
  | ({ variant?: "default" } & DefaultCheckboxProps)
  | ({ variant: "group" } & GroupCheckboxProps);
