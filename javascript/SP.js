/*
SP javascript Page of Kayven's website
ST0501: Front-End Web Development
CA2:Interactive Website
File Name: SP.js
Author: Kayven Chieng Yan Heng
Date:  18/07/2022
Class: DCITP/FT/1A/02
Student ID:P2222639
*/

const fading = async (time) => new Promise((animation) => setTimeout(animation, time));

//delay in shifting content into center
setTimeout(async () => {
  let timeDelay = document.querySelectorAll(".shiftleft");
  for (let k = 0; k < timeDelay.length; k++) {
    timeDelay[k].style.transform = "translate(0)";
    timeDelay[k].style.opacity = ".9";
      await fading(50);
  }
}, 320);



// for popovers in tables to give users better description of content
const popme = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popme].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


