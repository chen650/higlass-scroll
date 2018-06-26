// absolute position calculation 

globalVars.calcPos = function (chromInput) {
	if(chromInput !== null) {
		var absolutePosArr = []; // holds absolute positions calculated from relative positions
		var assembly = /^(.*?)\schr/.exec(chromInput)[1] 
		var chrNumArr = chromInput.match(/(?<=chr).+?(?=:)/g) // array containing all chromosome numbers
		var posArr = chromInput.match(/(?<=:).+?(?=-|\s|$)/g) // array containing all positions on chromosomes
		d3.tsv("../reference/" + assembly + ".tsv", function(error, chromInfo) { 
			if (error) {
				throw error;
				return null
			}
			var numChroms = chromInfo.length
			for (var i=0; i<chrNumArr.length; i++) {
				var chrNum = chrNumArr[i] 
				var pos = parseFloat(posArr[i].replace(/,/g,'')) // parse numbers and remove commas
				var chrInd = 0
				var sum = pos
				for(var j=0; j<numChroms; j++) {
					if(chromInfo[j].chr === "chr"+chrNum) {
						chrInd = j
					}
				}

				for(var j=0; j<=chrInd; j++) {
					sum += parseInt(chromInfo[j].pos)
				}

				absolutePosArr[i] = sum

			}
		})
		return absolutePosArr
		
	}
	return null
}