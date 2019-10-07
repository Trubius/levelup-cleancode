main();

function main() {
  console.log("Hello there, I am your homework, make me better ;) \n");

  const string =
    '"No, hogy még szebb legyen," felelt a kapitány,"  Lássunk, embereim, az áldomás után;  Papok pincéjéből van jó borunk elég,  Nézzük meg a kancsók mélységes fenekét!';

  let newString = string.replace(new RegExp("\\s{2}", "g"), "\n");
  console.log(newString);

  const num = Math.floor(Math.random() * 10);
  if (num % 2 == 0) {
    console.log("The number is even", num);
  } else {
    console.log("The number is odd", num);
  }

  if (num % 2 == 0 && num > 1 && num < 8) {
    console.log("You are lucky, here is Janos Vitez one more time, nicely.");
    console.log(newString);
  }

  console.log("\nGoodbye");
}
