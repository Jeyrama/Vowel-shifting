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