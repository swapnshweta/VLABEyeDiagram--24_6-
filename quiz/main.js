function download(file, text) { 

        //creating an invisible element 
        var element = document.createElement('a'); 
        element.setAttribute('href', 'data:text/plain;charset=utf-8, ' 
                             + encodeURIComponent(text)); 
        element.setAttribute('download', file); 

        //the above code is equivalent to 
        // <a href="path of file" download="file name"> 

        document.getElementById("quiz body").appendChild(element); 

        //onClick property 
        element.click(); 

        document.getElementById('quiz body').removeChild(element); 
    } 

document.getElementById("start-quiz").disabled = true;
function valueChangeA() {
  var selObj = document.getElementById("menu_A");
  var selValue = selObj.options[selObj.selectedIndex].text;
  document.getElementById("A").value = selValue;
}

function valueChangeB() {
  var selObj = document.getElementById("menu_B");
  var selValue = selObj.options[selObj.selectedIndex].text;
  document.getElementById("B").value = selValue;
}

function valueChangeC() {
  var selObj = document.getElementById("menu_C");
  var selValue = selObj.options[selObj.selectedIndex].text;
  document.getElementById("C").value = selValue;
}

function valueChangeD() {
  var selObj = document.getElementById("menu_D");
  var selValue = selObj.options[selObj.selectedIndex].text;
  document.getElementById("D").value = selValue;
}

function checkAnswer() {
  var a = document.getElementById("A").value;
  var b = document.getElementById("B").value;
  var c = document.getElementById("C").value;
  var d = document.getElementById("D").value;

  if (
    a == "Distortion" &&
    b == "Extension Beyond Tb" &&
    c == "Eye Width" &&
    d == "Noise Margin"
  ) {
    alert("Correct!!!");
    document.getElementById("start-quiz").disabled = false;
  } else {
    alert("Please try again!!!");
    document.getElementById("start-quiz").disabled = true;
  }
}

