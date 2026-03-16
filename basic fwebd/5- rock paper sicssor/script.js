let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msgg");
let us=document.querySelector("#user-score");
let cs=document.querySelector("#computer-score");

const compchoice=()=>{
    let options=["rock","paper","scissors"];
   const index= Math.floor(Math.random()*3)
   return options[index];
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        game(userchoice);
    })
})
const game=(userchoice)=>{
    let userwin=true;
    console.log(`user's choice ${userchoice}`);
    const b=compchoice();
    console.log(`comp's choice ${b}`);
    if(userchoice===b){
        console.log("Draw");
         msg.innerText="Its a Draw, play again.";
        return 0;
    }
    else{
        if(userchoice==="rock"){
            userwin=b==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            userwin=b==="scissors"? false:true;
        }
        else if(userchoice==="scissors"){
            userwin=b==="rock"? false:true;
        }
    }
    showwin(userwin);
}
const showwin=(userwin)=>{
    if (userwin===true){
        console.log("you win");
        msg.innerText="You Win!";
        userscore++;
        us.innerText=userscore;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you loose");
         msg.innerText="You Lost";
         compscore++;
         cs.innerText=compscore;
          msg.style.backgroundColor="red";
    }
}