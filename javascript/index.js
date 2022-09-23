/*
index javascript Page of Kayven's website
ST0501: Front-End Web Development
CA2:Interactive Website
File Name: index.js
Author: Kayven Chieng Yan Heng
Date:  08/07/2022
Class: DCITP/FT/1A/02
Student ID:P2222639
*/


//assign variable to class element that contains "intro"
var showEffect = document.querySelector(".intro");

//Usage of parallex effect
window.addEventListener("scroll", function () {
  if (!showEffect) return;
  if (window.innerWidth <= 975) return;//for mobile view
  let offset = window.pageYOffset;//for vertical scrolling
  showEffect.style.setProperty(
    "background-position-y",//property name
    offset * -0.75 + "px",//property value
  );
});



