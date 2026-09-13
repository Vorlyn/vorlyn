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
    name: "breadcrumb",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["icon", "dropdown"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/breadcrumb.tsx",
        targetPath: "components/ui/breadcrumb.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/breadcrumb/breadcrumb.tsx",
        targetPath: "components/shared/breadcrumb/breadcrumb.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/breadcrumb/breadcrumb.types.ts",
        targetPath: "components/shared/breadcrumb/breadcrumb.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/breadcrumb/index.ts",
        targetPath: "components/shared/breadcrumb/index.ts",
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
    name: "dialog",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/dialog.tsx",
        targetPath: "components/ui/dialog.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/dialog/dialog.tsx",
        targetPath: "components/shared/dialog/dialog.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/dialog/dialog.types.ts",
        targetPath: "components/shared/dialog/dialog.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/dialog/index.ts",
        targetPath: "components/shared/dialog/index.ts",
      },
    ],
  },
  {
    name: "sheet",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/sheet.tsx",
        targetPath: "components/ui/sheet.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/sheet/sheet.tsx",
        targetPath: "components/shared/sheet/sheet.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/sheet/sheet.types.ts",
        targetPath: "components/shared/sheet/sheet.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/sheet/index.ts",
        targetPath: "components/shared/sheet/index.ts",
      },
    ],
  },
  {
    name: "slider",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils"],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/ui/slider.tsx",
        targetPath: "components/ui/slider.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/slider/slider.tsx",
        targetPath: "components/shared/slider/slider.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/slider/slider.types.ts",
        targetPath: "components/shared/slider/slider.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/slider/index.ts",
        targetPath: "components/shared/slider/index.ts",
      },
    ],
  },
  {
    name: "switch",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils"],
    registryDependencies: ["label"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/switch.tsx",
        targetPath: "components/ui/switch.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/switch/switch.tsx",
        targetPath: "components/shared/switch/switch.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/switch/switch.types.ts",
        targetPath: "components/shared/switch/switch.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/switch/index.ts",
        targetPath: "components/shared/switch/index.ts",
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
    name: "carousel",
    type: "registry:ui",
    dependencies: ["embla-carousel-react", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/carousel.tsx",
        targetPath: "components/ui/carousel.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/carousel/carousel.tsx",
        targetPath: "components/shared/carousel/carousel.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/carousel/carousel.types.ts",
        targetPath: "components/shared/carousel/carousel.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/carousel/index.ts",
        targetPath: "components/shared/carousel/index.ts",
      },
    ],
  },
  {
    name: "command-palette",
    type: "registry:ui",
    dependencies: ["cmdk", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["dialog", "icon"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/command.tsx",
        targetPath: "components/ui/command.tsx",
      },
      {
        sourcePath: "../../react/src/components/ui/input-group.tsx",
        targetPath: "components/ui/input-group.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/command-palette/command-palette.tsx",
        targetPath:
          "components/shared/command-palette/command-palette.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/command-palette/command-palette.types.ts",
        targetPath:
          "components/shared/command-palette/command-palette.types.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/command-palette/index.ts",
        targetPath: "components/shared/command-palette/index.ts",
      },
    ],
  },
  {
    name: "date-picker",
    type: "registry:ui",
    dependencies: ["react-day-picker", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["field", "label"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/calendar.tsx",
        targetPath: "components/ui/calendar.tsx",
      },
      {
        sourcePath: "../../react/src/components/ui/input-group.tsx",
        targetPath: "components/ui/input-group.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/date-picker/date-picker.tsx",
        targetPath: "components/shared/date-picker/date-picker.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/date-picker/date-picker.types.ts",
        targetPath: "components/shared/date-picker/date-picker.types.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/date-picker/date-picker.utils.ts",
        targetPath: "components/shared/date-picker/date-picker.utils.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/date-picker/index.ts",
        targetPath: "components/shared/date-picker/index.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/date-picker/components/single-date-picker.tsx",
        targetPath:
          "components/shared/date-picker/components/single-date-picker.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/date-picker/components/range-date-picker.tsx",
        targetPath:
          "components/shared/date-picker/components/range-date-picker.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/date-picker/components/input-date-picker.tsx",
        targetPath:
          "components/shared/date-picker/components/input-date-picker.tsx",
      },
    ],
  },
  {
    name: "drawer",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/drawer.tsx",
        targetPath: "components/ui/drawer.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/drawer/drawer.tsx",
        targetPath: "components/shared/drawer/drawer.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/drawer/drawer.types.ts",
        targetPath: "components/shared/drawer/drawer.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/drawer/index.ts",
        targetPath: "components/shared/drawer/index.ts",
      },
    ],
  },
  {
    name: "error-boundary",
    type: "registry:ui",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        sourcePath:
          "../../react/src/components/shared/error-boundary/error-boundary.tsx",
        targetPath:
          "components/shared/error-boundary/error-boundary.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/error-boundary/error-boundary.types.ts",
        targetPath:
          "components/shared/error-boundary/error-boundary.types.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/error-boundary/index.ts",
        targetPath: "components/shared/error-boundary/index.ts",
      },
    ],
  },
  {
    name: "form-provider",
    type: "registry:ui",
    dependencies: ["react-hook-form", "@vorlyn/utils"],
    registryDependencies: ["field", "label"],
    files: [
      {
        sourcePath:
          "../../react/src/components/shared/form-provider/form-provider.tsx",
        targetPath:
          "components/shared/form-provider/form-provider.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/form-provider/form-provider.types.ts",
        targetPath:
          "components/shared/form-provider/form-provider.types.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/form-provider/index.ts",
        targetPath: "components/shared/form-provider/index.ts",
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
