"use strict";
let text=document.querySelector("#text");
let bird1=document.querySelector("#bird1");
let bird2=document.querySelector("#bird2");
let btn=document.querySelector("#btn");
let rocks=document.querySelector("#rocks");
let forest=document.querySelector("#forest");
let water=document.querySelector("#water");
let header=document.querySelector("header");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    bird1.style.transform = `translate(${value*-1}px, ${value*-0.5}px)`;
    bird2.style.transform = `translate(${value*0.5}px, ${value*-1.5}px)`;
    btn.style.transform   = `translateY(${value*2.5}px)`;
    rocks.style.transform = `translateY(${value*-0.12}px)`;
    forest.style.transform= `translateY(${value*0.25}px)`;
});