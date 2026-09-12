export const registryConfig = [
  {
    name: "image",
    type: "registry:ui",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/shared/image/image.tsx",
        targetPath: "components/shared/image/image.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/image/image.types.ts",
        targetPath: "components/shared/image/image.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/image/index.ts",
        targetPath: "components/shared/image/index.ts",
      },
    ],
  },
  {
    name: "icon",
    type: "registry:ui",
    dependencies: [],
    registryDependencies: ["image"],
    files: [
      {
        sourcePath: "../../react/src/components/shared/icon/render-icon.tsx",
        targetPath: "components/shared/icon/render-icon.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/icon/render-icon.types.ts",
        targetPath: "components/shared/icon/render-icon.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/icon/index.ts",
        targetPath: "components/shared/icon/index.ts",
      },
    ],
  },
  {
    name: "spinner",
    type: "registry:ui",
    dependencies: ["@vorlyn/utils", "lucide-react"],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/ui/spinner.tsx",
        targetPath: "components/ui/spinner.tsx",
      },
    ],
  },
  {
    name: "button",
    type: "registry:ui",
    dependencies: [
      "@base-ui/react",
      "class-variance-authority",
      "@vorlyn/utils",
    ],
    registryDependencies: ["icon", "spinner"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/button.tsx",
        targetPath: "components/ui/button.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/button/button.tsx",
        targetPath: "components/shared/button/button.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/button/button.types.ts",
        targetPath: "components/shared/button/button.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/button/index.ts",
        targetPath: "components/shared/button/index.ts",
      },
    ],
  },
  {
    name: "badge",
    type: "registry:ui",
    dependencies: [
      "@base-ui/react",
      "class-variance-authority",
      "@vorlyn/utils",
    ],
    registryDependencies: ["icon", "spinner"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/badge.tsx",
        targetPath: "components/ui/badge.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/badge/badge.tsx",
        targetPath: "components/shared/badge/badge.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/badge/badge.types.ts",
        targetPath: "components/shared/badge/badge.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/badge/index.ts",
        targetPath: "components/shared/badge/index.ts",
      },
    ],
  },
  {
    name: "avatar",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils"],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/ui/avatar.tsx",
        targetPath: "components/ui/avatar.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/avatar/avatar.tsx",
        targetPath: "components/shared/avatar/avatar.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/avatar/avatar.types.ts",
        targetPath: "components/shared/avatar/avatar.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/avatar/index.ts",
        targetPath: "components/shared/avatar/index.ts",
      },
    ],
  },
  {
    name: "toast",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/toast.tsx",
        targetPath: "components/ui/toast.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/toast/toast.tsx",
        targetPath: "components/shared/toast/toast.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/toast/toast.types.ts",
        targetPath: "components/shared/toast/toast.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/toast/index.ts",
        targetPath: "components/shared/toast/index.ts",
      },
    ],
  },
  {
    name: "accordion",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils", "lucide-react"],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/ui/accordion.tsx",
        targetPath: "components/ui/accordion.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/accordion/accordion.tsx",
        targetPath: "components/shared/accordion/accordion.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/accordion/accordion.types.ts",
        targetPath: "components/shared/accordion/accordion.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/accordion/index.ts",
        targetPath: "components/shared/accordion/index.ts",
      },
    ],
  },
  {
    name: "alert",
    type: "registry:ui",
    dependencies: [
      "@base-ui/react",
      "@vorlyn/utils",
      "class-variance-authority",
      "lucide-react",
    ],
    registryDependencies: ["icon"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/alert.tsx",
        targetPath: "components/ui/alert.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/alert/alert.tsx",
        targetPath: "components/shared/alert/alert.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/alert/alert.type.ts",
        targetPath: "components/shared/alert/alert.type.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/alert/index.ts",
        targetPath: "components/shared/alert/index.ts",
      },
    ],
  },
  {
    name: "alert-dialog",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils"],
    registryDependencies: ["button", "icon"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/alert-dialog.tsx",
        targetPath: "components/ui/alert-dialog.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/alert-dialog/alert-dialog.tsx",
        targetPath: "components/shared/alert-dialog/alert-dialog.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/alert-dialog/alert-dialog.types.ts",
        targetPath: "components/shared/alert-dialog/alert-dialog.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/alert-dialog/index.ts",
        targetPath: "components/shared/alert-dialog/index.ts",
      },
    ],
  },
  {
    name: "card",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils"],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/ui/card.tsx",
        targetPath: "components/ui/card.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/card/card.tsx",
        targetPath: "components/shared/card/card.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/card/card.types.ts",
        targetPath: "components/shared/card/card.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/card/index.ts",
        targetPath: "components/shared/card/index.ts",
      },
    ],
  },
  {
    name: "button-group",
    type: "registry:ui",
    dependencies: [
      "@base-ui/react",
      "class-variance-authority",
      "@vorlyn/utils",
    ],
    registryDependencies: [
      "button",
      "dropdown",
      "popover",
      "input",
      "separator",
    ],
    files: [
      {
        sourcePath: "../../react/src/components/ui/button-group.tsx",
        targetPath: "components/ui/button-group.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/button-group/button-group.tsx",
        targetPath: "components/shared/button-group/button-group.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/button-group/button-group.types.ts",
        targetPath: "components/shared/button-group/button-group.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/button-group/index.ts",
        targetPath: "components/shared/button-group/index.ts",
      },
    ],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils"],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/ui/tooltip.tsx",
        targetPath: "components/ui/tooltip.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/tooltip/tooltip.tsx",
        targetPath: "components/shared/tooltip/tooltip.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/tooltip/tooltip.types.ts",
        targetPath: "components/shared/tooltip/tooltip.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/tooltip/index.ts",
        targetPath: "components/shared/tooltip/index.ts",
      },
    ],
  },
  {
    name: "toast",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/toast.tsx",
        targetPath: "components/ui/toast.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/toast/toast.tsx",
        targetPath: "components/shared/toast/toast.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/toast/toast.types.ts",
        targetPath: "components/shared/toast/toast.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/toast/index.ts",
        targetPath: "components/shared/toast/index.ts",
      },
    ],
  },
  {
    name: "dropdown",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["icon"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/dropdown-menu.tsx",
        targetPath: "components/ui/dropdown-menu.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/dropdown/dropdown.tsx",
        targetPath: "components/shared/dropdown/dropdown.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/dropdown/dropdown.types.ts",
        targetPath: "components/shared/dropdown/dropdown.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/dropdown/index.ts",
        targetPath: "components/shared/dropdown/index.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/dropdown/components/default-dropdown.tsx",
        targetPath:
          "components/shared/dropdown/components/default-dropdown.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/dropdown/components/checkboxes-dropdown.tsx",
        targetPath:
          "components/shared/dropdown/components/checkboxes-dropdown.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/dropdown/components/radio-groups-dropdown.tsx",
        targetPath:
          "components/shared/dropdown/components/radio-groups-dropdown.tsx",
      },
    ],
  },
  {
    name: "popover",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils"],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/ui/popover.tsx",
        targetPath: "components/ui/popover.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/popover/popover.tsx",
        targetPath: "components/shared/popover/popover.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/popover/popover.types.ts",
        targetPath: "components/shared/popover/popover.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/popover/index.ts",
        targetPath: "components/shared/popover/index.ts",
      },
    ],
  },
  {
    name: "input",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["icon", "field", "label", "separator"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/input.tsx",
        targetPath: "components/ui/input.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/input/input.tsx",
        targetPath: "components/shared/input/input.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/input/input.types.ts",
        targetPath: "components/shared/input/input.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/input/index.ts",
        targetPath: "components/shared/input/index.ts",
      },
    ],
  },
  {
    name: "separator",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils"],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/ui/separator.tsx",
        targetPath: "components/ui/separator.tsx",
      },
    ],
  },
  {
    name: "label",
    type: "registry:ui",
    dependencies: ["@vorlyn/utils"],
    registryDependencies: ["field"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/label.tsx",
        targetPath: "components/ui/label.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/label/label.tsx",
        targetPath: "components/shared/label/label.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/label/field-label.tsx",
        targetPath: "components/shared/label/field-label.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/label/label.types.ts",
        targetPath: "components/shared/label/label.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/label/index.ts",
        targetPath: "components/shared/label/index.ts",
      },
    ],
  },
  {
    name: "field",
    type: "registry:ui",
    dependencies: ["class-variance-authority", "@vorlyn/utils"],
    registryDependencies: ["label", "separator"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/field.tsx",
        targetPath: "components/ui/field.tsx",
      },
    ],
  },
];
