// let lhs=new Date("July 21, 1983 01:15:00");
let lhs = "22445444";
let rhs = "22445444";
let lhsType = typeof (lhs);
let rhsType = typeof (rhs);
let lhsFinal;
let rhsFinal;

function isIsoDateString(str) {
    // The regular expression to match the ISO 8601 date string pattern
    const isoDateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
    // Test the string against the regular expression
    return isoDateRegex.test(str);
}



function checkEquality(lhs, rhs) {
    if (lhs === rhs)
        return true

    return false
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
function validateString(str) {
    if (str.length <= 10)
        return true

    
    return false;
}
if (lhsType === Date) {
    lhsFinal = convertDateObjectToString(lhs)
}
if (rhsType === Date) {
    rhsFinal = convertDateObjectToString(rhs)
}

if (rhsType != String || rhsType != Object) {
    rhs = new Date(rhs);
    rhsFinal = convertDateObjectToString(rhs);
}

if (lhsType != String || lhsType != Object) {
    lhs = new Date(lhs);
    lhsFinal = convertDateObjectToString(lhs);
}

if (lhsType === String) {
    if(validateString(lhs))
        lhsFinal = lhs;
    else if(validateString(lhs)==false){
        console.log('lhs is not in the correct format')
    }
}
if (rhsType === String) {
    if(validateString(rhs))
        rhsFinal = rhs;
    else if(validateString(rhs)==false)
        console.log('rhs is not in the correct format')
}

console.log(checkEquality(lhsFinal, rhsFinal))
