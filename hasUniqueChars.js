// Write your code 
const hasUniqueChars = (name) =>{
    let check = new Set();
    let arr = [];
    let i = 0;
    while (i < name.length){

        check.add(name[i]);
        arr[i] = name[i];
        i++;
    }
    // console.log([...check])
    // console.log([...arr])

    if (arr.length == check.size){
        return true;

    }else if (check.size !== arr.length){
        return false;
    }
}
let word = `tOol`;
console.log(hasUniqueChars(word))

const hasUniqueChars2 = (name) =>{
    for (i = 0; i < name.length; i ++){
        let j = i + 1;
        if (name[i] === name[j]){
            console.log(name[i])
            console.log(name[j])
            return false;
        }
  }
return true;

    /*
    for (i = 0; i < name.length; i++){
        for(let j = i + 1; j < name.length; j++)
        if(name[i] === name[j]){
            return false;
        }
    }
    return true */
}

console.log(hasUniqueChars2(word))



