if(localStorage.getItem("num") == undefined){
    document.getElementById("guess-mode").style.display = "none";
}else{
    document.getElementById("generate-mode").style.display = "none";
    document.getElementById("bguess").style.display = "inline-block";
    document.getElementById("breplay").style.display = "inline-block";
}

//Generate button click
function generateRandomNumber(){
    let rn = Math.floor(Math.random() * (999999 - 100000) + 100000) + 1;
    localStorage.setItem("num", rn)
    document.getElementById("number").innerHTML = localStorage.getItem("num");
    document.getElementById("result").innerHTML = "refreshing in 5 seconds";
    setInterval(function(){location.reload();}, 5000) //relode page in 5 seconds
}

//guess button click
function guess(){
    let counter = 0;
    let num = String(localStorage.getItem("num"));
    let guess = String(document.getElementById("guessed").value);
    if(guess == ''){
        alert("please enter the number");
    }else if(guess.length != 6){
        document.getElementById("result").innerHTML = `Please enter 6 digits`;
    }else{
        for(let i = 0; i < guess.length; i++){
            if(num[i] == guess[i]){
                counter++;
            }
        }
        if(counter == 6){
            document.getElementById("result").innerHTML = `you guessed all right`;
        }else{
            document.getElementById("result").innerHTML = `you guessed ${counter} right`;
        }
    }
}

//replay button
function reguess(){
    localStorage.clear();
    location.reload();
}

//clear the local storage after 1 minutes
setInterval(function(){
    localStorage.clear();
    location.reload();},60000)