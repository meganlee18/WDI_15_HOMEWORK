console.log ('test')


/*

The Alamein line has the following stops: 
Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.

The Glen Waverly line has the following stops: 
Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.

The Sandringham line has the following stops: 
Southern Cross, Richmond, South Yarra, Prahran, and Windsor.

*/

//Prompt appears - prompt function
//User enters origin 
//User enters destination
//find the route from origin to destination
//  * find source line - assign variable
//	* find destination line - assign variable
//  * set var intersectionStation = Richmond
// 	* Check if source and destination line are the same
// 		** If same, then print line starting from origin to destination
//		** If different, print source line from origin to intersctionStation
//		   then print from intersectionStation to destination
//show the no. of stops between origin and destination
//create loop to allow prompt to pop up
//Bonus: Create

var alamein = ['Flinders', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong','Tooronga']
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra','Prahran', 'Windsor']

var allTrainLines = [alamein, glenWaverly, sandringham] 

var intersectionStation = 'Richmond'

//Scenario One
//If source station is 'Flinders'
//Destination Station is "Glenferrie"
alamein.join (" -> ")

//Scenario Two
//If source station is 'Flagstaff'
//Destination station is 'Tooronga'
glenWaverly.join(" -> ")

//Senario Three
//If source station is 'Sandringham'
//Destination station is 'Windsor'
sandringham.join(" -> ")

















/*
var sourceStation = 'Flagstaff' //prompt ('Enter origin')
var destinationStation = "Glenferrie" //prompt ('Enter destination')

var sourceLine = undefined
var destinationLine = undefined

for(var i = 0; i < allTrainLines.length; i++ ) {
	// Find the train line where the source station is
	if(allTrainLines[i].indexOf(sourceStation) > -1  ) {
		sourceLine = allTrainLines[i]
	}

	// Find the train line where the destination station is
	if (allTrainLines[i].indexOf(destinationStation) > -1 ) {
		destinationLine = allTrainLines[i]
	}

}
//If source station and destination station are on the same line, 
//find source station and destination station
var sourceStationIndex = sourceLine.indexOf(sourceStation)
var destinationStationIndex = destinationLine.indexOf(destinationStation)
var result = ""
if (sourceLine == destinationLine) {
	// Both source and destination stations are on the same train line
	for(var i = sourceStationIndex; i<=destinationStationIndex; i++) {
			result += sourceLine[i] //result = result + sourceLine[i]
			if (i != destinationStationIndex) {
				result += " -> "
			} 
	}
} else {
	// Both source and destination stations are on different train lines
	// Source Station -> Intersection Station -> Destination station
	var sourceIntersectionIndex = sourceLine.indexOf(intersectionStation)
	var destinationIntersectionIndex = destinationLine.indexOf(intersectionStation)
	for(var i =sourceStationIndex; i<=sourceIntersectionIndex; i++) {
		result += sourceLine[i] + " -> "
	}

	//+1 is necessary so that intersection doesn't print twice during the journey
	for(var i=destinationIntersectionIndex+1; i<=destinationStationIndex; i++) {
		result += destinationLine[i] 
		if (i != destinationStationIndex) {
			result += " -> "
		}
	}
}

console.log(result)
for (var count = 0; count <result.length; count++ ) {
	console.log(count)
}

*/
