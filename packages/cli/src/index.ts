#!/usr/bin/env node
import { Command } from "commander";
import { addCommand } from "./commands/add.js";
import { initCommand } from "./commands/init.js";

const program = new Command();

program
  .name("vorlyn")
  .description("CLI for adding Vorlyn components to your project")
  .version("0.0.1");

  program
  .command("init")
  .description("Initialize Vorlyn config in your project")
  .action(async () => {
    await initCommand();
  });

program
  .command("add")
  .description("Add a component to your project")
  .argument("<component>", "name of the component to add")
  .action(async (component: string) => {
    await addCommand(component);
  });

program.parse();
