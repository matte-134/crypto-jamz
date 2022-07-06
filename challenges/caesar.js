/*
Go here for more info:
https://mv-swe-docs.netlify.app/notes/extensions/cryptography.html#caesar-shift

The Caesar Shift is produced by rotating the alphabet and swapping the letters of the original message with the rotated alphabet.
If the key is 2, then the original and rotated alphabets are:

abcdefghijklmnopqrstuvwxyz
CDEFGHIJKLMNOPQRSTUVWXYZAB

so a becomes C and b becomes D and so on.

Use `npm run test:caesar` in the terminal to test your solutions
*/


/**
 * Encrypts a msg using the caesar cypher
 * @param {string} msg - the original text in lowercase
 * @param {number} key - the amount by which to rotate the alphabet
 * @returns {string} the encrypted text in UPPERCASE
 */
function caesarEncode(msg, key) {
  let newCode = ""
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let str1 = alphabet.slice(key)
  let str2 = alphabet.slice(0, key)
  let newAlphabet = str1 + str2
  for (i = 0; i < msg.length; i++) {
    let char = msg[i];
    if (char === " ") {
      newCode += char
    } else {
      let index = alphabet.indexOf(char)
      newCode += newAlphabet.charAt(index)
    }
  }
  return newCode.toUpperCase()
}  
 


/**
 * Decrypts a message which was encrypted using the caesar cypher
 * @param {string} cyp - a message in UPPERCASE which has been encrypted using the caesar cypher 
 * @param {number} key - the key which was used to encrypt the message
 * @returns {string} the decrypted (original) text in lowercase
 */
function caesarDecode (cyp, key) {
  let newCode2 = ""
  let alphabet2 = "abcdefghijklmnopqrstuvwxyz"
  let estr1 = alphabet2.slice(key)
  let estr2 = alphabet2.slice(0, key)
  let newAlphabet2 = estr1 + estr2
  cyp = cyp.toLowerCase();
  for (i = 0; i < cyp.length; i++) {
    let char2 = cyp[i];
    if (char2 === " ") {
      newCode2 += char2
    } else {
      let index2 = newAlphabet2.indexOf(char2)
      newCode2 += alphabet2.charAt(index2)
    }
  }
  return newCode2
}

module.exports = { caesarEncode, caesarDecode }
