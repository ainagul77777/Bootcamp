const words = [
    "javascript",
    "object",
    "python",
    "task",
    "makers"
]

let word = [Math.floor (Math.random()*words.length)]

let answerArr = word.split("").map(function(item){
    return "_"
})

let remainingleters = word.length;

let attempts = 0;
let trueattempts = 0;

while(remainingletters > 0){
    let guess = prompt (
    "Угадайте букву или нажмите отмена чтобы выйти из игры \ n"
    + answerArr.join()).toLowerCase();

    if (guess==="") continue;
    if (guess===null) break;

    if(guess.length !==1) {
        alert ("Пожалуйста, введите только одну букву.");
        continue;
    }
    let istrueGuess = false;
    word.split("").map(function(item,index){
        if(guess== item && answerArr[index]==="_"){
            answerArr [index]===guess;
            remainingletters--;
        }
    })
    if(isTrueGuess);
        trueAttempt++;
}
     attempts++;
}
if(!remainingletters){
 alert("Ураа!!!Вы отгодали слово: \n"+answerArr.join("")+
 alert("кол-во попыток:" +attempts);
 alert ("общий счет"+ Math.floor(100/attempts*trueattempts));

}else{
    
}
