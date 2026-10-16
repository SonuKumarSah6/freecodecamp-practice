  let result = "\n";

  for (let i = 0; i < 
  rows; i++) {
    let spaces = " ".
    repeat(isInverted ? i 
    : rows - 1 - i);
    let characters = 
    pattern.repeat(2 * 
    (isInverted ? rows - 
    1 - i : i) + 1);

    result += spaces + 
    characters + "\n";
  }

  return result;
}

console.log(pyramid("o", 
4, false));
console.log(pyramid("p", 