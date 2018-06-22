window.onload = function here() {

  const baseUrl = 'http://higlass.io/api/v1/viewconfs/?d=';
  var viewConfigId = prompt('Input view config ID'); //// catch //// change link to API base
  globalVars.viewNum = parseInt(prompt('Which view do you want to zoom in on? (Enter a number 1-n counting from left to right and top to bottom.') 
    - 1) ; // adjusted bc array counts from 0
    //// BUG: can't use array position to indicate view position! moving views only results in views.location change

  fetch(baseUrl + viewConfigId) // API call
    .then(function(response) {
  		return response.json();
  	})
    .then(function(viewConf) { 
      globalVars.views = viewConf.views.stableSort() // sorts viewConf so user input viewNum corresponds to the right view
      return viewConf;
    })
  	.then(function(viewConf) { //// catch invalid link
  		globalVars.hgv = globalVars.createHg( // creates the view
		  	document.getElementById('development-demo'),
		    viewConf,
		    { bounded: true }
		  );
      
 			globalVars.activateFunctions[1] = function(){ // scrolling back returns the view to the original zoom
        $('#development-demo').css("visibility",'visible');
        if(typeof globalVars.viewNum == "number") {
          globalVars.hgv.zoomTo(globalVars.views[globalVars.viewNum].uid, 
            globalVars.views[globalVars.viewNum].initialXDomain[0], globalVars.views[globalVars.viewNum].initialXDomain[1], // x range
            globalVars.views[globalVars.viewNum].initialYDomain[0], globalVars.views[globalVars.viewNum].initialYDomain[1], // y range
            100);
        }
      }
 			
  		
  	})


}