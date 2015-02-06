$(document).ready(function() {

		console.log(userList);
				
		// };
		$("#form1").on("submit", function(e){
			e.preventDefault();
			var counter=0;
			userArray = Object.keys(userList);

			for (var i = 0; i < userArray.length; i++) {
			var currentUser = userArray[i];
				if ($("#email1").val() === userList[currentUser].email && $("#password1").val() === userList[currentUser].password) {
					// $('#form1').submit();
					document.getElementById('form1').submit();

				}
				else{
					counter++;
					if(counter === userArray.length){
					  return alert("wrong password doooood!!!");
					}
				}
						

			} //end for loop
		});
			

// end  docready
}); 
