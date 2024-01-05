import figlet from "figlet";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name: string) => {
  console.log(`Hello ${name}!`);
  rl.close();
});
