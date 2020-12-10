const camelCase = function(input) {
  const string = input.split(" ");
  let result = string[0];
  for (let i = 1; i < string.length; i++) {
    result += string[i][0].toUpperCase() + string[i].slice(1)
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/*
Expected Output
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/