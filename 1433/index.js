function checkIfCanBreak(s1, s2){
  const sortedS1= s1.split('').sort();
  const sortedS2= s2.split('').sort();

  const s1BreaksS2= sortedS1.every((char, i) => char >= sortedS2[i]);
  const s2BreaksS1= sortedS2.every((char, i) => char >= sortedS1[i]);
  return s1BreaksS2 || s2BreaksS1;
}