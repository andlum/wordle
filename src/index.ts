import figlet from "figlet";
import readline from "readline";

console.log(figlet.textSync("Let's Play Wordle"));

const prompt = (guess: string, answer: string): boolean => {
  const formattedGuess = guess.toLowerCase().slice(0, 5);
  const result = new Array(5).fill("⬜");

  if (formattedGuess == answer) {
    console.log("🟩🟩🟩🟩🟩");
    return true;
  }

  let bank = [...answer];

  formattedGuess.split("").map((letter, i) => {
    if (letter == answer.at(i)) {
      bank[i] = "";
      result[i] = "🟩";
    }
  });

  formattedGuess.split("").forEach((letter, i) => {
    if (result[i] == "⬜") {
      const j = bank.indexOf(letter);
      if (j > -1) {
        result[i] = "🟨";
        bank[j] = "";
      }
    }
  });

  console.log(result.join(""));
  return false;
};

export const play = (answer: string): void => {
  const prompter = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const MAX_GUESSES = 5;
  let attempts = 0;
  let success = false;

  const fAnswer = answer.toLowerCase();

  prompter.setPrompt("Guess a word: ");

  prompter.prompt();
  prompter.on("line", (guess) => {
    success = prompt(guess, fAnswer);
    attempts++;

    if (success || attempts >= MAX_GUESSES) {
      prompter.close();
    } else {
      prompter.prompt();
    }
  });
};

const answer = "earth";
play(answer);
