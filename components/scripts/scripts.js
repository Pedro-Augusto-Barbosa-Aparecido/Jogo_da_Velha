function verifyWinner(board = [[""],[""]], simbol = ""){

    if((simbol===board[0][0]) && (simbol===board[0][1]) && (simbol===board[0][2])){
        return true
    }

    if((simbol===board[1][0]) && (simbol===board[1][1]) && (simbol===board[1][2])){
        return true
    }

    if((simbol===board[2][0]) && (simbol===board[2][1]) && (simbol===board[2][2])){
        return true
    }

    if((simbol===board[0][0]) && (simbol===board[1][0]) && (simbol===board[2][0])){
        return true
    }

    if((simbol===board[0][1]) && (simbol===board[1][1]) && (simbol===board[2][1])){
        return true
    }

    if((simbol===board[0][2]) && (simbol===board[1][2]) && (simbol===board[2][2])){
        return true
    }

    if((simbol===board[0][0]) && (simbol===board[1][1]) && (simbol===board[2][2])){
        return true
    }

    if((simbol===board[0][2]) && (simbol===board[1][1]) && (simbol===board[2][0])){
        return true
    }

    else{
        return false
    }

}

function resetGame(board = [[""],[""]]){
    /*This function is only for this project*/

    for (let index = 0; index < board.length; index++) {
      
      for (let index2 = 0; index2 < board.length; index2++) {
       
        board[index][index2] = ''

      }

    }

    return board

}

function setScreenGame(simbol = ''){

    var arrayToReturn = [simbol,"GameScreen"]

    return arrayToReturn

}

function returnMenu(){
    
    return "MenuScreen"

}

function returnScreenGame(){

    return "GameScreen"

}

function setWinnerScreen(){

    return "WinnerScreen"

}

function changeToComputer(){

    return "ComputerDifficultScreen"

}

function choose(){

    return "Choose"

}

function verifySimbol(simbol = ""){

    var argsReturn = [simbol]

    if(simbol === "X"){
        argsReturn.push("O")
    }else{
        argsReturn.push("X")
    }

    return argsReturn

}

function robotPlay(simbol = '', time = false, board = [[""],[""]], line = 0, column = 0){

    if(time){

        var arrayLine = _sortear(2,2)
        var arrayColumn = _sortear(2,2)
        var lineOk = false
        var columnOk = false

        for(var i = 0; i < board.length; i++){
            for(var c = 0; c<board.length; c++){
                if(board[arrayLine[i]][arrayColumn[c]] !== ''){
                    board[arrayLine[i]][arrayColumn[c]] = simbol
                    return board
                }
            }
        }

    }

    else{

        board[line][column] = simbol
        return board

    }

}

function played(line = 0, column = 0, board = [[""],[""]]){

    if(board[line][column] !== ''){
        return true
    }

    else{
        return false
    }

}

function _sortear(quantidade = 0, maximo = 0) {
    var numeros = [];

    // Preenche um array com os números de 1 ao maximo
    for (var numero = 1; numero <= maximo;  numero++) {
    numeros.push(numero);
    }
    
    numeros.sort(function randomizar(a, b) {
    return Math.random() * 2 - 1; // Ordena randomicamente
    });

    return numeros.splice(0, quantidade);
}

module.exports = {

    verifyWinner,
    resetGame,
    returnScreenGame,
    returnMenu,
    setScreenGame,
    setWinnerScreen,
    verifySimbol,
    changeToComputer,
    robotPlay,
    _sortear,
    played,
    choose,

}