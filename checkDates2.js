const moment=require('moment');
let lhs='2020-03-02T01:11:18.965Z'
let rhs='02-02-2020'

// lhs=moment(lhs).format('DD/MM/YYYY');
// console.log(lhs);

// // rhs=moment(rhs).format('DD/MM/YYYY');
// // console.log(rhs)
// if(lhs===rhs){
//     console.log('Dates are Equal')
// }
// else{
//     console.log('Dates are not Equal')
// }


var timeStamp= 1107110465663
var dateFormat= new Date(timeStamp);
console.log(dateFormat.getMonth()+1)



