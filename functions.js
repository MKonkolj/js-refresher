let haveMoney = false;

// Arrow Functions
// ------------------------------------------------------------
// Function Declaration
function winLottery() {
  haveMoney = true;
}

// Arrow Function
const spendMoney = () => {
  haveMoney = true;
};

// Immediately Invoked Function Expression (IIFE)
(function (question) {
  // why am i poor again?
})();

// Function Expression
const ask = function () {
  // why am i poor again?
};

// Truthy and Falsy Values
// --------------------------------------------------------------
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

const falsyValues = [false, 0, "", null, undefined, NaN];

// Ternary Operators
// ------------------------------------------------------------

// Logical (Ternary) Pperators
const car = haveMoney && "BMW";
const transport = car || "walking";
const walkingHome = !transport;

// if Shorthand
if (haveMoney) spendMoney();

// Conditional (Ternary) Operator
if (haveMoney) {
  spendMoney();
} else {
  winLottery();
}

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

const anoyingQuestions = canAfford(maybach)
  ? "👑"
  : canAfford(bmw)
  ? "😎"
  : canAfford(ford)
  ? "😀"
  : canAfford(dacia)
  ? "😊"
  : "🥲";
