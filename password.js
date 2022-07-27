const obfuscate = (string) => {
  let password = ""
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
      password += '4'
    } else if (string[i] === 'e') {
      password += "3"
    } else if (string[i] === 'o') {
      password += "0"
    } else if (string[i] === 'l') {
      password += "1"
    } else {
      password += string[i]
    }
  }
  return password
}

console.log(obfuscate("lighthouse labs"))