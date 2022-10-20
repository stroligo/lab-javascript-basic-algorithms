// Iteration 1: Names and Input
const hacker1 = "luces";
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
if (hacker1.localeCompare(hacker2) === 0) {
  console.log(`What?! You both have the same name?`);
}
if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`The driver's name goes first.`);
}
if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`Yo, the navigator goes first definitely.`);
}

// BONUS1
let text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat consequat arcu tristique placerat. Mauris pharetra arcu in ultricies volutpat. Pellentesque neque risus, malesuada eu molestie eget, auctor vel tortor. Sed at massa non dui porta ultricies. Etiam urna neque, laoreet sagittis diam vel, eleifend lacinia felis. Aenean sodales convallis nibh, sed facilisis libero. Donec vel scelerisque arcu. Nulla aliquam, libero placerat rhoncus accumsan, mauris est pharetra justo, fermentum aliquam urna massa sed dui. Aliquam mattis velit urna, sed rhoncus metus eleifend quis. Integer nunc nisi, bibendum lacinia feugiat et, iaculis sit amet libero. Sed egestas odio vel tellus commodo, eu pharetra nibh iaculis. Mauris malesuada libero auctor urna laoreet euismod. Integer et nisl id purus faucibus sodales sed et justo. Integer nec aliquam ipsum, sed imperdiet tortor. Sed tincidunt nisi leo.Quisque ullamcorper ultrices nisi, quis consectetur turpis iaculis in. Pellentesque sem augue, maximus vitae elit ac, mollis luctus risus. Vestibulum libero enim, hendrerit vel ultricies a, sodales non felis. Mauris elit massa, aliquet in aliquam at, condimentum at libero. Pellentesque vel sapien malesuada, tempor nisl id, fermentum magna. Integer ut elementum ligula, id tincidunt eros. In vel magna mollis quam pharetra condimentum. Nam a diam porta, tincidunt ipsum vel, auctor metus.";

console.log("TOTAL CARACTER:" + text.length);

let words = 0;
for (let i = 0; i < text.length; i++) {
  if (text.charAt(i) === " ") {
    words++;
  }
}
words++;
console.log("TOTAL WORDS:" + words);

let findWord = 0;
for (let i = 0; i < text.length; i++) {
  let etsSearch = text.charAt(i) + text.charAt(i + 1);
  if (etsSearch === "et" || (etsSearch === "Et" && text.charAt(i + 2) == " ")) {
    findWord++;
  }
}
console.log("TOTAL WORDS ET:" + findWord);

// BONUS2
