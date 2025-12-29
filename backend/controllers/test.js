const array = [
  {name: 'name1', id: '1'},
  {name: 'name2', id: '2'},
  {name: 'name3', id: '3'},
];

const newArray = array.map(e => (
  {name: e.name}
));

console.log(newArray);
