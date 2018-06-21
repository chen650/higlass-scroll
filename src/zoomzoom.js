window.onload = function here() {

 const baseUrl = 'http://higlass.io/api/v1/viewconfs/';


 fetch(baseUrl + '?d=KeXl4zLsTP6IKZGpFckuNA')
  	.then(function(response) {
  		return response.json();
  	})
  	.then(function(viewConf) {
  		window.hgv = createHg(
		  	document.getElementById('development-demo'),
		    viewConf,
		    { bounded: true }
		  );
      var xDomain = viewConf.views[0].initialXDomain,
      yDomain = viewConf.views[0].initialYDomain;
      
 			activateFunctions[1] = function(){
        $('#development-demo').css("visibility",'visible');
        hgv.zoomTo("aa", xDomain[0],xDomain[1],yDomain[0],yDomain[1], 100);

      }
 			
  		
  	})

}