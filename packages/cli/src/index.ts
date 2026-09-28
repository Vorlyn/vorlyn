#!/usr/bin/env node
import { Command } from "commander";
import { addCommand } from "./commands/add.js";
import { initCommand } from "./commands/init.js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

interface PackageJson {
  version: string;
}

const packageJson = JSON.parse(
  readFileSync(
    fileURLToPath(new URL("../package.json", import.meta.url)),
    "utf-8",
  ),
) as unknown as PackageJson;

const program = new Command();

program
  .name("vorlyn")
  .description("CLI for adding Vorlyn components to your project")
  .version(packageJson.version);

program
  .command("init")
  .description("Initialize Vorlyn config in your project")
  .action(async () => {
    await initCommand();
  });

program
  .command("add")
  .description("Add a component to your project")
  .argument("<components...>", "name of the component to add")
  .action(async (components: string[]) => {
    await addCommand(components);
  });

program.parse();
