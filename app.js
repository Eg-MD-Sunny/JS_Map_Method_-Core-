//map method

/*---------------------------------------------------------------------
    Syntex: map(callbackfunction(currentvalue,index,newArray),thisArg)
-----------------------------------------------------------------------*/

/*---------------------------------------------------------------------
    Example: 01
-----------------------------------------------------------------------*/

// var arr = [10,20,30,40,50];
// var newArr = arr.map(function(currentArrValue){
//     //console.log(currentArrValue);
//     //console.log(index);
//     //console.log(newModifyArr);

//     //statement
//     currentArrValue++;
//     //console.log(currentArrValue);

//     //return value
//     return currentArrValue;
// });
// console.log(arr);
// console.log(newArr);


/*---------------------------------------------------------------------
    Example: 02
-----------------------------------------------------------------------*/

// Data Fetching of an array of an object using the map method
// let arr = [
//     {price:"100", product:"Mobile"},
//     {price:"200", product:"AC"},
//     {price:"300", product:"Frize"},
//     {price:"400", product:"Speaker"},
// ];
// let newArr = arr.map(function(currentValue){
//     //console.log(currentValue);
//     //console.log(currentValue.price);
//     //console.log(currentValue.product);

//     //return value
//     //return currentValue.price;
//     return currentValue.product;
// });
// //Call new array value
// console.log(newArr);


/*---------------------------------------------------------------------
    Example: 03
-----------------------------------------------------------------------*/
//Declear Array Object
let studentInfo = [
    {name:'Johir Khan', age:'27', dept:'CSC'},
    {name:'Imran', age:'22', dept:'EEE'},
    {name:'Rana', age:'29', dept:'English'},
    {name:'Santo', age:'21', dept:'Civil'},
    {name:'Rina', age:'26', dept:'Fashion'},
];
//Applying map methhod
let newInfo = studentInfo.map(currentValue=>currentValue.dept);
console.log(newInfo);










