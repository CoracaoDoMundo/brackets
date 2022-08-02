module.exports = function check(str, bracketsConfig) {
    const openBrackets = bracketsConfig.flat().filter((_, i) => i % 2 == 0);
    const closeBrackets = bracketsConfig.flat().filter((_, i) => i % 2 !== 0);

    let bracketsComplects = {};

    for (let i = 0; openBrackets.length > i; i++) {
      bracketsComplects[closeBrackets[i]] = openBrackets[i];
    }

    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentBracket = str[i];

      let topBracket = stack[stack.length - 1];

      if (
        bracketsComplects[currentBracket] === topBracket &&
        stack.length > 0
      ) {
        stack.pop();
      } else {
        stack.push(currentBracket);
      }
    }
    return stack.length === 0;
  };

