 //Functions for carousal actions

 function myFunction1() {
      var btn1 = document.getElementById("btn1");
      var btn2 = document.getElementById("btn2");
      var btn3 = document.getElementById("btn3");
      var btn4 = document.getElementById("btn4");
      var footer1 = document.getElementById("footer1");
      btn2.style.backgroundSize="2.1em 3.5em";
      btn2.style.backgroundRepeat="no-repeat";
      btn2.style.backgroundPosition="center";
      btn2.innerText="Amplitude Range";
      btn3.style.backgroundSize="2em 1.4em";
      btn3.style.backgroundRepeat="no-repeat";
      btn3.style.backgroundPosition="center";
      btn3.innerText="Frequency Range";
      btn4.style.backgroundSize="2em 1.4em";
      btn4.style.backgroundRepeat="no-repeat";
      btn4.style.backgroundPosition="center";
      btn4.innerText="All parameters";
      btn1.style.backgroundColor="#2d9cc2";
      btn2.style.backgroundColor="white";
      btn3.style.backgroundColor="white";
      btn4.style.backgroundColor="white";
      btn1.style.backgroundImage="none";
      btn1.style.color="white";
      btn2.style.color="black";
      btn3.style.color="black";
      btn4.style.color="black";
      btn1.style.width="12em";
      btn2.style.width="10em";
      btn3.style.width="10em";
      btn4.style.width="10em";
      btn1.innerHTML = "Delay Addition";
      if (window.matchMedia("(max-width: 432px)").matches) { // If media query matches
      footer1.className="footer";
      } 
      else{
            footer1.className="footer";
      }        
}

function myFunction2() {
      var btn1 = document.getElementById("btn1");
      var btn2 = document.getElementById("btn2");
      var btn3 = document.getElementById("btn3");
      var btn4 = document.getElementById("btn4");
      var footer1 = document.getElementById("footer1");
      btn1.style.backgroundSize="1em 1.4em";
      btn1.style.backgroundRepeat="no-repeat";
      btn1.style.backgroundPosition="center";
      btn1.innerText="Delay Addition";
      btn3.style.backgroundSize="1em 1.4em";
      btn3.style.backgroundRepeat="no-repeat";
      btn3.style.backgroundPosition="center";
      btn3.innerText="Frequency Range";
      btn4.style.backgroundSize="1em 1.4em";
      btn4.style.backgroundRepeat="no-repeat";
      btn4.style.backgroundPosition="center";
      btn4.innerText="All parameters";
      btn2.style.color="white";
      btn1.style.color="black";
      btn3.style.color="black";
      btn4.style.color="black";
      btn2.style.backgroundColor="#2d9cc2";
      btn2.style.width="12em";
      btn1.style.width="10em";
      btn3.style.width="10em";
      btn4.style.width="10em";
      btn1.style.backgroundColor="white";
      btn3.style.backgroundColor="white";
      btn4.style.backgroundColor="white";
      btn2.style.backgroundImage="none";
      btn2.innerHTML = "Amplitude Range";
      //location.reload();
      if (window.matchMedia("(max-width: 432px)").matches) { // If media query matches
      footer1.className="page2";
      }
      else if (window.matchMedia("(min-width: 769px)").matches){
            footer1.className="footer";
      } 
      else if (window.matchMedia("(min-width: 433px)").matches){
            footer1.className="page2";
      }    
}

function myFunction3() {
      var btn1 = document.getElementById("btn1");
      var btn2 = document.getElementById("btn2");
      var btn3 = document.getElementById("btn3");
      var btn4 = document.getElementById("btn4");
      var footer1 = document.getElementById("footer1");
      btn1.style.backgroundSize="1em 1.4em";
      btn1.style.backgroundRepeat="no-repeat";
      btn1.style.backgroundPosition="center";
      btn1.innerText="Delay Addition";
      btn2.style.backgroundSize="2.1em 3.1em";
      btn2.style.backgroundRepeat="no-repeat";
      btn2.style.backgroundPosition="center";
      btn2.innerText="Amplitude Range";
      btn3.style.color="white";
      btn2.style.color="black";
      btn1.style.color="black";
      btn4.style.color="black";
      btn3.style.backgroundColor="#2d9cc2";
      btn1.style.backgroundColor="white";
      btn2.style.backgroundColor="white";
      btn4.style.backgroundColor="white";
      btn3.style.backgroundImage="none";
      btn3.style.width="12em";
      btn2.style.width="10em";
      btn1.style.width="10em";
      btn4.style.width="10em";
      btn3.innerHTML = "Frequency Range";
     if (window.matchMedia("(max-width: 432px)").matches) { // If media query matches
      footer1.className="page3";
      } 
      else if (window.matchMedia("(min-width: 1100px)").matches){
            footer1.className="footer";
      }
      else if (window.matchMedia("(min-width: 433px)").matches){
            footer1.className="page3";
      }      
}

