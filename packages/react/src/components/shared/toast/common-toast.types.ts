interface ActionConfig {
  label?: string;
  onClick: () => void;
}

export interface CommonToastProps {
  message: string;
  description?: string;
  action?: ActionConfig;
}
