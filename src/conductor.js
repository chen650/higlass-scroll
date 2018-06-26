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

function switchConfigs(apiUrl) { // switch view configs 
	$('#development-demo').empty();
	fetch(apiUrl) 
		.then(function(response) {
			return response.json();
		})
		.then(function(viewConf) {
			globalVars.hgv = globalVars.createHg(
				document.getElementById('development-demo'),
				viewConf,
				{bounded:true}
			)
		})
}

var chromInput = prompt(
'Enter view boundaries in the format <reference file> chr<N>:N-chr<N>:N & chr<N>:N-chr<N>:N, \n e.g. hg19 chr9:25,263,479-chrM:16,571 & chr6:23,275,837-chr12:70,376,284'
) //// what does offset refer to?
var absolutePosArr = globalVars.calcPos(chromInput)

/* Title Section */

globalVars.activateFunctions[0] = function(){

  $('#development-demo').css("visibility",'hidden')

}

globalVars.updateFunctions[0] = function(progress) {

}


/* Section 1 text... */

globalVars.activateFunctions[1] = function(){

  $('#development-demo').css("visibility",'visible');
  
}

globalVars.updateFunctions[1] = function(progress) {

}


/* Section 2 text... */

globalVars.activateFunctions[2] = function(){
	if(typeof globalVars.hgv !== 'undefined' && typeof globalVars.viewNum == 'number' && absolutePosArr !== null) {
	  globalVars.hgv.zoomTo(globalVars.views[globalVars.viewNum].uid, absolutePosArr[0],absolutePosArr[1],absolutePosArr[2],absolutePosArr[3], 300); 
	}

}

globalVars.updateFunctions[2] = function(progress) {

}


/* Section 3 text... */

globalVars.activateFunctions[3] = function(){ //// just a sample of transitioning b/w view configs (not dynamic and no error handling)
	switchConfigs('http://higlass.io/api/v1/viewconfs/?d=V-7rynpeTeS4kZPK91jMag')

}

globalVars.updateFunctions[3] = function(progress) {

}


scrollerDisplay(d3.select('#graphic'), 'step', globalVars.activateFunctions, globalVars.updateFunctions)