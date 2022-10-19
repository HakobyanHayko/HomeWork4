function mapLetters(string){
    let lettersObj = {} ;
    for(let i = 0 ; i < string.length ; i++){
        if(string[i] in lettersObj){
            lettersObj[string[i]].push(i)
        }else{
            lettersObj[string[i]] = [i]
        }
    }
    return lettersObj
}
console.log(mapLetters("froggy"))
