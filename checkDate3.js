const rhs='';
const lhs='';

function convertDateObjectToString(dateObject){
    let date=dateObject.getDate();
    let month=dateObject.getMonth()+1;
    let year=dateObject.getFullYear();
    console.log('year', year)
    date=date.toString();
    if(date.length==1){
        date='0'+date
    }
    month=month.toString();
    if(month.length==1){
        month='0'+month
    }

    year=year.toString();
    console.log(year)
    let result=date+'/'+month+'/'+year;
    console.log(result)
    return result;

}

function checkEquality(lhs,rhs){
    if(lhs===rhs)
    return true;

    return false;
}
console.log('rhs dataType',typeof(rhs))
console.log('lhs dataType',typeof(lhs))
if(typeof(rhs)==="string"){
    console.log('yes')
}



convertDateObjectToString(new Date("July 21, 1983 01:15:00"))

convertDateObjectToString(new Date('2020-03-02T01:11:18.965Z'))