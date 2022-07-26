const roll = function (times) {
  let output = []

  for (let i = 0; i < times; i++) {
    let number = Math.floor(Math.random() * 6)
    output.push(number)
  }
  return output.join(",")
}

console.log(roll(3))