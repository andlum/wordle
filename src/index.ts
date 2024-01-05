import figlet from "figlet";
import readline from "readline";

export const main = (): void => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const word = "earth";

  rl.question("What is your guess? ", (guess: string) => {
    const result = new Array(5).fill("⬜");
    const formattedGuess = guess.toLowerCase();
    let available = [...word];

    // for (let i = 0; i < word.length; i++) {
    //   const letter = formattedGuess.at(i) || "";
    //   if (letter === word[i]) {
    //     result.push("🟩");
    //     available[i] = "";
    //   } else if (available.indexOf(letter) > -1) {
    //     result.push("🟨");
    //     available[available.indexOf(letter)] = "";
    //   } else {
    //     result.push("⬜");
    //   }
    // }

    for (let i = 0; i < word.length; i++) {
      const letter = formattedGuess.at(i);
      if (letter === word[i]) {
        result[i] = "🟩";
        available[i] = "";
      }
    }

    for (let i = 0; i < word.length; i++) {
      const letter = formattedGuess.at(i) || "";

      if (available.indexOf(letter) > -1) {
        result[i] = "🟨";
        available[available.indexOf(letter)] = "";
      }
    }

    console.log(result.join(""));

    rl.close();
  });
};

main();
