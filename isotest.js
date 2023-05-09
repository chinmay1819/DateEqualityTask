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


if(isIsoDateString("2023-05-09T10:45:30.000Z")){
    console.log(convertDateObjectToString(new Date("2023-05-09T10:45:30.000Z")))
}// true
// console.log(isIsoDateString("2023-05-09")); // false
// console.log(isIsoDateString("May 9, 2023")); // false





// ------------------------------
// let a={
//     c:8
// };
// if(typeof(a)==="object")
//     console.log('it is string')