function myFunction4() {
      var btn1 = document.getElementById("btn1");
      var btn2 = document.getElementById("btn2");
      var btn3 = document.getElementById("btn3");
      var btn4 = document.getElementById("btn4");
      var footer1 = document.getElementById("footer1");
      btn1.style.backgroundSize="1em 1.4em";
      btn1.style.backgroundRepeat="no-repeat";
      btn1.style.backgroundPosition="center";
      btn1.innerText="Delay Addition";
      btn2.style.backgroundSize="2.1em 3.1em";
      btn2.style.backgroundRepeat="no-repeat";
      btn2.style.backgroundPosition="center";
      btn2.innerText="Amplitude Range";
      btn4.style.color="white";
      btn2.style.color="black";
      btn1.style.color="black";
      btn3.style.color="black";
      btn4.style.backgroundColor="#2d9cc2";
      btn1.style.backgroundColor="white";
      btn2.style.backgroundColor="white";
      btn3.style.backgroundColor="white";
      btn4.style.backgroundImage="none";
      btn4.style.width="12em";
      btn2.style.width="10em";
      btn1.style.width="10em";
      btn3.style.width="10em";
      btn4.innerHTML = "All parameters";
     if (window.matchMedia("(max-width: 432px)").matches) { // If media query matches
      footer1.className="page4";
      } 
      else if (window.matchMedia("(min-width: 1100px)").matches){
            footer1.className="footer";
      }
      else if (window.matchMedia("(min-width: 433px)").matches){
            footer1.className="page4";
      }
      
}

//Plotting and draw functions for Delay Tab

function plotSineD(ctx, xOffset, yOffset, start_y, ySet) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var scale = 40;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(255,0,0)";

    var x = 50;
    var y = ySet;
    var amplitude = 100;
    var frequency = 50;
    ctx.moveTo(x, y);

    while (x < width) {
        y = height / 2 + amplitude * Math.sin((x + xOffset) / frequency);
        ctx.lineTo(x, y);
        x++;
    }
    ctx.stroke();
    ctx.save();
}
function plotLineD(ctx, amp, ySet) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var scale = 40;
    ctx.strokeStyle = "rgb(255,0,0)";
    var x = 50;
    var y = ySet;
    var amplitude = amp;
    var frequency = 50;
    ctx.moveTo(x, y);

    while (x < width) {
        y = height / 2 + amplitude;
        ctx.lineTo(x, y);
        x++;
    }
    ctx.stroke();
    ctx.save();
}

function plotreference(ctx, amp, ySet) {
    console.log("In plot reference");
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var scale = 40;
    ctx.strokeStyle = "white";
    var x = 50;
    var y = ySet;
    var amplitude = amp;
    var frequency = 50;
    ctx.moveTo(x, y);

    while (x < width) {
        y = height / 2 + amplitude;
        ctx.lineTo(x, y);
        x++;
    }
    ctx.stroke();
    ctx.save();
}

function drawD(k) {
    if (k > 100) { k=0; }
    var canvasD = document.getElementById("canvasD");
    var contextD = canvasD.getContext("2d");
    var phase = document.getElementById("myRange");
    contextD.save();
    let i = 0;
    while (i < 7) {
        plotreference(contextD, 0, 250);
        task1(i);
        task2(i);
        i++;
    }
    
    function task1(i) {
        setTimeout(function () {
            plotSineD(contextD, 170 + (Math.random()*0.5 * k) , 0, 50, 155);
            plotLineD(contextD, 100 - 0.05*k, 350);
        }, 1000 * i);
    }
    
    function task2(i) {
        setTimeout(function () {
            plotSineD(contextD, 14 + (Math.random()*0.5 * k), 0, 25, 345);
            plotLineD(contextD, -100 + 0.05*k, 150);
        }, 1000 * i);
    }
}

//Plotting and draw functions for Amplitude Tab

