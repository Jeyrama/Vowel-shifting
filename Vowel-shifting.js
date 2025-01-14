/*
You get a "text" and have to shift the vowels by "n" positions to the right
(Negative value for n should shift to the left).

"Position" means the vowel's position if taken as 
one item in a list of all vowels within the string.
A shift by 1 would mean, that every vowel shifts to the place of the next vowel.

Shifting over the edges of the text should continue at the other edge.

Examples:
  text = "This is a test!"
  n = 1
  output = "Thes is i tast!"

  text = "This is a test!"
  n = 3
  output = "This as e tist!"

If text is null or empty, 
return exactly this value.
Vowels are "a,e,i,o,u".
*/


// Solution

const vowelShift = (text, n) => {
  if (!text) return text;
  let arr = text.match(/[aeiou]/gi) || [];
  arr = arr.slice(-n % arr.length).concat(arr.slice(0, -n % arr.length));
  return text.replace(/[aeuio]/gi, _ => arr.shift());
};

// or

const vowelShifter = (text, n) => {
  if(text === null) return null
  const v = 'aeiouAEIOU'
  const vowels = [...text].filter(c => v.includes(c))
  
  if(n > 0){
    while(n--) vowels.unshift(vowels.pop())
  }else{
    while(n++) vowels.push(vowels.shift())
  }
  
  vowels.reverse()
  
  return [...text].map(c => v.includes(c) ? vowels.pop() : c).join('')
}