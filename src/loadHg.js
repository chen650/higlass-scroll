window.onload = function here() {

  const baseApiUrl = 'http://higlass.io/api/v1/viewconfs/?d=';
  const regExBaseHgUrl = /http:\/\/higlass.io\/app\/\?config=/;

  function convertApiUrl(input) { // convert user's view config link to an API endpoint
    if(typeof input === 'string') {
      return input.replace(regExBaseHgUrl, baseApiUrl); 
    }
    return ''
  }

  function inputToInt(input) {
    if (Number.isInteger(parseInt(input))) {
      return parseInt(input)
    }
    return 0
  }

  var viewConfigUrl = convertApiUrl(prompt('Input view config link'))
  globalVars.viewNum = inputToInt(
    prompt('Which view do you want to zoom in on? (Enter number 1-n counting left to right and top to bottom.')
    ) - 1; // adjusted bc array counts from 0 

  function handleErrors(response) {
    throw(response);
  }

  function showError(response) {
    console.log('Error: Invalid view config ID given.')
    alert('Error: Invalid view config ID given. Please reload and enter a valid view config ID.')
  }

  // helper functions of things to do after fetching back the requested view config
  function getJSON(response) {
    return response.json()
  }

  function setViewConf(response) {
    globalVars.views = response.views.stableSort(); // sorts viewConf so user input viewNum corresponds to the right view
    validateViewNum(response, globalVars.viewNum);
    return response;
  }

  function validateViewNum(response, viewNum) { // if given view num that does not exist in the view config, set viewNum to undefined
    if(response.views.length < viewNum || viewNum < 0) {
      console.log('Error: Invalid view number given.');
      alert('Error: Invalid view number given. View number has now been set to 1.');
      globalVars.viewNum = 0;
    }
  }

  function createHgvAndSetZoom(response) { 
    globalVars.hgv = globalVars.createHg( // creates the view
      document.getElementById('development-demo'),
      response,
      { bounded: true }
    );
    
    globalVars.activateFunctions[1] = function(){ // scrolling back returns the view to the original zoom
      $('#development-demo').css("visibility",'visible');
      if(typeof globalVars.viewNum == "number") {
        globalVars.hgv.zoomTo(
          globalVars.views[globalVars.viewNum].uid, 
          globalVars.views[globalVars.viewNum].initialXDomain[0], globalVars.views[globalVars.viewNum].initialXDomain[1], // x range
          globalVars.views[globalVars.viewNum].initialYDomain[0], globalVars.views[globalVars.viewNum].initialYDomain[1], // y range
          100);
      }
    }
  }

  // actually fetch back the view config
  fetch(viewConfigUrl)
    .then(getJSON, handleErrors)
    .then(setViewConf, handleErrors)
    .then(createHgvAndSetZoom, handleErrors)
    .then(null, showError); // error handling


}