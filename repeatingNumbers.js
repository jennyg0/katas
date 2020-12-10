const repeatNumbers = function(data) {
  let result = "";
  for (const array of data) {
    let i = 0;
    while ( i < array[1]) {
      result += array[0];
      i++;
    }
    if (data.length > 1 && data.indexOf(array) < data.length - 1) {
      result += ", ";
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/*
Expected Output
1111111111
11, 222
10101010, 343434343434, 9292
*/