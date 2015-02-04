// var bananas,x;

$(document).ready(function() {
	



var checkLogIn = function () {
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

var loadPageForUser = function (user) {
	
};





	var context = [

	 {username: "Fred Johnson", 
	 comments: [], 
	 text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	 likes:["John Smith", "Sally Jefferson"] },

	 {username: "Stefan Burnett", 
	 comments: [{text:"lol, yo boy yo amnesia", username:"Zack Hill", date: "2hrs" },
	 {text:"Hi!!!!!!!!!", username:"John Smith", date:"3hrs" }], 
	 text:"hey, what's up?", 
	 likes:["John Smith"] }
	];	

	var userList = {
	"Fred Johnson": {email:"example@gmail.com", pfLink: "./fred.html",
	 friends:["Sally Jefferson"]},
	"Sally Jefferson": {email:"example1@gmail.com" ,pfLink: "./sally.html", 
	friends:["Fred Johnson", "John Smith"]},
	"John Smith": {email:"example2@gmail.com", pfLink: "./john.html", 
	friends:["Sally Jefferson"] }
};




	var source = $("#status-template").html();
	var template = Handlebars.compile(source);
	var source1 = $("#comment-template").html();
 	var template1 = Handlebars.compile(source1);

// loop that appends statuses and comments to the main column
	for (var i = 0; i < context.length; i++) {
		var html = $(template(context[i]));
		// f(context[i].likes);
		$(".newsfeed").append(html);
		

			for (var a = 0; a < context[i].comments.length; a++) {
				var html1 = template1(context[i].comments[a]);

				html.find(".likes").append(html1);
			}
	}
// COMPLICATED LOOP THAT ADDS LINKS TO PROFILE PAGES FROM STATUSES
	for (var c = 0; c < context.length; c++) {
		var currentStatus = context[c];
		for (var e = 0; e < currentStatus.comments.length; e++) {
			var currentComment = currentStatus.comments[e];
			
			for (var f = 0; f < userList.length; f++) {
				if (currentComment.username === userList[f].name ) {
					var one1 = userList[f].pfLink;
					var check1 = document.getElementsByClassName("name-link");
					
					for (var h = 0; h < check1.length; h++) {
						var pleaseWork1 = check1[h].firstChild.data;
							if (pleaseWork1===currentComment.username) {
								check[h].href = one1;
							}
					}
					

				}
			}
		}


		for (var d = 0; d < userList.length; d++) {
			if (currentStatus.username === userList[d].name) {
				var one = userList[d].pfLink;
				var check = document.getElementsByClassName("name-link");
				
				for (var z = 0; z < check.length; z++) {
					var pleaseWork = check[z].firstChild.data;
						if (pleaseWork===context[c].username) {
							check[z].href = one;
						}
				}
				
			}

		}

	}

	// SAME THING FOR COMMENTS


 	
 	checkLogin();
	loadPageForUser(checkLogin);
		


}); //end docready function

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






