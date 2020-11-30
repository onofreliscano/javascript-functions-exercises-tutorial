// Your code goes here:

let renderPerson = (name, birth, eye, age, gender) => name + " is a " + age + " years old " + gender + " born on " + birth + " with " + eye + " eyes  "  ;



const rapid = (string) =>  (string.replace(/[aeiou]/gi, '')).toUpperCase();


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));