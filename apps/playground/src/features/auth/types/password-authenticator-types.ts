import type { ReactElement } from "react";

export interface PasswordAuthenticatorProps {
  trigger: ReactElement;
  password: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
