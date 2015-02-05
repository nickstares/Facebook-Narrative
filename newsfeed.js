$(document).ready(function() {
	
	var checkLogin = function () {
			for (var i = 0; i < Object.keys(userList).length; i++) {
				var currentUser = Object.keys(userList)[i];
				var currentEmail = userList[currentUser].email;
				var encodedEmail = encodeURIComponent(currentEmail);
				var logInTrue = checkEmailAgainstQuery(encodedEmail);
				if (logInTrue){
					return currentUser;

				}
			}
	};

	var checkEmailAgainstQuery = function(email) {
		if (window.location.search === "?email=" + email) {
		return true;
		}
	};

	var loadPageForUser = function(user) {
		var usersFriends = userList[user].friends;
		// for (var i = 0; i < usersFriends.length; i++) {
		// 	usersFriends[i].
		// };
		var relevantStati = context.filter(function(status){
		  if (usersFriends.indexOf(status.username) === -1) {

		  	return false;
		  }
		  	else {
		  		return true;
		  	}
	  
		});
		// console.log(user);
		sortByDate(context);
		sortCommentsByDate();
		appending(relevantStati);
	};

	var sortCommentsByDate = function() {
		for (var i = 0; i < context.length; i++) {
			var commentsArray =context[i].comments;
			sortByDate(commentsArray);
		}
	};

// HANDLEBARS ===================================================
	var appending = function (array) {
	for (var i = 0; i < array.length; i++) {
			var html = $(template(array[i]));
			// f(context[i].likes);
			$(".newsfeed").append(html);
			
			

				for (var a = 0; a < array[i].comments.length; a++) {
					var html1 = template1(array[i].comments[a]);

					html.find(".likes").append(html1);
				}
		}
	};
// ================================================================
	var sortByDate = function(array) {array.sort(function (a, b) {
		  if (Date.parse(a.date) > Date.parse(b.date)) {
		    return 1;
		  }
		  if (Date.parse(a.date) < Date.parse(b.date)) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});
	};

		 var context = [

   {username: "Fred Johnson", 
   comments: [], 
   text:"Wow, this project is so good looking!",
   likes:["John Smith", "Sally Jefferson"], 
  date:"Aug 9, 2000"},


   {username: "Sally Jefferson", 
   comments: [{username:"John Smith", text:"SOLD OUT SEATS"},{username:"Fred Johnson", text:"TO HEAR BIGGIE SMALLS SPEAK"}], 
   text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   likes:["John Smith", "Sally Jefferson"], 
  date:"Jan 31, 1994"},

  {username: "John Smith", 
   comments: [{username:"Sally Jefferson", text:"IT GOES IT GOES IT GOES IT GOES IT GUILLOTINE"}], 
   text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
   likes:[ "Sally Jefferson"], 
  date:"Aug 9, 1996"}
];

		var userList = {
		"Fred Johnson": {email:"example@gmail.com", pfLink: "./fred.html",
		 friends:["Sally Jefferson"], 
		 pfp: "./fred.jpg"},
		"Sally Jefferson": { email:"example1@gmail.com" ,pfLink: "./sally.html", 
		friends:[ "John Smith", "Fred Johnson", "Sally Jefferson"],
		pfp: "./fred-johnson.jpg"},
		"John Smith": { email:"example2@gmail.com", pfLink: "./john.html", 
		friends:["Sally Jefferson", "John Smith"], 
		pfp: "./stefan.png"}
	};


		function getLinkForUser (name) {			
			return userList[name];

		}
// ADDS NAMES AND IMAGES
		function linkifyNames () {
			var nameLinks = document.getElementsByClassName("name-link");
			for (var i = 0; i < nameLinks.length; i++) {
				var link = nameLinks[i];
			  	var username = link.innerHTML;
			  	var profileLink = getLinkForUser(username);
			  	
			  	link.setAttribute("href", profileLink.pfLink);
			  	// closest is not working but should? siblings works
			  	// for status but not for comment.
			  	if ($(link).siblings("img").length === 1 ) {
			  	$(link).siblings("img").attr("src", profileLink.pfp);
			  	
			  }
			  if ($(link).siblings("img").length === 0) {
			  	$(link).parent().siblings("img").attr("src", profileLink.pfp);
			  }
			}
			
		}

		var addProfilePicture = function(a) {
			var pfpImages = document.getElementsByClassName("pfp-img");
			for (var i = 0; i < pfpImages.length; i++) {
				
			}

		};

		var source = $("#status-template").html();
		var template = Handlebars.compile(source);
		var source1 = $("#comment-template").html();
	 	var template1 = Handlebars.compile(source1);



	 	// CALLING FUNCTIONS !!!!
	 	checkLogin();
		loadPageForUser(checkLogin());
		linkifyNames();
			


}); //end docready function


	// ---------------HANDLEBARS HELPERS // -----------------------------
	Handlebars.registerHelper("checkLikes", function(likes, options) {
		
	  if (likes.length === 1) {
	  	return options.fn(this);
	  }
	  else {
	  	return options.inverse(this);
	  }
	});
	  
	  Handlebars.registerHelper("checkComments", function(comments, options) {
		
	  if (comments.length > 0) {
	  	return options.fn(this);
	  }
	  else {
	  	return options.inverse(this);
	  }

});

