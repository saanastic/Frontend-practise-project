const btn=document.querySelector("#btn");
let inputtext=document.querySelector("#task")
let task=document.querySelector(".ntask")
const taskList = document.querySelector(".tasklist");
let dateel=document.querySelector(".date p");
let url="https://dummyjson.com/quotes";
let quoteel=document.querySelector(".quote p");

const today=new Date();
const options = {
  weekday: "short",
  month: "short",
  day: "numeric"
};
dateel.textContent = today.toLocaleDateString("en-US", options);

async function getQuote() {
    const response = await fetch(url); 
    const data = await response.json();
    let randomIndex = Math.floor(Math.random() * data.quotes.length);
    let quote = data.quotes[randomIndex].quote;
    console.log(quote);
    quoteel.innerText  = quote;
    }
getQuote();


let addtask=()=>{
    if(inputtext.value===""){
        alert("Please enter a task!");
        return;
    }
    else{
        getQuote();

        const taskDiv = document.createElement("div");
        taskDiv.className = "ntask";

        taskDiv.innerHTML = `
        <input type="checkbox" class="task-check">
        <p>${inputtext.value}</p>
        <button class="delete">
        <i class="fa-solid fa-trash-arrow-up"></i>
        </button>
    `;

    taskList.appendChild(taskDiv);   
    inputtext.value = "";
    }
}
btn.addEventListener("click",addtask);

taskList.addEventListener("click", (e) => {
    if (e.target.closest(".delete")) {
        const task = e.target.closest(".ntask");
        task.style.animation = "fadeOut 0.5s ease forwards";
        setTimeout(() => {

            task.remove();
        }, 1000);
    }
});
const taskist = document.querySelector(".tasklist");
const msg=document.querySelector(".msg");
taskist.addEventListener("change", (e) => {
    if (e.target.matches(".task-check")) {
        const task = e.target.closest(".ntask");
        task.classList.toggle("completed", e.target.checked);
        msg.innerHTML="Congratulations on completing a task!";
        setTimeout(() => {
            msg.innerHTML="";
        }, 3000);
    }
});

