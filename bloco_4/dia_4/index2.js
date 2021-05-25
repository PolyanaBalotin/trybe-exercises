function verifyPalindrome(word){
  let reversedWord = '';
  for (let index = word.length - 1; index >= 0; index -= 1){
      reversedWord += word[index];
  } if (reversedWord === word){
      return true;
  } else {
      return false; 
  } 
} console.log(verifyPalindrome('arara'));
console.log(verifyPalindrome('desenvolvimento'));
