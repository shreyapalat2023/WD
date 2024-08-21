// let items = [250,645,300,900,50];
// Using for OF loop START
// let i = 0;

// for(let val of items){
//     console.log(`value at index ${i} = ${val}`); 
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }
// Using for OF loop END
// Using for loop START

let items = [250,645,300,900,50];
for(let i = 0; i < items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
document.write("values after applying offer:");
document.write("<br>");
document.write(items);
// Using for loop END


// let items = [250,300,500,750];

//for(val of items){
//     let i = 0;
//     console.log(`value of index ${i}=${val}`);
//     let offer = items[i]/10;
//     items[i] -= offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }



