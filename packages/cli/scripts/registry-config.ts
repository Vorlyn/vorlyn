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
];
