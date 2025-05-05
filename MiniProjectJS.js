let colors = document.querySelectorAll(".same");
let para = document.querySelector("p");
let body = document.querySelector("body");
let counter = 0;
let trackColor=[];
let continueGame = true;
let trackIterator =0;
let rightClick=true;

//main function which tells if you selected the right box or not 
function generateColor(){
for (color of colors) {
    color.addEventListener("click",function(){
        if(trackIterator==counter){
            increaseLevel();
            trackIterator = 0;
            }
        else{
            if(this==colors[trackColor[trackIterator]]){
                rightClick=true;
                trackIterator++;
                userRightClick(this);
                if(trackIterator==counter){
                    increaseLevel();
                    trackIterator = 0;
                    }
            }
            else{
                rightClick=false;
                wrongClick();
            }
        }
    });
}}

//Changng box color to green if the user clicks the right button
function userRightClick(box){
    let backColor =box.getAttribute("id");
    box.style.backgroundColor="green";
    if (backColor=="red"){
        colorSelection(box,"#d95980");
    }
    else if (backColor=="blue"){
        colorSelection(box,"#0096FF");
    }
    else  if (backColor=="yellow"){
        colorSelection(box,"#f99b45");
    }
    else{
        colorSelection(box,"#63aac0");
    }
   
}

//Resetting the color to the original box color if user clicked the rght box
function colorSelection(box,backColor){
    setTimeout(function(){
        box.style.backgroundColor=backColor;
    },150);
}

//what happens if a person clicks a wrong box (losing the game)
function wrongClick(){ 
    para.innerHTML = `<b>GAME OVER!!!</b> You Scored <b>${counter-1}</b> <br/> Press any color Button to play again`; 
    body.style.backgroundColor="red";
    setTimeout(()=>{body.style.backgroundColor="white";},400);
    counter = 0;
    trackIterator=0;
}
 

//function to randomly select a div to be blinked
function increaseLevel(){
    para.innerText = `Level ${counter+1}`;
    let randomColor = Math.floor(Math.random() * 4);
    console.log(randomColor);
    console.log(colors[randomColor]);
    if(randomColor==0 ){
        blinkDiv(colors[0],"#d95980");
    }
    else if(randomColor==1){
        blinkDiv(colors[1],"#0096FF");
    }
    else if(randomColor==2){
        blinkDiv(colors[2],"#f99b45");
    }
    else{
        blinkDiv(colors[3],"#63aac0");
    }
    trackColor[counter]=randomColor;
    counter++;
}

//function to blink the box
function blinkDiv(element,color){    
    setTimeout(()=>{element.style.backgroundColor= "black";},500);
    setTimeout(()=>{element.style.backgroundColor=color;},700);
}

generateColor();
