'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	$.get("https://cogs120lab66.herokuapp.com/project/" + idNumber, readJsonData);
}

function readJsonData(result){
	console.log(result);
      var projectHTML='<div id="id">' + '<p>'+result['title']+'</p>'+
	                  '<p><small>'+result['date']+'</small></p>'+
	                  '<img src="'+result['image']+'" class="detailsImage">'+
	                  '<p>'+result['summary']+'</p></div>';
	  var idNum = result['id'];
	  //how to select project[id]

	var containingProject = "#project" + idNum + " div.details";
	var description = $(containingProject).find("div");
	if (description.length == 0) {
       $(containingProject).html(projectHTML);
   		}
    else{
       $(containingProject).fadeToggle();
 //        description.remove();
	}

	//$(containingProject).html(projectHTML);
	//$("#project" + idNum + " div.details").fadeToggle();
	//add more details

}