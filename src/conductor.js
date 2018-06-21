/*
This file is the orchestral conductor for the animation, coordinating what plays when.
For each <section> (with class="step") in the index.html file, this file contains:
   (1) an "activate" function, which is called when the scrolled position switches sections, and
   (2) an "update" function, which is called when the scrolled position changes within a section
Note that the "update" functions are functions of "progress", which is the relative position
within the section
*/


window.activateFunctions = [] ////
var updateFunctions = []


/* Title Section */

activateFunctions.push( function(){

  $('#development-demo').css("visibility",'hidden')

})

updateFunctions.push(function(progress) {})


/* Section 1 text... */

activateFunctions.push( function(){

  $('#development-demo').css("visibility",'visible');
  
})

updateFunctions.push(function(progress) {

  

})


/* Section 2 text... */

activateFunctions.push( function(){

  hgv.zoomTo("aa", 1,1860755000.2693691,1,1225251000.2446117, 100);

})

updateFunctions.push(function(progress) {

  

})


/* Section 3 text... */

activateFunctions.push( function(){

  

})

updateFunctions.push(function(progress) {})



// Make it happen!
scrollerDisplay(d3.select('#graphic'), 'step', activateFunctions, updateFunctions)