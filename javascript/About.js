/*
About javascript Page of Kayven's website
ST0501: Front-End Web Development
CA2:Interactive Website
File Name: About.js
Author: Kayven Chieng Yan Heng
Date:  11/07/2022
Class: DCITP/FT/1A/02
Student ID:P2222639
*/


/*reference to class timeline inside unordered list */
var yearIntervals = document.querySelectorAll(".timeline li");
//function to ensure list items are in screen view and no overlap 
function isItemInView(yearIntervals){
  var rect = yearIntervals.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.Height || document.documentElement.clientHeight) &&
      rect.right <= (window.Width || document.documentElement.clientWidth)
    );
}
//function to display different items once function on top works(means that if item is in view,then display of content will be shown)
function actionInvoker() {
    for (var i = 0; i < yearIntervals.length; i++) {
      if (isItemInView(yearIntervals[i])) {
        yearIntervals[i].classList.add("show");
      }
    }
  }

  // listen for events when actions such as load, resize and scroll are performed
  window.addEventListener("load", actionInvoker);
  window.addEventListener("resize", actionInvoker);
  window.addEventListener("scroll", actionInvoker);







