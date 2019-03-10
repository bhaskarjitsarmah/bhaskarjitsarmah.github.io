var bio = {
  name: 'Bhaskarjit Sarmah',
  role: 'Data Scientist',
  contacts: {
    mobile: '9022087053',
    email: 'bhaskarjitsarmah@gmail.com',
    github: 'bhaskarjitsarmah',
    twitter: 'iambhaskarjit',
    location: 'Delhi, India'
  },
  welcomeMessage: 'I am a Data Scientist with over 4+ years of experience',
  skills: ['R', 'Python', 'SQL', 'Java', 'Spark', 'C++'],
  biopic: 'images/bhaskarjit.jpeg'
};

var education = {
  schools: [{
    name: 'Tezpur University',
    location: 'Tezpur',
    degree: 'B.Tech',
    majors: ['Mechanical Engineer'],
    dates: '2009-13'
  },
	{
    name: 'NIIT University',
    location: 'Neemrana',
    degree: 'MBA',
    majors: ['Business Analytics'],
    dates: '2016-17'
  },
  ],
  onlineCourses: [{
      title: 'Machine Learning Engineer ND',
      school: 'Udacity',
      dates: 'July 2017',
      url: 'https://in.udacity.com/course/machine-learning-engineer-nanodegree--nd009t'
    },
    {
      title: 'Natural Language Processing ND',
      school: 'Udacity',
      dates: '2018',
      url: 'https://in.udacity.com/course/natural-language-processing-nanodegree--nd892'
    }
  ]
};

var work = {
  jobs: [{
      employer: 'BlackRock',
      title: 'Data Science Associate',
      location: 'Gurgaon',
      dates: 'Jan, 2019',
      description: 'Working on a liquidity risk analytics project to predict liquidity for different securities in different asset classes'
    },
    {
      employer: 'Grail Insights',
      title: 'Data Science Manager',
      location: 'Noida',
      dates: 'Aug, 2018 - Dec, 2018',
      description: 'Worked to build a social media nlp engine to predict sentiments of customers for a travel client'
    },
    {
      employer: 'WNS',
      title: 'Data Science Consultant',
      location: 'Gurgaon',
      dates: 'Aug, 2017 - July, 2018',
      description: 'Worked on to build a computer vision solution to predict rooftop damages from images'
    },
	{
      employer: 'Capgemini',
      title: 'Consultant',
      location: 'Mumbai',
      dates: 'June, 2013 - July, 2016',
      description: "Worked on to build Capgemini's first SaaS product for a media and entertainment client"
    },
  ]
};

var projects = {
  projects: [{
      title: 'Correlation: Finding Relationship Between Variables',
      dates: '2013-16',
      description: 'Is there a relationship between the sepal length and petal length of flower?',
      images: ['images/correlation.png'],
      url: 'https://bhaskarjitsarmah.github.io/Correlation.html'
    },
	{
      title: 'ANOVA Test: Finding Relationship Between Variables',
      dates: '2013-16',
      description: ' Is there any relationship between variables mpg (miles per gallon) of a car and cylinders (number of cylinders) the car have?',
      images: ['images/anova_test.png'],
      url: 'https://bhaskarjitsarmah.github.io/anova_test.html'
    },
    
  ]
};


/*
 * Display functions
 */
bio.display = function() {
  // basic details
  var name = HTMLheaderName.replace('%data%', bio.name);
  var role = HTMLheaderRole.replace('%data%', bio.role);
  var bioPic = HTMLbioPic.replace('%data%', bio.biopic);
  var message = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  // contacts
  var contact = [
    HTMLmobile.replace('%data%', bio.contacts.mobile),
    HTMLemail.replace('%data%', bio.contacts.email),
    HTMLgithub.replace('%data%', bio.contacts.github),
    HTMLtwitter.replace('%data%', bio.contacts.twitter),
    HTMLlocation.replace('%data%', bio.contacts.location)
  ];

  $('#header').prepend(role);
  $('#header').prepend(name);
  $('#header').append(bioPic);
  $('#header').append(message);

  contact.forEach(function(c) {
    $('#topContacts').append(c);
    $('#footerContacts').append(c);
  });

  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(s) {
      $('#skills').append(HTMLskills.replace('%data%', s));
    });
  }
};

education.display = function() {
  // schools
  if (education.schools.length > 0) {
    education.schools.forEach(function(s) {
      $('#education').append(HTMLschoolStart);
      var name = HTMLschoolName.replace('%data%', s.name);
      var degree = HTMLschoolDegree.replace('%data%', s.degree);
      var dates = HTMLschoolDates.replace('%data%', s.dates);
      var location = HTMLschoolLocation.replace('%data%', s.location);
      var major = HTMLschoolMajor.replace('%data%', s.majors[0]);

      $('.education-entry:last').append(name + degree, [dates, location, major]);
    });
  }
  // online courses
  if (education.onlineCourses.length > 0) {
    $('#education').append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(oc) {
      $('#education').append(HTMLschoolStart);
      var title = HTMLonlineTitle.replace('%data%', oc.title).replace('#', oc.url);
      var school = HTMLonlineSchool.replace('%data%', oc.school);
      var dates = HTMLonlineDates.replace('%data%', oc.dates);
      var url = HTMLonlineURL.replace('%data%', oc.url).replace('#', oc.url);

      $('.education-entry:last').append(title + school, [dates, url]);
    });
  }
};

work.display = function() {
  if (work.jobs.length > 0) {
    $('#workExperience').append(HTMLworkStart);
    work.jobs.forEach(function(job) {
      var employer = HTMLworkEmployer.replace('%data%', job.employer);
      var title = HTMLworkTitle.replace('%data%', job.title);
      var location = HTMLworkLocation.replace('%data%', job.location);
      var worked = HTMLworkDates.replace('%data%', job.dates);
      var description = HTMLworkDescription.replace('%data%', job.description);
      title = employer + title;

      $('.work-entry:last').append(title, [location, worked, description]);
    });
  }
};

projects.display = function() {
  if (projects.projects.length > 0) {
    projects.projects.forEach(function(pj) {
      $('#projects').append(HTMLprojectStart);
      var title = HTMLprojectTitle.replace('%data%', pj.title).replace('#', pj.url);
      var dates = HTMLprojectDates.replace('%data%', pj.dates);
      var description = HTMLprojectDescription.replace('%data%', pj.description);

      $('.project-entry:last').append(title, [dates, description]);
      // IMAGES
      if (pj.images) {
        pj.images.forEach(function(img) {
          var image = HTMLprojectImage.replace('%data%', img);
          $('.project-entry:last').append(image);
        });
      }
    });
  }
};

function setupMap() {
  $('#mapDiv').append(map);
}

// display stuff
bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);
window.addEventListener('load', setupMap);
