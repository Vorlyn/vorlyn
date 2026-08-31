#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .name("vorlyn")
  .description("CLI for adding Vorlyn components to your project")
  .version("0.0.1");

program.parse();
