import { setTimeout } from "timers/promises";
import { execSync } from "child_process";

// Stupid hack to make codegen regenerate types after every 'x' second

const x = 1;

while (true) {
  const res = await setTimeout(x * 1000, "gen");
  console.log(res);

  try {
    execSync("yarn gen");
  } catch (e) {
    console.log(e);
  }
}
