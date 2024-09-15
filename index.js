//Author : Khaleel 
//Date   : 15-sep-2024
//Js 

const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissors");
const player_dec=document.getElementById("player-dec");
const comp_dec=document.getElementById("comp-dec");
const result=document.getElementById("result");

let rps_str=["Rock","Paper","Scissors"];
let player_score=0;
let computer_score=0;
rock.addEventListener("mouseover",event=>{
    event.target.classList.add("hover");
});
rock.addEventListener("mouseout",event=>{
    event.target.classList.remove("hover");
});
paper.addEventListener("mouseover",event=>{
    event.target.classList.add("hover");
});
paper.addEventListener("mouseout",event=>{
    event.target.classList.remove("hover");
});
scissors.addEventListener("mouseover",event=>{
    event.target.classList.add("hover");
});
scissors.addEventListener("mouseout",event=>{
    event.target.classList.remove("hover");
});


rock.onclick=function(){
    let computer_choose=Math.floor(Math.random() * (3));
    player_dec.innerHTML=`You choose \xa0  \xa0  \xa0 \xa0 \xa0 \xa0 \xa0 :\xa0 \xa0Rock`;
    comp_dec.innerHTML=`Computer Choose \xa0 \xa0 :\xa0 \xa0${rps_str[computer_choose]}`;
    if(computer_choose==0){
        result.textContent=`It's a Tie!! You both choose Rock.`;
    }
    if(computer_choose==1){
        result.textContent=`You lost!! Computer wins..`;
        computer_score+=1;
        document.getElementById("computer_h4").textContent=`Computer Score :\xa0 \xa0${computer_score}`;
    }
    if(computer_choose==2){
        result.textContent=`Hurray!! You Won..!`;
        player_score+=1;
        document.getElementById("player_h4").textContent=`Your Score :\xa0 \xa0${player_score}`;
    }
    

    // console.log(computer_choose);
}
paper.onclick=function(){
    let computer_choose=Math.floor(Math.random() * (3));
    player_dec.innerHTML=`You choose \xa0  \xa0  \xa0 \xa0 \xa0 \xa0 \xa0 :\xa0 \xa0Paper`;
    comp_dec.innerHTML=`Computer Choose \xa0 \xa0 :\xa0 \xa0${rps_str[computer_choose]}`;

    if(computer_choose==0){
        result.textContent=`Hurray!! You Won..!`;
        player_score+=1;
        document.getElementById("player_h4").textContent=`Your Score :\xa0 \xa0${player_score}`;
    }
    if(computer_choose==1){
        result.textContent=`It's a Tie!! You both choose Paper.`;
    }
    if(computer_choose==2){
        result.textContent=`You lost!! Computer wins..`;
        computer_score+=1;
        document.getElementById("computer_h4").textContent=`Computer Score :\xa0 \xa0${computer_score}`;
    }
    // console.log("hello im paper");
}
scissors.onclick=function(){
    let computer_choose=Math.floor(Math.random() * (3));
    player_dec.innerHTML=`You choose \xa0  \xa0  \xa0 \xa0 \xa0 \xa0 \xa0 :\xa0 \xa0Scissors`;
    comp_dec.innerHTML=`Computer Choose \xa0 \xa0 :\xa0 \xa0${rps_str[computer_choose]}`;

    if(computer_choose==0){
        result.textContent=`You lost!! Computer wins..`;
        computer_score+=1;
        document.getElementById("computer_h4").textContent=`Computer Score :\xa0 \xa0${computer_score}`;
    }
    if(computer_choose==1){
        result.textContent=`Hurray!! You Won..!`;
        player_score+=1;
        document.getElementById("player_h4").textContent=`Your Score :\xa0 \xa0${player_score}`;
    }
    if(computer_choose==2){
        result.textContent=`It's a Tie!! You both choose Scissors.`;
    }
    // console.log("hello im scissors");
}





