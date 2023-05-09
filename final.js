// let lhs="2023-05-09T10:45:30.000Z";
// let rhs="2023-05-09T10:45:30.000Z";
let lhs = 'March 9 2023'
let rhs = 'March 9 2023'
let lhsFinal;
let rhsFinal;

let typeLhs = typeof (lhs);
let typeRhs = typeof (rhs);
function checkEquality(lhsFinal, rhsFinal) {

    if (lhs === rhs)
        return true

    return false
}
function countObliqueIsTwo(str) {
    let oblique = '/';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == oblique)
            count++;
    }
    if (count == 2)
        return true

    return false;
}

function countHyphenIsTwo(str) {
    let hyphen = '-';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == hyphen)
            count++;
    }
    if (count == 2)
        return true

    return false;
}
function convertDateObjectToString(dateObject) {
    let date = dateObject.getDate();
    let month = dateObject.getMonth() + 1;
    let year = dateObject.getFullYear();

    date = date.toString();
    if (date.length == 1) {
        date = '0' + date
    }
    month = month.toString();
    if (month.length == 1) {
        month = '0' + month
    }

    year = year.toString();

    let result = date + '/' + month + '/' + year;

    return result;
}
function isIsoDateString(str) {
    // The regular expression to match the ISO 8601 date string pattern
    const isoDateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
    // Test the string against the regular expression
    return isoDateRegex.test(str);
}

function formatDate(str){
    // console.log('formatDate :: ')
    str=new Date(str);
    let day=str.getDate();
    let month=str.getMonth()+1;
    let year=str.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    // console.log(formattedDate)
    return formattedDate
}

if (typeLhs === "object") {
    lhsFinal = convertDateObjectToString(lhs);
}
if (typeLhs === "string") {
    if (isIsoDateString(lhs))
        lhsFinal = convertDateObjectToString(new Date(lhs));
    else {
        if (lhs.length <= 10) {
            if (countObliqueIsTwo(lhs))
                lhsFinal = lhs
            else if (countHyphenIsTwo(lhs))
                lhsFinal = lhs
        }
        else if(lhs.length >10){
            console.log('......')
            lhsFinal=formatDate(lhs);
            console.log('-------------------')
            console.log('lhsFinal :: ',lhsFinal)
        }  
    }

}
if (typeLhs === "number") {
    lhsFinal = convertDateObjectToString(new Date(lhs))
}

if (typeRhs === "object") {
    rhsFinal = convertDateObjectToString(rhs);
}
if (typeRhs === "string") {
    
    if (isIsoDateString(rhs))
        rhsFinal = convertDateObjectToString(new Date(rhs));
    else {
        if (rhs.length <= 10) {
            if (countObliqueIsTwo(rhs))
                rhsFinal = rhs
            else if (countHyphenIsTwo(rhs))
                rhsFinal = rhs
        }
        else if(rhs.length>10){
            rhsFinal=formatDate(rhs);
            console.log("rhsFinal :: " , rhsFinal)
        } 
        
        
    }
}

if (typeRhs === "number") {
    rhsFinal = convertDateObjectToString(new Date(rhs))
}
console.log(lhsFinal);
console.log(rhsFinal)


console.log(checkEquality(rhsFinal, lhsFinal));
