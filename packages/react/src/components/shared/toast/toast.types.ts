interface ActionConfig {
  label?: string;
  onClick: () => void;
}

export interface ToastProps {
  message: string;
  description?: string;
  action?: ActionConfig;
}
