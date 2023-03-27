

//pode ser desse jeito ou no estilo funçao


// let score = 97
// let scoreA = score >= 90 && score <=100
// let scoreB = score >= 80 && score <=89
// let scoreC = score >= 70 && score <=79
// let scoreD = score >= 60 && score <=69
// let scoreF = score < 60 && score >=0

// let scoreFinal;

// if (scoreA){
//   scoreFinal = 'A'
// } else if (scoreB){
//   scoreFinal = 'B'
// }else if (scoreC){
//   scoreFinal = 'C'
// }else if (scoreD){
//   scoreFinal = 'D'
// }else if (scoreF){
//   scoreFinal = 'F'
// }else {
//   scoreFinal = 'Nota inválida'
// }
// console.log(scoreFinal)


//estilo funçao 



function getScore(score){
    
    let scoreA = score >= 90 && score <=100
    let scoreB = score >= 80 && score <=89
    let scoreC = score >= 70 && score <=79
    let scoreD = score >= 60 && score <=69
    let scoreF = score < 60 && score >=0

    let scoreFinal;

    if (scoreA){
        scoreFinal = 'A'
    } else if (scoreB){
        scoreFinal = 'B'
    }else if (scoreC){
        scoreFinal = 'C'
    }else if (scoreD){
        scoreFinal = 'D'
    }else if (scoreF){
        scoreFinal = 'F'
    }else {
        scoreFinal = 'Nota inválida'
    }
    return scoreFinal
}

console.log(getScore(64))
console.log(getScore(98))
console.log(getScore(10))
console.log(getScore(8))
console.log(getScore(79))
console.log(getScore(85))
console.log(getScore(0))
console.log(getScore(-10))
console.log(getScore(90))
console.log(getScore(77))
console.log(getScore(104))