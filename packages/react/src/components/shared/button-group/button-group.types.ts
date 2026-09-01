import type { ComponentProps, ReactNode } from "react";
import { Button } from "../button/button";
import { Dropdown } from "../dropdown/dropdown";
import { Popover } from "../popover/popover";
import { Input } from "../input/input";
import { ButtonGroup } from "@/components/ui/button-group";

export type ButtonGroupItem =
  | {
      type: "button";
      key: string;
      props: ComponentProps<typeof Button>;
    }
  | {
      type: "dropdown";
      key: string;
      props: ComponentProps<typeof Dropdown>;
    }
  | {
      type: "popover";
      key: string;
      props: ComponentProps<typeof Popover>;
    }
  | {
      type: "input";
      key: string;
      props: ComponentProps<typeof Input>;
    }
  | {
      type: "separator";
      key: string;
    }
  | {
      type: "custom";
      key: string;
      render: () => ReactNode;
    };

export interface ButtonGroupProps extends Omit<
  ComponentProps<typeof ButtonGroup>,
  "children"
> {
  items: ButtonGroupItem[];
  widthSeparators?: boolean;
}
