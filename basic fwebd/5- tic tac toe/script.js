let boxes=document.querySelectorAll(".box");
let re=document.querySelector("#reset");
let newb=document.querySelector("#new");
let newBox=document.querySelector(".msgc");
let msg=document.querySelector("#msg");


let turnO=true;
const winPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
            box.style.color="#003049";
           box.style.backgroundColor= "#f9d285ff";
        }
        else{
             box.innerText="X"
             box.style.color = "#d62828";
            turnO=true;
            box.style.backgroundColor= "#f9d285ff";
        }
        box.disabled=true;
        win();
        
    })
    
})
const win=()=>{
    for(let i of winPattern){
    let val1=boxes[i[0]].innerText;
    let val2=boxes[i[1]].innerText;
    let val3=boxes[i[2]].innerText;
    if(val1!="" && val2!="" && val3!=""){
        if(val1=== val2 && val3===val2){
            console.log("winner",val1);
            showWin(val1);
        }
    }
}}

newb.addEventListener("click",resetgame);
re.addEventListener("click",resetgame);

function showWin(a)
{
    msg.innerText=`CONGRATULATIONS,The winner is ${a}`;
    newBox.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }

}
function resetgame(){
    turnO=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        newBox.classList.add('hide');
        box.style.backgroundColor= "#f0f8ff";

    }
}