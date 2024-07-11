// Arrow Functions
// ------------------------------------------------------------
// Function Declaration
function winLottery() {
  haveMoney = true;
}

// Arrow Function
const spendMoney = () => {
  haveMoney = false;
};

// Immediately Invoked Function Expression (IIFE)
(function (question) {
  // why am i poor again?
})();

// Function Expression
const ask = function () {
  // why am i poor again?
};

// Template literals
// --------------------------------------------------------------

// String literal
const introduceYourself = (name, position, tool) => {
  return "Hi! My name is " + name + ",\n I am a " + position + ",\n i like using " + tool;
};

// Template literal
const introduceYourself2 = (name, position, tool) => {
  return `
    Hi! My name is ${name}.
    I am a ${position}.
    i like using ${tool}.`;
};

// Truthy and Falsy Values
// --------------------------------------------------------------
// GPT said:
// In JavaScript, the following values are considered falsy:

// 1. **`false`**: The boolean value `false`.
// 2. **`0`**: The number zero.
// 3. **`-0`**: The number negative zero.
// 4. **`0n`**: The BigInt zero.
// 5. **`""`** (empty string): A string with no characters.
// 6. **`null`**: Represents the intentional absence of any object value.
// 7. **`undefined`**: A variable that has been declared but not assigned a value.
// 8. **`NaN`**: Represents "Not-a-Number" value.

// All other values in JavaScript are considered truthy,
// including empty objects `{}`, empty arrays `[]`, and all other non-zero numbers.

// falsy values you actually encounter
const falsyValues = [false, 0, "", null, undefined, NaN];

// Ternary Operators
// ------------------------------------------------------------

// Logical (Ternary) Pperators
let haveMoney = false;

const car = haveMoney && "BMW";
const transport = car || "walking";
const walkingHome = !transport;

// regular if expression
if (haveMoney) {
  spendMoney();
} else {
  winLottery();
}

// if Shorthand
if (haveMoney) spendMoney();

// ternary if
const whatToDo = haveMoney ? spendMoney() : winLottery();

// Summary
const wallet = 5000;

const maybach = 350000;
const bmw = 86475;
const ford = 40190;
const dacia = 14995;

function canAfford(amount) {
  if (amount > wallet) {
    return true;
  }
  return false;
}

const canAfford = (amount) => amount > wallet;

let mayCar;
if (canAfford(maybach)) {
  myCar2 = "👑";
} else if (canAfford(bmw)) {
  myCar2 = "😎";
} else if (canAfford(ford)) {
  myCar2 = "😀";
} else if (canAfford(dacia)) {
  myCar2 = "😊";
} else {
  myCar2 = null;
}

const myCar2 = canAfford(maybach)
  ? "👑"
  : canAfford(bmw)
  ? "😎"
  : canAfford(ford)
  ? "😀"
  : canAfford(dacia)
  ? "😊"
  : null;

const amIwalkingHome = myCar2 || "walking";
