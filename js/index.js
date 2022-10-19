// Iteration 1: Names and Input
const hacker1 = "lucas";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "lucas";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else {
  if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length}  characters.`
    );
  } else {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`
    );
  }
}

// Iteration 3: Loops
//3.1
let driver = [];
for (let i = 0; i < hacker1.length; i++) {
  driver[i] = hacker1[i].toUpperCase();
}
console.log(driver.join(" "));
//3.2
let copilot = [];
for (let i = hacker2.length - 1; i >= 0; i--) {
  copilot[i] = hacker2[i];
}
let reverse = copilot.reverse();
console.log(reverse.join(""));

//3.3
firstLetterH1 = hacker1.substring(0, 1);
firstLetterH2 = hacker2.substring(0, 1);

if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
} else {
  if (firstLetterH1 < firstLetterH2) {
    console.log(`The driver's name goes first.`);
  } else {
    console.log(`Yo, the navigator goes first definitely.`);
  }
}
