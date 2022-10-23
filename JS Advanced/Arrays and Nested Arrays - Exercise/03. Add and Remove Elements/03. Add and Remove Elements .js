function solve(arr) {

    let num = 1;
    const array = [];
 
    for(let i = 0; i < arr.length; i++){
 
     arr[i] != 'add' ? array.pop() : array.push(num);
     
     num ++;
    } 
    if(array.length == 0){
        array.push('Empty');
    }
    return array.join('\n');  
 }
 
 // console.log(solve(
 //     ['add',
 //     'add',
 //     'add',
 //     'add']
 // ));
 console.log(solve(
     ['add',
     'add',
     'remove',
     'add',
     'add']
 ));
 // console.log(solve(
 //     ['remove',
 //     'remove',
 //     'remove']
 // ));