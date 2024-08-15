let score = 0;
let attempts = 0;  
let btn=document.querySelector(".againn");
const colorchange = function(color) {
    document.querySelector("body").style.backgroundColor = color;
}

const mess = function(mes) {
    document.querySelector(".display-msg").textContent = mes;
}

const att = function(atte) {
    document.querySelector('.attempts').textContent= atte;  
}

const scoree=function(sc){
    document.querySelector(".highscore").textContent=sc;
}

let randomnumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomnumber);

// Event listener for the check button
document.querySelector(".check").addEventListener('click', function() {
    const userInput = Number(document.querySelector('.tv').value);

    // Check if input is valid
    if (isNaN(userInput) || userInput < 1 || userInput > 20) {
        colorchange('black');
        mess("Invalid input. Please input a number between 1 and 20.");
        attempts++;
        att(attempts);
       
    } 
    
      
        if (userInput === randomnumber) {
            colorchange('green');
            mess("Great job!");
            score++;
            scoree(score)
            attempts++;
        att(attempts);
        } else if (userInput > randomnumber) {
            colorchange('red');
            mess("Too high.");
            attempts++;
        att(attempts);
        } else if (userInput < randomnumber) {
            colorchange('lightpink');
            mess("Too low.");
            attempts+1;
            att(attempts);
        }
     
    }
    
)


btn.addEventListener('click',function(){
    colorchange('darkblue')
        mess("enter any number")
        attempts=0
        att(attempts)
        score=0;
        scoree(score)
    
})


