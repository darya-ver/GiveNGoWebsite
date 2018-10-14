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
	var mental_health = document.quiz.mental_health.value;
	var sports = document.quiz.sports.value;
	var military = document.quiz.military.value;
	var women = document.quiz.women.value;
        var obesity = document.quiz.obesity.value;
        var affordable_healthcare = document.quiz.affordable_healthcare.value;
        var oil_spills = document.quiz.oil_spills.value;

	var numYes = 0;
        var hum_rights = 0;
        var environment = 0;
        var health_medicine = 0;

	if (humanRights == "Yes") {
		hum_rights++;
	}
	if (animals == "Yes") {
		environment++;
	}
	if (recycle == "Yes") {
		environment++;
	}
	if (youth == "Yes") {
		hum_rights++;
	}
	if (community == "Yes") {
		environment++;
	}
	if (technology == "Yes") {
		health_medicine++
        }
        if (affordable_healthcare == "Yes") {
                health_medicine++
        } 
	if (crisisSupport == "Yes") {
		environment++;
	}
	if (food == "Yes") {
		hum_rights++;
	}
	if (sustainability == "Yes") {
		environment++;
	}
	if (faithBased == "Yes") {
		hum_rights++;
	}
	if (health == "Yes") {
		health_medicine++;
	}
	if (homelessness == "Yes") {
		hum_rights++;
	}
	if (hunger == "Yes") {
		hum_rights++;
	}
	if (immigrants == "Yes") {
		hum_rights++;
	}
	if (mental_health == "Yes") {
		hum_rights++;
	}
	if (sports == "Yes") {
		health_medicine++;
	}
        if (obesity == "Yes) {
                health_medicine++;
        }
	if (women == "Yes") {
		hum_rights++;
	}
        if(oil_spills == "Yes") {
                environment++;
        }

 	if (hum_rights >= health_medicine && hum >= environment) {
                document.getElementById("message").innerHTML = "Check out our Human Rights Volunteering Opportunities";        
        }
 	if (health_medicine >= hum_rights && health_medicine >= environment) {
                document.getElementById("message").innerHTML = "Check out our Health & Medicene Volunteering Opportunities";
 	}
        if (environment >= health_medicine && environment >= hum_rights) {
                document.getElementById("message").innerHTML = "Check out our Environment Volunteering Opportunities";
        }
        else {
                document.getElementById("message").innerHTML = "Check out our Human Rights Volunteering Opportunities";
        }
         


	}
