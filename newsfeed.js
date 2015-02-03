// var bananas,x;

$(document).ready(function() {

	if (window.location.search === "?email=example%40gmail.com"){
		$("#user-nav a").html("Fred");

	}

	var context = [{username: "Fred Johnson", text:"Hello", likes:["John Smith"] }, {username: "Fred Johnson", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tenetur rem voluptas et delectus nulla totam ipsum non, nam ipsa cumque quos temporibus ullam veritatis alias facere. Inventore, omnis, debitis.", likes:["John Smith", "Alexa Mehos"] }, {username: "ur mom", text:"yeah dudeeee", likes:["brenttttt"] },
{ username: "arebeth", text:"no!", likes:["people", "places", "things"] }
	];	
	var source   = $("#status-template").html();
	var template = Handlebars.compile(source);
	for (var i = 0; i < context.length; i++) {
		var html = template(context[i]);
		// f(context[i].likes);
		$(".newsfeed").append(html);


	}
			


}); //end docready function

Handlebars.registerHelper("checkLikes", function(likes, options) {
	console.log("im working",likes);
  if (likes.length === 1) {
  	return options.fn(this);
  }
  else {
  	return options.inverse(this);
  }
  

});

