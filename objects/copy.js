 let user1 = {
    name: "pappu",
    address: {
        city: "indore"
    }
 };


//  shallo copy
//  let user2 = {...user1}
//  user2.address.city = "bhopal";
//  console.log(user1.address.city);
//  console.log(user2.address.city);


 let user2 = structuredClone(user1);
 user2.address.city = "bhopal";
 console.log(user1.address.city);
 console.log(user2.address.city);