function plotSineA(ctx, xOffset, yOffset, start_y, ySet, amp) {
  var width = ctx.canvas.width;
  var height = ctx.canvas.height;
  var scale = 40;
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgb(255,255,0)";
  var x = 50;
  var y = ySet;
  var amplitude = amp;
  var frequency = 50;
  ctx.moveTo(x, y);
  while (x < width) {
    y = height / 2 + amplitude * Math.sin((x + xOffset) / frequency);
    ctx.lineTo(x, y);
    x++;
  }
  ctx.stroke();
  ctx.save();
}
function plotLineA(ctx, amp, ySet) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var scale = 40;
    ctx.strokeStyle = "rgb(255,255,0)";
    var x = 50;
    var y = ySet;
    var amplitude = amp;
    var frequency = 50;
    ctx.moveTo(x, y);

    while (x < width) {
        y = height / 2 + amplitude;

        ctx.lineTo(x, y);
        x++;
    }

    ctx.stroke();
    ctx.save();
}
function drawA(k) {
    if (k > 100) { k=0; }
    var canvasA = document.getElementById("canvasA");
    var contextA = canvasA.getContext("2d");
    var phase = document.getElementById("myRange");
    contextA.save();
    let i = 0;
    while (i < 7) {
        plotreference(contextA, 0, 250);
        task1(i);
        task2(i);
        i++;
    }
    
    function task1(i) {
        setTimeout(function () {
            plotSineA(contextA, 170, 0, 50, 155, 100 + (Math.random()*0.5 * k));
            plotLineA(contextA, 100 - 0.05*k, 350);
        }, 1000 * i);
      }
    
    function task2(i) {
        setTimeout(function () {
            plotSineA(contextA, 14, 0, 25, 345, 100 + (Math.random()*0.5 * k)) ;
            plotLineA(contextA, -100 + 0.05*k, 150);
      }, 1000 * i);
    }
}

//Plotting and draw functions for Frequency Tab

function plotSineF(ctx, xOffset, yOffset, start_y, ySet, amp, freq) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var scale = 40;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(0,255,0)";
    var x = 50;
    var y = ySet;
    var amplitude = amp;
    var frequency = freq;
    ctx.moveTo(x, y);
    while (x < width) {
        y = height / 2 + amplitude * Math.sin((x + xOffset) / frequency);
        ctx.lineTo(x, y);
        x++;
    }
    ctx.stroke();
    ctx.save();
}
function plotLineF(ctx, amp, ySet) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var scale = 40;
    ctx.strokeStyle = "rgb(0,255,0)";
    var x = 50;
    var y = ySet;
    var amplitude = amp;
    var frequency = 50;
    ctx.moveTo(x, y);
    while (x < width) {
        y = height / 2 + amplitude;

        ctx.lineTo(x, y);
        x++;
    }
    ctx.stroke();
    ctx.save();
}
function drawF(k,l,m) {
    if (k > 100) { k=0; }
    var canvasF = document.getElementById("canvasF");
    var contextF = canvasF.getContext("2d");
    var phase = document.getElementById("myRangeF");
    contextF.save();
    let i = 0;
    plotreference(contextF, 0, 250);
    while (i < 7) {
        //plotreference(contextF, 0, 250);
        task1(i);
        task2(i);
        i++;
    }
    
    function task1(i) {
        setTimeout(function () {
            plotSineF(contextF, 170 + (Math.random()*0.5 * k) , 0, 50, 155, 100 + (Math.random()*0.5 * l), 50 + (Math.random()*0.15 * m));
            plotLineF(contextF, 100 - 0.05*k, 350);
        }, 1000 * i);
      }
    
    function task2(i) {
           setTimeout(function () {
            plotSineF(contextF, 14 + (Math.random()*0.5 * k), 0, 25, 345, 100 + (Math.random()*0.5 * l), 50 + (Math.random()*0.15 * m)) ;
            plotLineF(contextF, -100 + 0.05*k, 150);
        }, 1000 * i);
    }
}

//Plotting and draw functions for All parameters Tab

