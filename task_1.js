function freeShipping(objOfItem){
    let sum = 0 ;
    for(let key in objOfItem){
        sum += objOfItem[key]
    }
    return sum > 50 
}
console.log(freeShipping({ "Flatscreen TV": 399.99 }))
