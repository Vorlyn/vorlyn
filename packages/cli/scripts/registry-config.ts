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
        sourcePath:
          "../../react/src/components/shared/breadcrumb/breadcrumb.tsx",
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
        sourcePath: "../../react/src/components/shared/carousel/carousel.tsx",
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
        targetPath: "components/shared/command-palette/command-palette.tsx",
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
        sourcePath: "../../react/src/components/shared/date-picker/index.ts",
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
        targetPath: "components/shared/error-boundary/error-boundary.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/error-boundary/error-boundary.types.ts",
        targetPath: "components/shared/error-boundary/error-boundary.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/error-boundary/index.ts",
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
        targetPath: "components/shared/form-provider/form-provider.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/form-provider/form-provider.types.ts",
        targetPath: "components/shared/form-provider/form-provider.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/form-provider/index.ts",
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
  {
    name: "input-group",
    type: "registry:ui",
    dependencies: ["class-variance-authority", "@vorlyn/utils"],
    registryDependencies: ["field", "label"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/input-group.tsx",
        targetPath: "components/ui/input-group.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/input-group/input-group.tsx",
        targetPath: "components/shared/input-group/input-group.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/input-group/input-group.types.ts",
        targetPath: "components/shared/input-group/input-group.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/input-group/index.ts",
        targetPath: "components/shared/input-group/index.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/input-group/components/input-field.tsx",
        targetPath:
          "components/shared/input-group/components/input-field.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/input-group/components/textarea-field.tsx",
        targetPath:
          "components/shared/input-group/components/textarea-field.tsx",
      },
    ],
  },
  {
    name: "kbd",
    type: "registry:ui",
    dependencies: ["@vorlyn/utils"],
    registryDependencies: ["button", "input-group", "tooltip"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/kbd.tsx",
        targetPath: "components/ui/kbd.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/kbd/kbd.tsx",
        targetPath: "components/shared/kbd/kbd.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/kbd/kbd.types.ts",
        targetPath: "components/shared/kbd/kbd.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/kbd/index.ts",
        targetPath: "components/shared/kbd/index.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/kbd/components/button-group-kbd.tsx",
        targetPath:
          "components/shared/kbd/components/button-group-kbd.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/kbd/components/button-kbd.tsx",
        targetPath: "components/shared/kbd/components/button-kbd.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/kbd/components/combo-kbd.tsx",
        targetPath: "components/shared/kbd/components/combo-kbd.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/kbd/components/input-kbd.tsx",
        targetPath: "components/shared/kbd/components/input-kbd.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/kbd/components/tooltip-kbd.tsx",
        targetPath: "components/shared/kbd/components/tooltip-kbd.tsx",
      },
    ],
  },
  {
    name: "navigation-menu",
    type: "registry:ui",
    dependencies: [
      "@base-ui/react",
      "class-variance-authority",
      "@vorlyn/utils",
      "lucide-react",
      "react-router-dom",
    ],
    registryDependencies: ["icon"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/navigation-menu.tsx",
        targetPath: "components/ui/navigation-menu.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/navigation-menu/navigation-menu.tsx",
        targetPath:
          "components/shared/navigation-menu/navigation-menu.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/navigation-menu/navigation-menu.types.ts",
        targetPath:
          "components/shared/navigation-menu/navigation-menu.types.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/navigation-menu/index.ts",
        targetPath: "components/shared/navigation-menu/index.ts",
      },
    ],
  },
  {
    name: "pagination",
    type: "registry:ui",
    dependencies: ["@vorlyn/utils", "lucide-react"],
    registryDependencies: ["button", "select"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/pagination.tsx",
        targetPath: "components/ui/pagination.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/pagination/pagination.tsx",
        targetPath: "components/shared/pagination/pagination.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/pagination/pagination.types.ts",
        targetPath: "components/shared/pagination/pagination.types.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/pagination/pagination.utils.ts",
        targetPath: "components/shared/pagination/pagination.utils.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/pagination/index.ts",
        targetPath: "components/shared/pagination/index.ts",
      },
    ],
  },
  {
    name: "progress",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils"],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/ui/progress.tsx",
        targetPath: "components/ui/progress.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/progress/progress.tsx",
        targetPath: "components/shared/progress/progress.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/progress/progress.types.ts",
        targetPath: "components/shared/progress/progress.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/progress/index.ts",
        targetPath: "components/shared/progress/index.ts",
      },
    ],
  },
  {
    name: "radio",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils"],
    registryDependencies: ["field"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/radio-group.tsx",
        targetPath: "components/ui/radio-group.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/radio/radio.tsx",
        targetPath: "components/shared/radio/radio.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/radio/radio.types.ts",
        targetPath: "components/shared/radio/radio.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/radio/index.ts",
        targetPath: "components/shared/radio/index.ts",
      },
    ],
  },
  {
    name: "select",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["field", "label", "spinner"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/select.tsx",
        targetPath: "components/ui/select.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/select/select.tsx",
        targetPath: "components/shared/select/select.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/select/select.types.ts",
        targetPath: "components/shared/select/select.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/select/index.ts",
        targetPath: "components/shared/select/index.ts",
      },
    ],
  },
  {
    name: "chart",
    type: "registry:ui",
    dependencies: ["recharts", "@vorlyn/utils"],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/ui/chart.tsx",
        targetPath: "components/ui/chart.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/chart/index.ts",
        targetPath: "components/shared/chart/index.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/chart/types.ts",
        targetPath: "components/shared/chart/types.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/chart/area-chart/area-chart.tsx",
        targetPath: "components/shared/chart/area-chart/area-chart.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/chart/area-chart/area-chart.types.ts",
        targetPath: "components/shared/chart/area-chart/area-chart.types.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/chart/bar-chart/bar-chart.tsx",
        targetPath: "components/shared/chart/bar-chart/bar-chart.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/chart/bar-chart/bar-chart.types.ts",
        targetPath: "components/shared/chart/bar-chart/bar-chart.types.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/chart/line-chart/line-chart.tsx",
        targetPath: "components/shared/chart/line-chart/line-chart.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/chart/line-chart/line-chart.types.ts",
        targetPath: "components/shared/chart/line-chart/line-chart.types.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/chart/pie-chart/pie-chart.tsx",
        targetPath: "components/shared/chart/pie-chart/pie-chart.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/chart/pie-chart/pie-chart.types.ts",
        targetPath: "components/shared/chart/pie-chart/pie-chart.types.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/chart/radar-chart/radar-chart.tsx",
        targetPath: "components/shared/chart/radar-chart/radar-chart.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/chart/radar-chart/radar-chart.types.ts",
        targetPath: "components/shared/chart/radar-chart/radar-chart.types.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/chart/radial-chart/radial-chart.tsx",
        targetPath: "components/shared/chart/radial-chart/radial-chart.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/chart/radial-chart/radial-chart.types.ts",
        targetPath: "components/shared/chart/radial-chart/radial-chart.types.ts",
      },
    ],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["field", "label"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/checkbox.tsx",
        targetPath: "components/ui/checkbox.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/checkbox/checkbox.tsx",
        targetPath: "components/shared/checkbox/checkbox.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/checkbox/checkbox.types.ts",
        targetPath: "components/shared/checkbox/checkbox.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/checkbox/index.ts",
        targetPath: "components/shared/checkbox/index.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/checkbox/components/default-checkbox.tsx",
        targetPath:
          "components/shared/checkbox/components/default-checkbox.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/checkbox/components/grouped-checkbox.tsx",
        targetPath:
          "components/shared/checkbox/components/grouped-checkbox.tsx",
      },
    ],
  },
  {
    name: "collapsible",
    type: "registry:ui",
    dependencies: ["@base-ui/react"],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/ui/collapsible.tsx",
        targetPath: "components/ui/collapsible.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/collapsible/collapsible.tsx",
        targetPath: "components/shared/collapsible/collapsible.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/collapsible/collapsible.types.ts",
        targetPath: "components/shared/collapsible/collapsible.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/collapsible/index.ts",
        targetPath: "components/shared/collapsible/index.ts",
      },
    ],
  },
  {
    name: "combobox",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["button", "input-group", "label", "icon"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/combobox.tsx",
        targetPath: "components/ui/combobox.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/combobox/combobox.tsx",
        targetPath: "components/shared/combobox/combobox.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/combobox/combobox.types.ts",
        targetPath: "components/shared/combobox/combobox.types.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/combobox/combobox.utils.ts",
        targetPath: "components/shared/combobox/combobox.utils.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/combobox/index.ts",
        targetPath: "components/shared/combobox/index.ts",
      },
      {
        sourcePath:
          "../../react/src/components/shared/combobox/components/default.tsx",
        targetPath: "components/shared/combobox/components/default.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/combobox/components/grouped.tsx",
        targetPath: "components/shared/combobox/components/grouped.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/combobox/components/multiple.tsx",
        targetPath: "components/shared/combobox/components/multiple.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/combobox/components/popover.tsx",
        targetPath: "components/shared/combobox/components/popover.tsx",
      },
    ],
  },
  {
    name: "table",
    type: "registry:ui",
    dependencies: ["@tanstack/react-table", "@vorlyn/utils", "lucide-react"],
    registryDependencies: ["button", "dropdown", "pagination", "icon"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/table.tsx",
        targetPath: "components/ui/table.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/table/table.tsx",
        targetPath: "components/shared/table/table.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/table/table.types.ts",
        targetPath: "components/shared/table/table.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/table/table.utils.tsx",
        targetPath: "components/shared/table/table.utils.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/table/index.ts",
        targetPath: "components/shared/table/index.ts",
      },
    ],
  },
  {
    name: "tabs",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "class-variance-authority", "@vorlyn/utils"],
    registryDependencies: ["icon"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/tabs.tsx",
        targetPath: "components/ui/tabs.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/tabs/tabs.tsx",
        targetPath: "components/shared/tabs/tabs.tsx",
      },
      {
        sourcePath: "../../react/src/components/shared/tabs/tabs.types.ts",
        targetPath: "components/shared/tabs/tabs.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/tabs/index.ts",
        targetPath: "components/shared/tabs/index.ts",
      },
    ],
  },
  {
    name: "textarea",
    type: "registry:ui",
    dependencies: ["@vorlyn/utils"],
    registryDependencies: ["field", "label"],
    files: [
      {
        sourcePath: "../../react/src/components/ui/textarea.tsx",
        targetPath: "components/ui/textarea.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/textarea/textarea.tsx",
        targetPath: "components/shared/textarea/textarea.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/textarea/textarea.types.ts",
        targetPath: "components/shared/textarea/textarea.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/textarea/index.ts",
        targetPath: "components/shared/textarea/index.ts",
      },
    ],
  },
  {
    name: "toggle-group",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "class-variance-authority", "@vorlyn/utils"],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/ui/toggle-group.tsx",
        targetPath: "components/ui/toggle-group.tsx",
      },
      {
        sourcePath: "../../react/src/components/ui/toggle.tsx",
        targetPath: "components/ui/toggle.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/toggle-group/toggle-group.tsx",
        targetPath: "components/shared/toggle-group/toggle-group.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/toggle-group/toggle-group.types.ts",
        targetPath: "components/shared/toggle-group/toggle-group.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/toggle-group/index.ts",
        targetPath: "components/shared/toggle-group/index.ts",
      },
    ],
  },
  {
    name: "hover-card",
    type: "registry:ui",
    dependencies: ["@base-ui/react", "@vorlyn/utils"],
    registryDependencies: [],
    files: [
      {
        sourcePath: "../../react/src/components/ui/hover-card.tsx",
        targetPath: "components/ui/hover-card.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/hover-card/hover-card.tsx",
        targetPath: "components/shared/hover-card/hover-card.tsx",
      },
      {
        sourcePath:
          "../../react/src/components/shared/hover-card/hover-card.types.ts",
        targetPath: "components/shared/hover-card/hover-card.types.ts",
      },
      {
        sourcePath: "../../react/src/components/shared/hover-card/index.ts",
        targetPath: "components/shared/hover-card/index.ts",
      },
    ],
  },
];
