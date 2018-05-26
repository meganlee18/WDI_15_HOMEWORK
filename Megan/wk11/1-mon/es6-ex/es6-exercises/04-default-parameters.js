// Write a function that takes 3 parameters: greeting, firstName,
// and lastName. Set the default values to 'hello' and your first
// and last name, if no input is provided.

const greeting = function(greet, firstName, lastName){
  return `${greet}, ${firstName} ${lastName}`
}  // fill this in!

console.log(greeting('hello', 'Trying','Tobecool'));

console.log(greeting('hi', 'harry', 'hedger'));
