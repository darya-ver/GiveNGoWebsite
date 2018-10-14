function check(){

	var humanRights = document.quiz.humanRights.value;
	var animals = document.quiz.animals.value;
	var arts = document.quiz.arts.value;
	var youth = document.quiz.youth.value;
	var community = document.quiz.community.value;
	var technology = document.quiz.technology.value;
	var crisisSupport = document.quiz.crisisSupport.value;
	var food = document.quiz.food.value;
	var sustainability = document.quiz.sustainability.value;
	var faithBased = document.quiz.faithBased.value;
	var health = document.quiz.health.value;
	var homelessness = document.quiz.homelessness.value;
	var hunger = document.quiz.hunger.value;
	var immigrants = document.quiz.immigrants.value;
	var international = document.quiz.international.value;
	var lgbt = document.quiz.lgbt.value;
	var disabilities = document.quiz.disabilities.value;
	var politics = document.quiz.politics.value;
	var race = document.quiz.race.value;
	var seniors = document.quiz.seniors.value;
	var sports = document.quiz.sports.value;
	var military = document.quiz.military.value;
	var women = document.quiz.women.value;



	var numYes = 0;


	if (humanRights == "Yes") {
		numYes++;
	}
	if (animals == "Yes") {
		numYes++;
	}
	if (arts == "Yes") {
		numYes++;
	}
	if (youth == "Yes") {
		numYes++;
	}
	if (community == "Yes") {
		numYes++;
	}
	if (technology == "Yes") {
		numYes++;
	}
	if (crisisSupport == "Yes") {
		numYes++;
	}
	if (food == "Yes") {
		numYes++;
	}
	if (sustainability == "Yes") {
		numYes++;
	}
	if (faithBased == "Yes") {
		numYes++;
	}
	if (health == "Yes") {
		numYes++;
	}
	if (homelessness == "Yes") {
		numYes++;
	}
	if (hunger == "Yes") {
		numYes++;
	}
	if (immigrants == "Yes") {
		numYes++;
	}
	if (international == "Yes") {
		numYes++;
	}
	if (lgbt == "Yes") {
		numYes++;
	}
	if (disabilities == "Yes") {
		numYes++;
	}
	if (politics == "Yes") {
		numYes++;
	}
	if (race == "Yes") {
		numYes++;
	}
	if (seniors == "Yes") {
		numYes++;
	}
	if (sports == "Yes") {
		numYes++;
	}
	if (military == "Yes") {
		numYes++;
	}
	if (women == "Yes") {
		numYes++;
	}

// 	if (question2 == "Hartford") {
// 		correct++;
// }
// 	if (question3 == "Albany") {
// 		correct++;
// 	}

	// var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	// var messages = ["Great job!", "That's just okay", "You really need to do better"];
	// var score;

	// if (correct == 0) {
	// 	score = 2;
	// }
	//
	// if (correct > 0 && correct < 3) {
	// 	score = 1;
	// }
	//
	// if (correct == 3) {
	// 	score = 0;
	// }

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = "Wow!";
	document.getElementById("number_correct").innerHTML = "you answered this many with \"yes\": " + numYes;
	// document.getElementById("picture").src = pictures[score];
	}