function plotSineP(ctx, xOffset, yOffset, start_y, ySet, amp, freq, color) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var scale = 40;
    ctx.beginPath();
    ctx.lineWidth = 2;
    if (color == 1){
      ctx.strokeStyle = "rgb(255,0,0)";
    } else if (color == 2){
      ctx.strokeStyle = "rgb(255,255,0)";
    } else {
      ctx.strokeStyle = "rgb(0,255,0)";
    }
    var x = 50;
    var y = ySet;
    var amplitude = amp;
    var frequency = freq;
    ctx.moveTo(x, y);
    while (x < width) {
        y = height / 2 + amplitude * Math.sin((x + xOffset) / frequency);
        ctx.lineTo(x, y);
        x++;
    }
    ctx.stroke();
    ctx.save();
}
function plotLineP(ctx, amp, ySet, color) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var scale = 40;
    if (color == 1){
      ctx.strokeStyle = "rgb(255,0,0)";
    } else if (color == 2){
      ctx.strokeStyle = "rgb(255,255,0)";
    } else {
      ctx.strokeStyle = "rgb(0,255,0)";
    }
    var x = 50;
    var y = ySet;
    var amplitude = amp;
    var frequency = 50;
    ctx.moveTo(x, y);
    while (x < width) {
        y = height / 2 + amplitude;

        ctx.lineTo(x, y);
        x++;
    }
    ctx.stroke();
    ctx.save();
}
function drawP(k,l,m) {
    if (k > 100) { k=0; }
    var canvasP = document.getElementById("canvasP");
    var contextP = canvasP.getContext("2d");
    var phaseP = document.getElementById("myRangeP");
    contextP.save();
    let i = 0;
    while (i < 7) {
        task1(i);
        task2(i);
        i++;
    }
    if(l == 0 && m == 0){
      colour = 1;
      plotreference(contextP, 0, 250);
    } else if (k == 0 && m == 0){
      colour = 2;
    } else {
      colour = 3;
    }
    function task1(i) {
        setTimeout(function () {
            plotSineP(contextP, 170 + (Math.random()*0.5 * k) , 0, 50, 155, 100 + (Math.random()*0.5 * l), 50 + (Math.random()*0.15 * m), colour);
            plotLineP(contextP, 100 - 0.05*k, 350, colour);
        }, 1000 * i);
      }
    
    function task2(i) {
           setTimeout(function () {
            plotSineP(contextP, 14 + (Math.random()*0.5 * k), 0, 25, 345, 100 + (Math.random()*0.5 * l), 50 + (Math.random()*0.15 * m), colour) ;
            plotLineP(contextP, -100 + 0.05*k, 150, colour);
        }, 1000 * i);
    }  
}

//Getting slider value and drawing functions for all tabs

function sliderValueD() {
  var x = document.getElementById("myRangeD").value;
  drawD(x);
  var myobj = document.getElementById("buttonD");
  document.getElementById("buttonD").disabled=true;
  document.getElementById("buttonTryD").disabled=false;
}
function sliderValueA() {
  var y = document.getElementById("myRangeA").value;
  drawA(y);
  var myobj = document.getElementById("buttonA");
  document.getElementById("buttonA").disabled=true;
  document.getElementById("buttonTryA").disabled=false;
}
function sliderValueF() {
  var z = document.getElementById("myRangeF").value;
  drawF(0,0,z);
  var myobj = document.getElementById("buttonF");
  document.getElementById("buttonF").disabled=true;
  document.getElementById("buttonTryF").disabled=false;
}
function sliderValuePD() {
  var x = document.getElementById("myRangePD").value;
  drawP(x,0,0);
  var myobj = document.getElementById("buttonPD");
  document.getElementById("buttonPD").disabled=true;
  document.getElementById("buttonPA").disabled=false;
}
function sliderValuePA() {
  var y = document.getElementById("myRangePA").value;
  drawP(0,y,0);
  var myobj = document.getElementById("buttonPA");
  document.getElementById("buttonPA").disabled=true;
  document.getElementById("buttonPF").disabled=false;
}
function sliderValuePF() {
  var z = document.getElementById("myRangePF").value;
  drawP(0,0,z);
  var myobj = document.getElementById("buttonPF");
  document.getElementById("buttonPF").disabled=true;
  document.getElementById("buttonTryP").disabled=false;
}

//SliderValue functions document

//tryAgain functions for all tabs

function tryagainD()
{
  document.getElementById("buttonD").disabled=true;
  document.getElementById("buttonTryD").disabled=false;
  var canvas = document.getElementById("canvasD");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("buttonD").disabled=false;
}
function tryagainA()
{
  document.getElementById("buttonA").disabled=true;
  document.getElementById("buttonTryA").disabled=false;
  var canvas = document.getElementById("canvasA");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  document.getElementById("buttonA").disabled=false;
}
function tryagainF()
{
  document.getElementById("buttonF").disabled=true;
  document.getElementById("buttonTryF").disabled=false;
  var canvas = document.getElementById("canvasF");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("buttonF").disabled=false;
}
function tryagainP()
{
  document.getElementById("buttonPD").disabled=true;
  document.getElementById("buttonPA").disabled=true;
  document.getElementById("buttonPF").disabled=true;
  document.getElementById("buttonTryP").disabled=false;
  var canvas = document.getElementById("canvasP");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("buttonPD").disabled=false;
  document.getElementById("buttonPA").disabled=false;
  document.getElementById("buttonPF").disabled=false;
}

//tryAgain functions ended

//Functions to show Slider values in all tabs

