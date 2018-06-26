globalVars.numSections = prompt('How many sections? ')

for (i=1; i<=globalVars.numSections; i++) { 
	var txt = prompt("What should go in Section " + i + "?");
	sections.innerHTML += "<section class='step'>" + txt + "</section>"
}