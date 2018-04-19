var femaleNames = ['Kasia', 'Ania', 'Magda'];
var maleNames = ['Ryszard', 'Ignacy', 'Wawrzyniec'];

var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';

if(allNames.indexOf(newName) === -1) {
  allNames.push(newName);
};

console.log(allNames);