function sliderShowD() {
  document.getElementById('LabelD').innerHTML = document.getElementById("myRangeD").value;
  document.getElementById('LabelD').innerHTML += " ms";
}
function sliderShowA() {
  document.getElementById('LabelA').innerHTML = document.getElementById("myRangeA").value;
  document.getElementById('LabelA').innerHTML += " ms";
}
function sliderShowF() {
  document.getElementById('LabelF').innerHTML = document.getElementById("myRangeF").value;
  document.getElementById('LabelF').innerHTML += " ms";
}
function sliderShowPD() {
  document.getElementById('LabelPD').innerHTML = document.getElementById("myRangePD").value;
  document.getElementById('LabelPD').innerHTML += " ms";
}
function sliderShowPA() {
  document.getElementById('LabelPA').innerHTML = document.getElementById("myRangePA").value;
  document.getElementById('LabelPA').innerHTML += " ms";
}
function sliderShowPF() {
  document.getElementById('LabelPF').innerHTML = document.getElementById("myRangePF").value;
  document.getElementById('LabelPF').innerHTML += " ms";
}

//Functions for Slider value ended

//Function to show context co-ordinates of clicked point
function showCoords(event) {
  let x_cords=[];
  let y_cords=[];
  var x_cord1,y_cord1;
  x_cord1 = event.clientX
  y_cord1 = event.clientY
  x_cords.push(x_cord1)
  y_cords.push(y_cord1)
  var x = x_cords;
  var y = y_cords;
  var coords = "X coords: " + x;
  for(let i=0;i<x_cords.length;i++){
      document.getElementById("demoD").innerHTML = "Coordinate X:&emsp;" + x_cords[i] + "<br><br>Coordinate Y:&emsp;" + y_cords[i];
      document.getElementById("demoA").innerHTML = "Coordinates X:&emsp;" + x_cords[i] + "<br><br>Coordinate Y:&emsp;" + y_cords[i];
      document.getElementById("demoF").innerHTML = "Coordinates X:&emsp;" + x_cords[i] + "<br><br>Coordinate Y:&emsp;" + y_cords[i];
      document.getElementById("demoP").innerHTML = "Coordinates X:&emsp;" + x_cords[i] +
      "&emsp;&emsp;Coordinate Y:&emsp;" + y_cords[i];
  } 
}

//Function to calculate parameter
function showDJ(){
  var num1DJ=document.getElementById("val1DJ").value;
  var num2DJ=document.getElementById("val2DJ").value;
  var sliderValueD=document.getElementById("myRangeD").value;
  if(Math.abs(num2DJ-num1DJ) <= sliderValueD){
    console.log(sliderValueD);
    document.getElementById("demoDJ").innerHTML="Jitter: " + Math.abs(num2DJ-num1DJ) + "μs";
    alert("Correct value of Jitter!");
  } else {
    console.log(sliderValueD)
    alert("Wrong value of Jitter! Try Again!")
  }
}
function showDEO(){
    var num1DEO=document.getElementById("val1DEO").value;
    var num2DEO=document.getElementById("val2DEO").value;
    eyeOpening = Math.abs(num2DEO - num1DEO);
    var sliderValueD=document.getElementById("myRangeD").value;
    if (sliderValueD <= 50 && (eyeOpening >= 188 && eyeOpening <= 195)){
      document.getElementById("demoDEO").innerHTML="Eye Opening: "+Math.abs(num2DEO-num1DEO)+"mV";
      alert("Correct value of Eye Opening!");
    } else if (sliderValueD > 50 && (eyeOpening > 176 && eyeOpening < 190)){
      document.getElementById("demoDEO").innerHTML="Eye Opening: "+Math.abs(num2DEO-num1DEO)+"mV";
      alert("Correct value of Eye Opening!");
    } else {
      alert("Wrong value of Eye Opening! Try Again!");
    }    
}
function showDEW(){
    var num1DEW=document.getElementById("val1DEW").value;
    var num2DEW=document.getElementById("val2DEW").value;
    eyeWidth = Math.abs(num1DEW - num2DEW);
    var sliderValueD=document.getElementById("myRangeD").value;
    if (sliderValueD <= 35 && (eyeWidth >= 108 && eyeWidth <= 163)){
      document.getElementById("demoDEW").innerHTML="Eye Width: "+Math.abs(num2DEW-num1DEW)+"ms";
      alert("Correct value of Eye Width!");
    } else if ((sliderValueD <=50 && sliderValueD >=36) && (eyeWidth >= 106 && eyeWidth <= 155)){
      document.getElementById("demoDEW").innerHTML="Eye Width: "+Math.abs(num2DEW-num1DEW)+"ms";
      alert("Correct value of Eye Width!");
    } else if ((sliderValueD <=65 && sliderValueD >=51) && (eyeWidth >= 102 && eyeWidth <= 153)){
      document.getElementById("demoDEW").innerHTML="Eye Width: "+Math.abs(num2DEW-num1DEW)+"ms";
      alert("Correct value of Eye Width!");
    } else if (sliderValueD >=66 && (eyeWidth >= 100 && eyeWidth <= 130)){
      document.getElementById("demoDEW").innerHTML="Eye Width: "+Math.abs(num2DEW-num1DEW)+"ms";
      alert("Correct value of Eye Width!");
    } else {
      alert("Wrong value of Eye Width! Try Again!");
    }   
}

