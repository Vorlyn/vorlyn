interface ActionConfig {
  label?: string;
  onClick: () => void;
}

export interface CommonSonnerProps {
  message: string;
  description?: string;
  action?: ActionConfig;
}
