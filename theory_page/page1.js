let counter = 0;
function displayItems() {
    var ele = document.getElementsByName('signal');
    counter += 1;
    console.log(counter);
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            console.log(ele[i].value);
            var sigVal = ele[i].value;
        }
    }
    console.log(sigVal);
    var html1, html2, html3, element1, element2, element3;
    element1 = ".wrap1";
    element2 = ".wrap2";
    element3 = ".wrap3";

    if (counter ==1)
{
  if (sigVal== 1 || sigVal == 2 || sigVal== 3)
{
  if (sigVal == 1) {
      html1 =
      '<div class="card1 bg-light mb-3"><h4 class="card-header bg-primary text-white text-center">Transmitted Signal</h4><div class="card-body images"><img src="images/sig1.PNG" class="img-fluid img-responsive"></div></div>';
    /*  html2 = '<div class="card1 bg-light mb-3"><h4 class="card-header bg-primary text-white text-center">Noise Added Signal</h4><div class="card-body images"><img src="images/sig2.1.png" class="img-fluid img-responsive"></div></div>'; */
      html3 = '<div class="card1 bg-light mb-3"><h4 class="card-header bg-primary text-white text-center">Eye diagram</h4><div class="card-body images"><img src="images/sig1_eyediag.gif" class="img-fluid img-responsive"></div></div>';
      document.querySelector(element1).insertAdjacentHTML('beforeend', html1);
    //   document.querySelector(element2).insertAdjacentHTML('beforeend', html2);
      document.querySelector(element3).insertAdjacentHTML('beforeend', html3);
  } else if (sigVal == 2) {
      html1 = '<div class="card1 bg-light mb-3"><h4 class="card-header bg-primary text-white text-center">Transmitted Signal</h4><div class="card-body images"><img src="images/sig2.png" class="img-fluid img-responsive"></div></div>';
  /*    html2 = '<div class="card2 bg-light mb-3"><h4 class="card-header bg-primary text-white text-center">Noise Added Signal</h4><div class="card-body images"><img src="images/signal2noise.PNG" class="img-fluid img-responsive"></div></div>'; */
      html3 = '<div class="card3 bg-light mb-3"><h4 class="card-header bg-primary text-white text-center">Eye diagram</h4><div class="card-body images"><img src="images/sig2_eyediag.gif" class="img-fluid img-responsive"></div></div>';
      document.querySelector(element1).insertAdjacentHTML('beforeend', html1);
    //   document.querySelector(element2).insertAdjacentHTML('beforeend', html2);
      document.querySelector(element3).insertAdjacentHTML('beforeend', html3);
  } else {
      html1 = '<div class="card1 bg-light mb-3"><h4 class="card-header bg-primary text-white text-center">Transmitted Signal</h4><div class="card-body images"><img src="images/sig3.png" class="img-fluid img-responsive"></div></div>';
   /*   html2 = '<div class="card2 bg-light mb-3"><h4 class="card-header bg-primary text-white text-center">Noise Added Signal</h4><div class="card-body images"><img src="images/signal3noise.PNG" class="img-fluid img-responsive"></div></div>'; */
      html3 = '<div class="card3 bg-light mb-3"><h4 class="card-header bg-primary text-white text-center">Eye diagram</h4><div class="card-body images"><img src="images/sig3_eyediag.gif" class="img-fluid img-responsive"></div></div>';
      document.querySelector(element1).insertAdjacentHTML('beforeend', html1);
    //   document.querySelector(element2).insertAdjacentHTML('beforeend', html2);
      document.querySelector(element3).insertAdjacentHTML('beforeend', html3);
  }
  document.getElementById("send").disabled=true;
}
else{
  alert("Please select a signal");
  count -= 1;
}
}
else{
    counter -= 1;
    console.log("Hello world!");
}
}

function removeItems() {
    var removeObject = document.getElementsByClassName("card1");
    removeObject.remove();
}