function showAJ(){
    var num1AJ=document.getElementById("val1AJ").value;
    var num2AJ=document.getElementById("val2AJ").value;
    var sliderValueA=document.getElementById("myRangeA").value;
    jitter = Math.abs(num2AJ-num1AJ);
    if( sliderValueA <=35 && (jitter >= 14 && jitter <= 22)){
      document.getElementById("demoAJ").innerHTML="Jitter: " + Math.abs(num2AJ-num1AJ) + "μs";
      alert("Correct value of Jitter!");
    } else if ((sliderValueA >= 36 && sliderValueA <= 50) && (jitter >= 18 && jitter <= 32)){
      document.getElementById("demoAJ").innerHTML="Jitter: " + Math.abs(num2AJ-num1AJ) + "μs";
      alert("Correct value of Jitter!");
    } else if ((sliderValueA >= 51 && sliderValueA <= 65) && (jitter >= 22 && jitter <= 38)){
      document.getElementById("demoAJ").innerHTML="Jitter: " + Math.abs(num2AJ-num1AJ) + "μs";
      alert("Correct value of Jitter!");
    } else if ((sliderValueA >= 66) && (jitter >= 36 && jitter <= 44)){
      document.getElementById("demoAJ").innerHTML="Jitter: " + Math.abs(num2AJ-num1AJ) + "μs";
      alert("Correct value of Jitter!");
    } else {
      alert("Wrong value of Jitter! Try Again!");
    }
}
function showAEO(){
    var num1AEO=document.getElementById("val1AEO").value;
    var num2AEO=document.getElementById("val2AEO").value;
    var sliderValueA=document.getElementById("myRangeA").value;
    eyeOpening = Math.abs(num2AEO-num1AEO);
    if( sliderValueA <=35 && (eyeOpening >= 178 && eyeOpening <= 196)){
      document.getElementById("demoAEO").innerHTML="Eye Opening: "+Math.abs(num2AEO-num1AEO)+"mV";
      alert("Correct value of Eye Opening!");
    } else if ((sliderValueA >= 36 && sliderValueA <= 50) && (eyeOpening >= 166 && eyeOpening <= 188)){
      document.getElementById("demoAEO").innerHTML="Eye Opening: "+Math.abs(num2AEO-num1AEO)+"mV";
      alert("Correct value of Eye Opening!");
    } else if ((sliderValueA >= 51 && sliderValueA <= 65) && (eyeOpening >= 164 && eyeOpening <= 188)){
      document.getElementById("demoAEO").innerHTML="Eye Opening: "+Math.abs(num2AEO-num1AEO)+"mV";
      alert("Correct value of Eye Opening!");
    } else if ((sliderValueA >= 66) && (eyeOpening >= 153 && eyeOpening <= 182)){
      document.getElementById("demoAEO").innerHTML="Eye Opening: "+Math.abs(num2AEO-num1AEO)+"mV";
      alert("Correct value of Eye Opening!");
    } else {
      alert("Wrong value of Eye Opening! Try Again!");
    }
}
function showAEW(){
    var num1AEW=document.getElementById("val1AEW").value;
    var num2AEW=document.getElementById("val2AEW").value;
    var sliderValueA=document.getElementById("myRangeA").value;
    eyeWidth = Math.abs(num2AEW-num1AEW);
    if( sliderValueA <=35 && (eyeWidth >= 132 && eyeWidth <= 143)){
      document.getElementById("demoAEW").innerHTML="Eye Width: "+Math.abs(num2AEW-num1AEW)+"ms";
      alert("Correct value of Eye width!");
    } else if ((sliderValueA >= 36 && sliderValueA <= 50) && (eyeWidth >= 126 && eyeWidth <= 138)){
      document.getElementById("demoAEW").innerHTML="Eye Width: "+Math.abs(num2AEW-num1AEW)+"ms";
      alert("Correct value of Eye width!");
    } else if ((sliderValueA >= 51 && sliderValueA <= 65) && (eyeWidth >= 118 && eyeWidth <= 128)){
      document.getElementById("demoAEW").innerHTML="Eye Width: "+Math.abs(num2AEW-num1AEW)+"ms";
      alert("Correct value of Eye width!");
    } else if ((sliderValueA >= 66) && (eyeWidth >= 110 && eyeWidth <= 124)){
      document.getElementById("demoAEW").innerHTML="Eye Width: "+Math.abs(num2AEW-num1AEW)+"ms";
      alert("Correct value of Eye width!");
    } else {
      alert("Wrong value of Eye Width! Try Again!");
    }
}

