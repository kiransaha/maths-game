var play = false;
var score;
var timeremaining;
var action;
var correctanswer;
var correctposition;

document.getElementById("startgame").onclick = function(){
if(play == true)
    {
     location.reload();//to reload the page   
    }
else
    {
        play = true;
		document.getElementById("startgame").innerHTML="Reset Game";
		
		score =0;
		
		document.getElementById("scorevalue").innerHTML=score;
		
		document.getElementById("time").style.display="block";
		
		timeremaining = 60;
				
		
		timecount();
		
		question();
		
		//choice

    }
}

//choice
for(i=1;i<5;i++)
{
		document.getElementById("choice"+i).onclick=function(){
			if(play==true)
			{
			if(this.innerHTML==correctanswer)
			{
			
			score++;
			document.getElementById("scorevalue").innerHTML= score;
			
			show("correct");
			hide("wrong");
			setTimeout(function(){
				hide("correct");	
			},1000);
			
			//generate question
			
			question();
			}
			else
			{show("wrong");
			hide("correct");
		 
		 	setTimeout(function(){hide("wrong")},1000);
			 
			 question();
		 
			}
				
		}
	}

}
		function timecount(){
			action = setInterval(function(){
				timeremaining -= 1;
				document.getElementById("timevalue").innerHTML = timeremaining +" sec";
				if(timeremaining == 0){
					stopcount();
					document.getElementById("gameover").style.display="block";
					document.getElementById("gameover").innerHTML = "<p>GAME OVER!</p>" + "<p>YOUR SCORE IS:-" + score + "</p>";
					hide("time");
					hide("correct");
					hide("wrong");
					play= false;
					document.getElementById("startgame").innerHTML = "start game";
					
					
					
				}
				
			},1000);
		}

function stopcount(){
	
	clearInterval(action);
	
	}

function hide(id){
	
	document.getElementById(id).style.display = "none";
}

function show(id){
	
	document.getElementById(id).style.display = "block";
}

function question(){
	
	var x = 1+ Math.round(9*Math.random());
	var y = 1+ Math.round(9*Math.random());
	correctanswer = x*y;
	document.getElementById("display").innerHTML = x + "x" + y;
	correctposition = 1+ Math.round(3*Math.random());
	document.getElementById("choice"+ correctposition).innerHTML= correctanswer;
	var answer=[correctanswer];
	
	for(i=1;i<5;i++)
	{
	
	if(i!= correctposition)
		{
			var wronganswer;
			do{
				wronganswer= (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));//if we take wrongpos in this then it will take no between 1-4 and hence same no can be repeated so we may get less no of options
	
		}while(answer.indexOf(wronganswer)>-1)
	
		
	answer.push(wronganswer);
				document.getElementById("choice"+ i).innerHTML= wronganswer;
	
	}
}
}
