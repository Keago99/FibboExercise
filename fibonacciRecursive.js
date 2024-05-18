

function fibs(num){
    var fibsArray = [];

    for (let i = 0; i < num; i++){
        if (i === 0 ){
            fibsArray.push(0);
        }
        if (i === 1 || i === 2){
            fibsArray.push(1);
        }
        if (i > 2){
            fibsArray.push(fibsArray[i-1] + fibsArray[i-2])
        }
    }
    return fibsArray;
}

const fibsRec = (number, result) => {
    if(result === undefined || !Array.isArray(result) || result.length === 0){
        result = [];
    } 
    if (number === 1) return result;

    const i = result.length;

    if (i === 0) result.push(0);
    if (i <= 2) result.push(1);
    if (i > 2) result.push(result[i-1] + result[i-2]);

    return fibsRec(number - 1, result);
}


var testo = fibs(8);
console.log(testo);

var testo2 = fibsRec(8);
console.log(testo2);