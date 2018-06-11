var work = {
	"jobs":[
		{
		"employer": "WNS Global Services"
		"title": "Data Scientist"
		"location": "Gurgaon"
		}, 
		
		{
		"employer": "Capgemini"
		"title": "Software Engineer"
		"location": "Mumbai"
		}
	], 

	//Display work json object in resume object
	display: function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formettedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formettedEmployerTitle);

		}

	},

	//Find all location that I have worked
	locationizer: function(_work) {
		var allLocation = [];
		for (var work in _work.jobs) {
			var _workLoc = _work.jobs[work].location;
			allLocation.push(_workLoc);
		}
		return allLocation;

	}
}

work.display();
$("#mapDiv").append(googleMap);

