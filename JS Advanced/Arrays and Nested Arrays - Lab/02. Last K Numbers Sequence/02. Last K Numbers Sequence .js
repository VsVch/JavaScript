function numSequence(a, b) {

    let array = [1,];  
  
    for (let i = 0; i < a -1; i++) {
      
      let newElement = 0;
  
      for (let j = i - b + 1; j < array.length; j++) {      
  
        let current = array[j];
        if (current === undefined) {
          current = 0;
        }
        newElement += current;
      }
  
      array.push(newElement);
    }
    return array;
  }
  
  console.log(numSequence(6, 3));
  console.log(numSequence(8, 2));