const knezLoop = ["dal si ikada", "mene voljela", "kao tebe ja"];

const [step1] = knezLoop;
const [, step2] = knezLoop;
const [, , step3] = knezLoop;

const person = {
  firstName: "John",
  age: 31,
};

const person2 = {
  firstName: "John",
  age: 31,
  run: (length) => "He runs" + length + " km.",
};

const { firstName, age } = person;

const idCard = {
  firstName: firstName,
  age: age,
};

const idCard2 = {
  firstName,
  age,
};

const phoneContact = {
  ...person,
  phoneNumber: "+38160123456",
};

const newPerson = { ...person };
console.log(person === newPerson);
