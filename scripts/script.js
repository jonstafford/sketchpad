var defaultSize = 16;
var minSize = 4;
var maxSize = 48;
var drawingAreaWidth = 960;

var clear = function() {
	$(".row").remove();
}

var reset = function(event) {
	event.preventDefault();
	clear();
		
	var size = +prompt("Please enter squares per side for the new grid", defaultSize);

	var newSize = defaultSize;

	if (size != null && !isNaN(size) && size <= maxSize && size >= minSize) {
		newSize = size;
	}
	
	createGrid(newSize);
}

var highlightSquare = function() {
	$(this).addClass("highlighted");
}

var createGrid = function(size) {
	
	var squareDimension = Math.floor(drawingAreaWidth / size);
	
	//console.log("squareDimension: " + squareDimension);
	
	var middle = $(".middle");

	for (var i = 0; i < size; i++)
	{
		var row = $("<div class='row row"+i+"'></div>");
		for (var j = 0; j < size; j++)
		{
			var square = $("<div class='square x"+j+" y"+i+"'></div>");
			row.append(square);
		}
		
		middle.append(row);
	}
			
	$(".square").on("mouseenter", highlightSquare);
}

$(document).ready(function() {
	$(".clear-button").click(reset);
	
	createGrid(defaultSize);
});
