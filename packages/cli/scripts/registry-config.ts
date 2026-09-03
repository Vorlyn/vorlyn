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
];
