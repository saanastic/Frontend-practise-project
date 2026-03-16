const url="https://latest.currency-api.pages.dev/v1/currencies/";

const dropdown=document.querySelectorAll(".selectcontainer select");
const btn=document.querySelector("form button");


for(let select of dropdown){
    for(let code in countryList ){
        let newoption=document.createElement("option");
        newoption.textContent=code;
        newoption.value=code;
        if(select.name=="from" && code=="USD"){
            newoption.selected=true;
        }
        else if(select.name=="to" && code=="INR"){
            newoption.selected=true;
        }
        select.append(newoption);
        select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });
}

}
let curr=document.querySelector(".from select");

function updateflag (element){
    let cuercode=element.value;
    let countrycode=countryList[cuercode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;

}
btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector("form input");
    let amt=amount.value;
    if(amt===""|| amt<1){
        amt=1;
        amount.value="1";
    }
    
    let URL=`${url}${curr.value.toLowerCase()}.json`
    let response= await fetch(URL);
    let data = await response.json();
    let data1=data.usd;
   console.log(data1);
    console.log(data1[curr.value.toLowerCase()]);
})
