/*
This file is the orchestral conductor for the animation, coordinating what plays when.
For each <section> (with class="step") in the index.html file, this file contains:
   (1) an "activate" function, which is called when the scrolled position switches sections, and
   (2) an "update" function, which is called when the scrolled position changes within a section
Note that the "update" functions are functions of "progress", which is the relative position
within the section
*/


globalVars.activateFunctions = [] 
globalVars.updateFunctions = []

// initialize for number of sections
for (i=0; i<=globalVars.numSections; i++) { // inclusive to number of sections b/c title counts as one
	globalVars.activateFunctions.push( function() {

	});

	globalVars.updateFunctions.push( function(progress) {

	});
}

/* Title Section */

globalVars.activateFunctions[0] = function(){

  $('#development-demo').css("visibility",'hidden')

}

globalVars.updateFunctions[0] = function(progress) {}


/* Section 1 text... */

globalVars.activateFunctions[1] = function(){

  $('#development-demo').css("visibility",'visible');
  
}

globalVars.updateFunctions[1] = function(progress) {

  

}


/* Section 2 text... */

globalVars.activateFunctions[2] = function(){
	if(typeof globalVars.hgv !== 'undefined' && typeof globalVars.viewNum == 'number') {
	  globalVars.hgv.zoomTo(globalVars.views[globalVars.viewNum].uid, 1,1860755000.2693691,1,1225251000.2446117, 100); //// replace hard-coding with user input
	}

}

globalVars.updateFunctions[2] = function(progress) {

  

}


/* Section 3 text... */

globalVars.activateFunctions[3] = function(){


}

globalVars.updateFunctions[3] = function(progress) {}


scrollerDisplay(d3.select('#graphic'), 'step', globalVars.activateFunctions, globalVars.updateFunctions)