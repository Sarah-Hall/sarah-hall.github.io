'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	console.log("Javascript is connected!");
}

$(".img-thumbnail").click(projectClick);
//select all the things with this class, and when you click, do this function

function projectClick(e){
	e.preventDefault(); //prevents page from refreshing
	$(this).css("background-color", "#808080")
	console.log("It worked!");
	$(this).parent().next().toggle();
}
