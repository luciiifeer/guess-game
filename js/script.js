
let box01 = document.querySelector(".box01")
let input01 = document.querySelector(".input01")
let error01 = document.querySelector(".error01")
let btn01 = document.querySelector(".btn01")
// ==========================================

let box02 = document.querySelector(".box02")
let input02 = document.querySelector(".input02")
let error02 = document.querySelector(".error02")
let btn02 = document.querySelector(".btn02")
let heading02 = document.querySelector(".heading02")
// ==================================================

let box03 = document.querySelector(".box03")
let input03 = document.querySelector(".input03")
let error03 = document.querySelector(".error03")
let btn03 = document.querySelector(".btn03")

// ==========================================

let box04 = document.querySelector(".box04")
let input04 = document.querySelector(".input04")
let error04 = document.querySelector(".error04")
let btn04 = document.querySelector(".btn04")
let heading04 = document.querySelector(".heading04")
// ==================================================

let box05 = document.querySelector(".box05")
let result = document.querySelector(".result")
let chanceLeft = document.querySelector(".chance")
let player1input = document.querySelector(".player1input")
let chance = 5

// ==================================================


btn01.addEventListener("click", function(){
    if(input01.value == ""){
        error01.innerHTML = "Please Enter Your Name"
    }else{
        error01.innerHTML = ""
        box01.style.display = "none"
        box02.style.display = "flex"
        heading02.innerHTML = input01.value;
    }
})

// =================================================

btn02.addEventListener("click", function(){
    if(input02.value == ""){
        error02.innerHTML = "Please Input a Number 0 to 9"
    }else if(input02.value >= 0 && input02.value <= 9){
        box02.style.display = "none"
        box03.style.display = "flex"
    }else{
        error02.innerHTML = "Please Input a Number Between 0 to 9"
    }if (input02.value < 0 && input02.value >9){
        error02.innerHTML = "Please Input a Number 0 to 9"
    }
})

// =====================================================

btn03.addEventListener("click", function(){
    if(input03.value == ""){
        error03.innerHTML = "Please Enter Your Name"
    }else{
        error03.innerHTML = "";
        box03.style.display = "none";
        box04.style.display = "flex";
        heading04.innerHTML = input03.value;
    }
});

// ====================================================

btn04.addEventListener("click", function(){
    if(input04.value == ""){
        error04.innerHTML = "Guess The Number Between 0 To 9"
    }else {
        if(input02.value == input04.value){
            box04.style.display = "none"
            box05.style.display = "flex"
            result.innerHTML = ` ${input03.value} Win`;
        }else{
            chance--
            chanceLeft.innerHTML = `You Have Chance Left ${chance}`
            if(chance == 0){
                box04.style.display = "none"
                box05.style.display = "flex"
                result.innerHTML = ` ${input01.value} Win`;
                player1input.innerHTML = `Player One's Input ${input02.value}`;
            }
        }
    }
})









