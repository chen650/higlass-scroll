
Object.defineProperty(Array.prototype, 'stableSort', { // order views in viewConf by location, left to right and top to bottom using location.X and location.Y
  configurable: true,
  writable: true,
  value: function stableSort () {
    const compareFunction = (a,b) => a-b
    var l = this.length;
    var arr = Array(l);
    var i;

    for(i=0; i<l; i++) {
      arr[i] = [i, this[i]];
    }

    arr.sort(function (a, b) { //compare on y -> if equal, compare on x
    		var aY = a[1].layout.y;
        var bY = b[1].layout.y;
        var compareY = Number(this(aY, bY))
        if(compareY == 0 || aY-bY == 0) {
        	var aX = a[1].layout.x;
          var bX = b[1].layout.x;
          var compareX = Number(this(aX, bX))
          return compareX || aX - bX
        } else {
        	return compareY || aY - bY
        }
      }.bind(compareFunction)) // guaranteed to be stable over browsers
    
      // re-map original array to stable sorted values
      for (i = 0; i < l; i++) {
        this[i] = arr[i][1]
      }

      return this //sorts in place
    }
}) //sample link: http://higlass.io/app/?config=QqsAbqjHRwKHcsUiSkWskw
