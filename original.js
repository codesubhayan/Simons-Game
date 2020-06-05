var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red","blue","green","yellow"];
var level=1;
var started=false;

function nextSequence(){
	userClickedPattern=[];
	$("h1").text("level "+level);
	var randomNumber=Math.floor(Math.random()*4);	
	var randomChosenColor=buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);	

	$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

	playSound(randomChosenColor);
	console.log(gamePattern);
	level++;
	
}

$(".btn").click(function(){

	var userChosenColor=$(this).attr("id");
	userClickedPattern.push(userChosenColor);
	playSound(userChosenColor);
	animatePress(userChosenColor);
	console.log(userClickedPattern);
	check(userClickedPattern.length-1);

});

function playSound(name)
{
	var audio = new Audio("sounds/" + name + ".mp3");
  	audio.play();
}

function animatePress(currentColour)
{
	$("#"+currentColour).addClass("pressed");
	setTimeout(function(){$("#"+currentColour).removeClass("pressed");},100);
}

$(document).keydown(function(event){
	if (!started)
	{
		// $("#level-title").text("Level " + level);
		nextSequence();
		started=true;
	}
});

function check(currentLevel)
{
	
			if (userClickedPattern[currentLevel]===gamePattern[currentLevel])
			{
				console.log("Succes");
				if (userClickedPattern.length === gamePattern.length){        
				        setTimeout(function () {nextSequence();}, 1000);				
			}
	

}
else {
		$("h1").text("GAME OVER");
		var end=new Audio("sounds/wrong.mp3");
		end.play();
		$("body").addClass("game-over");
		gameRestart();
    }

}

function gameRestart()
{
	setTimeout(function(){$("body").removeClass("game-over");},200);
      console.log("wrong");
    setTimeout(function(){
      	level=1;
      	started=false;
      	gamePattern=[];
      	userClickedPattern=[];
      	$("h1").text("Press A Key to Start");
      },1000); 
}



