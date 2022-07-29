const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

const result = input.map((result) => {
  let numbers = Object.values(result);
  return Math.sqrt(Math.pow(numbers[0], 2) + Math.pow(numbers[1], 2));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);