function loadquiz(){
	document.getElementById('quiz body').style.display="block";
	document.getElementById('initial').style.display='none';

	var quizContainer = document.getElementById('quiz');
	var resultsContainer = document.getElementById('results');
	var submitButton = document.getElementById('submit');
	var myQuestions = [
		{
			question: "1. The Eye diagram is created by __________ the successive waveforms.",
			answers: {
				a: 'Replacing',
				b: 'Deleting',
				c: 'Overlapping',
				d: 'Convolving'
			},
			correctAnswer: 'c'

		},
		{
			question: "2. An eye diagram is an indicator of quality of signals in _________ transmission.",
			answers: {
				a: 'Analog',
				b: 'Digital',
				c: 'Both',
				d: 'None'
			},
			correctAnswer: 'c'

		},
		{
			question: "3.The shape of eye diagram depends on:",
			answers: {
				a: 'Amplitude',
				b: 'Difference in phase',
				c: 'Noise',
				d: 'All of the above'
			},
			correctAnswer: 'd'
			
		},
		{
			question: "4. Which of the following is not a part of the Eye diagram?",
			answers: {
				a: 'Noise Margin',
				b: 'Absolute Temperature',
				c: 'Jitter',
				d: 'Extension beyond Tb'
			},
			correctAnswer: 'b'
			
		},
		{
			question: "5.  The best point for sampling is known as the point with:",
			answers: {
				a: 'Minimum eye opening',
				b: 'No opening',
				c: 'Maximum eye opening',
				d: 'None of the above'
			},
			correctAnswer: 'c'
			
		},
		{
			question: "6. Proportionality of distortion with noise in an eye diagram is as follows:",
			answers: {
				a: 'Exponential relation',
				b: 'Directly',
				c: 'No relation',
				d: 'Inversely'
			},
			correctAnswer: 'b'
			
		},
		{
			question: "7. The height of the eye opening at a specified sampling time defines:",
			answers: {
				a: 'The margin over noise',
				b: 'Power of signal',
				c: 'Amplitude of input',
				d: 'Bandwidth of signal'
			},
			correctAnswer: 'a'
			
		},
	/*	{
			question: "8. ________ wave is applied at transmission rate to the horizontal deflection plates:",
			answers: {
				a: 'Triangular',
				b: 'Sawtooth',
				c: 'Square',
				d: 'Step'
			},
			correctAnswer: 'b'
			
		},*/
		{
			question: "8. In an eye-diagram, digital signals with no interference resembles the shape of _____",
			answers: {
				a: 'circle',
				b: 'rectangular pulse',
				c: 'triangle',
				d: 'sine wave'
			},
			correctAnswer: 'b'
			
		},
		{
			question: "9. The time interval over which the received signal may be sampled without error may be explained by:",
			answers: {
				a: 'Width of eye opening of eye pattern',
				b: 'Rate of closure of eye of eye pattern',
				c: 'Height of the eye opening of eye pattern',
				d: 'All of the above'
			},
			correctAnswer: 'a'
			
		},
	];

  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

		function showQuestions(questions, quizContainer){
			
			var output = [];
			var answers;

			// for each question...
			for(var i=0; i<questions.length; i++){
				
				// first reset the list of answers
				answers = [];

				// for each available answer to this question...
				for(letter in questions[i].answers){

					// ...add an html radio button
					answers.push(
						'<label>' + '&nbsp;' + '&nbsp;'
							+ '<input type="radio" name="question'+i+'" value="'+letter+'">' + '&nbsp;'
							+ letter + '&nbsp;&nbsp;: '
							+ questions[i].answers[letter]
						+ '</label><br>'
					);
				}

				// add this question and its answers to the output
				output.push(
					'<div class="question">' + questions[i].question + '</div>'
					+ '<div class="answers">' + answers.join('') + '</div>'
				);
			}

			// finally combine our output list into one string of html and put it on the page
			quizContainer.innerHTML = output.join('');
				// code will go here
		}
		

		function showResults(questions, quizContainer, resultsContainer){
			var answerContainers = quizContainer.querySelectorAll('.answers');
		
			// keep track of user's answers
			var userAnswer = '';
			var selectedAns={};
			var numCorrect = 0;
			
			// for each question...
			for(var i=0; i<questions.length; i++){

				// find selected answer
				userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
				selectedAns[i+1]=userAnswer;
				console.log(userAnswer)
				
				
				// if answer is correct
				if(userAnswer===questions[i].correctAnswer){
					// add to the number of correct answers
					numCorrect++;
					
					// color the answers green
					answerContainers[i].style.color = 'lightgreen';
				}
				// if answer is wrong or blank
				else{
					// color the answers red
					answerContainers[i].style.color = 'red';
				}
			}

			// show number of correct answers out of total
			alert('Hey, You got '+ numCorrect + ' out of ' + questions.length)
			resultsContainer.innerHTML = 'You got '+ numCorrect + ' out of ' + questions.length;
				// code will go here
					// Start file download. 
		    document.getElementById("selectedAns").addEventListener("click", function() { 
		        // Generate download of hello.txt file with some content 
		        
		        var filename = "Results.doc"; 

		        download(filename, JSON.stringify(selectedAns).split(",").join("\n")); 
    }, false); 
		}

		// show the questions
		showQuestions(questions, quizContainer);

		// when user clicks submit, show results
		submitButton.onclick = function(){
			showResults(questions, quizContainer, resultsContainer);

			var viewAnswer=document.getElementById("secondbutton")
			viewAnswer.style.display='inline-block'
			viewAnswer.onclick=function (){
				window.open('answers.html',"_blank")
			}

			var saveAns=document.getElementById("selectedAns")
			saveAns.style.display='inline-block'
      var simulation = document.getElementById("simulateButton")
      simulation.style.display='inline-block'
			
			
			

		}
	}
	generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
}
function checkPostTest(){
    var option1q1 = document.getElementById("option1q1").value;
    var option2q1 = document.getElementById("option2q1").value;
    var option1q2a = document.getElementById("option1q2a").value;
    var option2q2a = document.getElementById("option2q2a").value;
    var option3q2a = document.getElementById("option3q2a").value;
    var option4q2a = document.getElementById("option4q2a").value;
    var option1q2b = document.getElementById("option1q2b").value;
    var option2q2b = document.getElementById("option2q2b").value;
    var option3q2b = document.getElementById("option3q2b").value;
    var option4q2b = document.getElementById("option4q2b").value; 
    if (document.getElementById("option1q1").checked == true && document.getElementById("option2q2a").checked == true && document.getElementById("option3q2b").checked == true) {
      alert("Both Questions are Correct!");
    } else if (document.getElementById("option1q1").checked == true) {
      alert("Answer of First Question is Correct! Please try again.");
    } else if (document.getElementById("option2q2a").checked == true && document.getElementById("option3q2b").checked == true) {
      alert("Answer of Second Question is Correct! Please try again.");
    } else {
      alert("Both Questions are Incorrect! Please try again.");
    }

}