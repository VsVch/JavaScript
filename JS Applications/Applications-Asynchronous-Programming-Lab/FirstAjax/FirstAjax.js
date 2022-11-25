async function asyncCall() { 
     console.log('calling'); 
     let result = await resolveAfter2Seconds();
     console.log(result); 
    }
    