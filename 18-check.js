function greet (name, owner) {
  if (name===owner){
    return 'Hello boss'
  } else {
    return 'Hello guest'
  }
}
    console.log(greet('Daniel', 'Daniel'), 'Hello boss');
    console.log(greet('Greg', 'Daniel'), 'Hello guest');


  console.log('----------------------------');

  function removeSmallest(number){
     const min = Math.min.apply(null, numbers);
     numbers.splice(numbers.indexOf(min),1);
     return numbers;
  }