function showFJ(){
    var num1FJ=document.getElementById("val1FJ").value;
    var num2FJ=document.getElementById("val2FJ").value;
    var sliderValueF=document.getElementById("myRangeF").value;
    var jitter = Math.abs(num2FJ-num1FJ);
    if(sliderValueF<=25 && (jitter>=19 && jitter <=51 ) ){
        console.log(sliderValueF);
        document.getElementById("demoFJ").innerHTML="Jitter: " + Math.abs(num2FJ-num1FJ) + "μs";
        alert("Correct value of Jitter!");
    }
    else if((sliderValueF>=25 && sliderValueF<=30) && (jitter>=25 && jitter<=56)){
        console.log(sliderValueF);
        document.getElementById("demoFJ").innerHTML="Jitter: " + Math.abs(num2FJ-num1FJ) + "μs";
        alert("Correct value of Jitter!");
    }
    else if((sliderValueF>=30 && sliderValueF<=35) && (jitter>=36 && jitter<=65)){
        console.log(sliderValueF);
        document.getElementById("demoFJ").innerHTML="Jitter: " + Math.abs(num2FJ-num1FJ) + "μs";
        alert("Correct value of Jitter!");
    }
    else if((sliderValueF>=35 && sliderValueF<=40) && (jitter>=38 && jitter<=65)){
        console.log(sliderValueF);
        document.getElementById("demoFJ").innerHTML="Jitter: " + Math.abs(num2FJ-num1FJ) + "μs";
        alert("Correct value of Jitter!");
    }
    else{
        console.log(sliderValueF)
        alert("Wrong value of jitter!Try Again!")
    }
}
function showFEO(){
    var num1FEO=document.getElementById("val1FEO").value;
    var num2FEO=document.getElementById("val2FEO").value;
    var eyeopening = Math.abs(num2FEO-num1FEO);
    var sliderValueF = document.getElementById("myRangeF").value;
    if((sliderValueF>=20 && sliderVaueF<=30) && (eyeopening>=200 && eyeopening<=215)){ 
      document.getElementById("demoFEO").innerHTML="Eye Opening: "+ eyeopening +"	µV";
      alert("Correct value of Eye Opening!");}
    else if((sliderValueF>=30 && sliderVaueF<=40) && (eyeopening>=195 && eyeopening<=210)){ 
      document.getElementById("demoFEO").innerHTML="Eye Opening: "+ eyeopening +"	µV";
      alert("Correct value of Eye Opening!");}
      else{
        console.log(sliderValueF)
        alert("Wrong value of Eye Opening!Try Again!")
      }
    
}
   

function showFEW(){
    var num1FEW=document.getElementById("val1FEW").value;
    var num2FEW=document.getElementById("val2FEW").value;
    var eyeWidth= Math.abs(num2FEW-num1FEW);
    var sliderValueF=document.getElementById("myRangeF").value;
    if(sliderValueF<=25 && (eyeWidth>=130 && eyeWidth <=142 ) ){
        console.log(sliderValueF);
        document.getElementById("demoFEW").innerHTML="Eye Width: " + Math.abs(num2FEW-num1FEW) + "μs";
        alert("Correct value of Eye Width!");
    }
    else if((sliderValueF>25 && sliderValueF<=30) && (eyeWidth>=130 && eyeWidth<=135)){
        console.log(sliderValueF);
        document.getElementById("demoFEW").innerHTML="Eye Width: " + Math.abs(num2FEW-num1FEW) + "μs";
        alert("Correct value of Eye Width!");
    }
   else if((sliderValueF>=30 && sliderValueF<=35) && (eyeWidth>=122 && eyeWidth<=135)){
        console.log(sliderValueF);
        document.getElementById("demoFEW").innerHTML="Eye Width: " + Math.abs(num2FEW-num1FEW) + "μs";
        alert("Correct value of Eye Width!");
    }
   else if((sliderValueF>=35 && sliderValueF<=40) && (eyeWidth>=119 && eyeWidth<=128)){
        console.log(sliderValueF);
        document.getElementById("demoFEW").innerHTML="Eye Width: " + Math.abs(num2FEW-num1FEW) + "μs";
        alert("Correct value of Eye Width!");
    }
    else{
        console.log(sliderValueF)
        alert("Wrong value of Eye Width! Please try again!")
    }
}

