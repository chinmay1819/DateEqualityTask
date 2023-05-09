const moment=require('moment')

let lhs='2020-03-02T01:11:18.965Z';
let rhs='02-03-2020';
if(lhs.length>10){
 lhs=moment(lhs).format('DD-MM-YYYY')
 console.log(lhs)
}
if(rhs.length>10){
  rhs=moment(rhs).format('DD-MM-YYYY')
}


if(rhs===lhs){
    console.log('lhs and rhs are equal')
}
else{
    console.log('Not Equal')
}