let arr = [11, 22, 33, 44, 55];

const companies = [
    {name:"Company One", category:"Finance", start:1981, end:2003},
    {name:"Company Two", category:"Retail", start:1992, end:2008},
    {name:"Company Three", category:"Auto", start:1999, end:2007},
    {name:"Company Four", category:"Retail", start:1989, end:2010},
    {name:"Company Five", category:"Technology", start:2009, end:2014},
    {name:"Company Six", category:"Finance", start:1987, end:2010},
    {name:"Company Seven", category:"Auto", start:1986, end:1996},
    {name:"Company Eight", category:"Technology", start:2011, end:2016},
    {name:"Company Nine", category:"Retail", start:1981, end:1989},
]

// Map Function
function map(array,func){
    // First Step:Create Empty Array
    let createdArray = [];

    // Second Step - Iterate the array from paranthesis
    for(let i = 0; i < array.length; i++){
        let result = func(array[i] ,i ,array);
        // let 
        createdArray.push(result);
    }
    return createdArray;
}



var a = map(companies, function(value, index, array){
    return value;
})
console.log(a)