function showPJ(){
    var num1PJ=document.getElementById("val1PJ").value;
    var num2PJ=document.getElementById("val2PJ").value;
    var sliderValuePF=document.getElementById("myRangePF").value;
    var jitter = Math.abs(num2PJ-num1PJ);
     if(sliderValuePF<=25 && (jitter>=27 && jitter <=72 ) ){
        console.log(sliderValuePF);
        document.getElementById("demoPJ").innerHTML="Jitter: " + jitter + "μs";
        alert("Correct value of Jitter!");
    }
    else if((sliderValuePF>=25 && sliderValuePF<=30) && (jitter>=37 && jitter<=69)){
        console.log(sliderValuePF);
        document.getElementById("demoPJ").innerHTML="Jitter: " + jitter + "μs";
        alert("Correct value of Jitter!");
    }
    else if((sliderValuePF>=30 && sliderValuePF<=35) && (jitter>=42 && jitter<=84)){
        console.log(sliderValuePF);
        document.getElementById("demoPJ").innerHTML="Jitter: " + jitter + "μs";
        alert("Correct value of Jitter!");
    }
    else if((sliderValuePF>=35 && sliderValuePF<=40) && (jitter>=42 && jitter<=85)){
        console.log(sliderValuePF);
        document.getElementById("demoPJ").innerHTML="Jitter: " + jitter + "μs";
        alert("Correct value of Jitter!");
    }
    else{
        console.log(sliderValuePF)
        alert("Wrong value of jitter!Try Again!")
    }
}
function showPEO(){
    var num1PEO=document.getElementById("val1PEO").value;
    var num2PEO=document.getElementById("val2PEO").value;
    var eyeopening = Math.abs(num2PEO-num1PEO);
    var sliderValuePA = document.getElementById("myRangePA").value;
     if(sliderValuePA<=35 && (eyeopening>=210 && eyeopening <=260 ) ){
        console.log(sliderValuePA);
        document.getElementById("demoPEO").innerHTML="Eye Opening: " + eyeopening + "μV";
        alert("Correct value of Eye Opening!");
    }
    else if((sliderValuePA>=35 && sliderValuePA<=50) && (eyeopening>=130 && eyeopening<=270)){
        console.log(sliderValuePA);
        document.getElementById("demoPEO").innerHTML="Eye Opening: " + eyeopening + "μV";
        alert("Correct value of Eye Opening!");
    }
    else if((sliderValuePA>=50 && sliderValuePA<=65) && (eyeopening>=135 && eyeopening<=280)){
        console.log(sliderValuePA);
        document.getElementById("demoPEO").innerHTML="Eye Opening: " + eyeopening + "μV";
        alert("Correct value of Eye Opening!");
    }
    else if((sliderValuePA>=65 && sliderValuePA<=80) && (eyeopening>=240 && eyeopening<=280)){
        console.log(sliderValuePA);
        document.getElementById("demoPEO").innerHTML="Eye Opening: " + eyeopening + "μV";
        alert("Correct value of Eye Opening!");
    }
    else{
        console.log(sliderValuePA)
        alert("Wrong value of Eye Opening!Try Again!")
    }
}
function showPEW(){
    var num1PEW=document.getElementById("val1PEW").value;
    var num2PEW=document.getElementById("val2PEW").value;
    var eyewidth=Math.abs(num2PEW-num1PEW);
    var sliderValuePF=document.getElementById("myRangePF").value;
    if(sliderValuePF<=25 && (eyewidth>=97 && eyewidth <=134 ) ){
        console.log(sliderValuePF);
        document.getElementById("demoPEW").innerHTML="Eye Width: " + eyewidth + "μs";
        alert("Correct value of Eye Width!");
    }
    else if((sliderValuePF>=25 && sliderValuePF<=30) && (eyewidth>=104 && eyewidth<=128)){
        console.log(sliderValuePF);
        document.getElementById("demoPEW").innerHTML="Eye Width: " + eyewidth + "μs";
        alert("Correct value of Eye Width!");
    }
    else if((sliderValuePF>=30 && sliderValuePF<=35) && (eyewidth>=105 && eyewidth<=129)){
        console.log(sliderValuePF);
        document.getElementById("demoPEW").innerHTML="Eye Width: " + eyewidth + "μs";
        alert("Correct value of Eye Width!");
    }
    else if((sliderValuePF>=35 && sliderValuePF<=40) && (eyewidth>=95 && eyewidth<=125)){
        console.log(sliderValuePF);
        document.getElementById("demoPEW").innerHTML="Eye Width: " + eyewidth + "μs";
        alert("Correct value of Eye Width!");
    }
    else{
        console.log(sliderValuePF)
        alert("Wrong value of Eye Width!Try Again!")
    }
}