/*
* Прогнозирование
* Создаём нейрон
* */


// Чистая сеть
// function neural_network (input, weight) {
//     prediction = input * weight;
//     return prediction;
// }
// // Передача одной точки данных
// let number_of_toes = [8.5, 9.5, 10, 9];
// let input = number_of_toes[0];
// let pred = neural_network(input, weight);
// console.log(pred)

/*
* Число игр = 0.1
* Победы/поражение = 0.2
* Болельщиков = 0
* */
//let weight = [0.1, 0.2, 0];

/*
*  =>
*
* Бейсбол:
* toes - текущее среднее число игр
* wlrec - текущая доля игр окончившихся победой(в процентах)
* nfans - число болельщиков (в миллионах)
* */
let toes = [8.5, 9.5, 9.9, 9.0];
let wlrec = [0.65, 0.8, 0.8, 0.9];
let nfans = [1.2, 1.3, 0.5, 1.0];
let weight = [0.1, 0.2, 0];

function w_sum(a, b) {
    if (a.length == b.length){
        let output = 0;
        for (let i = 0; i < a.length; i++) {
            output += (a[i] * b[i])
        }

        return output;
    }
}

function elementwise_multiplication (vec_a, vec_b) {
    if (vec_a.length == vec_b.length){
        let output = [];
        for (let i = 0; i < vec_a.length; i++) {
            //let n = vec_a[i] * vec_b[i];
            output.push(+(vec_a[i] * vec_b[i]).toFixed(2));
        }
        return output
        //console.log(output);
    }
}
//let input = [8.5, 0.65, 1.2];
function neural_network (input, weight) {
    //pred = w_sum(input, weight)
    pred = elementwise_multiplication(input, weight)

    return pred;
}

console.log(neural_network(getProc(toes, wlrec, nfans, 2), weight));

function getProc (a,b,c, numb) {
    let numberI = [];
    if (a.length == b.length && b.length == c.length) {
        for(let i = numb; i <= a.length; i++) {
            numberI.push(a[i], b[i], c[i])
            if (numberI.length == 3){
                break;
            }
        }
    }
    console.log(numberI);
    return numberI;
}

// getProc(toes, wlrec, nfans, 1);




// function getPred (entry, weight) {
//     if (entry.length == weight.length){
//         for (let i = 0; i <= entry) {
//
//         }
//     }
// }

//------------------------------------------------//
/*
* Создание матрицы
*
* */

/*function matrixArray(rows,columns){
    var arr = new Array();
    for(var i=0; i<rows; i++){
        arr[i] = new Array();
        for(var j=0; j<columns; j++){
            arr[i][j] = i+j+1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
        }
    }
    return arr;
}
var myMatrix = matrixArray(3,3);
console.log(myMatrix)

function matrixNew(row, column) {
    let arr = new Array();
    for (let i = 0; i < row; i++){
        arr[i] = new Array();
        for (let j = 0; j < column; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}*/

/*let n = matrixNew(3, 3);
console.log(n)

n[0][0] = 0.5;
console.log(n)*/


class CreateMatrix {
    constructor(rows, column) {
        this.rows = rows;
        this.column = column;
        this.arr = this.initMatrix();
        this.matrix = this.initMatrix();
    }

    initMatrix () {
        let arr = new Array();
        for (let i = 0; i < this.rows; i++){
            arr[i] = new Array();
            for (let j = 0; j < this.column; j++) {
                arr[i][j] = 0;
            }
        }
        // console.log(arr);
        return arr;
    }

    log () {
        console.log(this.matrix)
    }

    renameRow (numbRow, numbColumn, value) {

        //let matrix = this.initMatrix();
        this.matrix[numbRow][numbColumn] = value;
        console.log(this.matrix);
    }

}

let newMatrix = new CreateMatrix(3, 3);
console.log(newMatrix.initMatrix())
// newMatrix.log();
newMatrix.renameRow(0 ,0, 0.5);
newMatrix.renameRow(0 ,1, 0.6);
newMatrix.renameRow(0 ,2, 0.3);
newMatrix.log();
/// Второй