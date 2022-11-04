function solve(arr, criteria) {
    let array = JSON.parse(arr);
    let [key, value] = criteria.split('-');
    
    let colection = [];  
    let counter = 0;
    for (const el in array){ 

        //console.log(array[el][key]);

        if (array[el][key] === value) {
            colection.push(`${counter++}. ${array[el]['first_name']} ${array[el]['last_name']} - ${array[el]['email']}`); 
                     
        }   
       
    }

   return colection.join('\n').trimEnd();
}
console.log(solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
));