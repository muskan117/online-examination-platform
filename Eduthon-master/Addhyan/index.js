      // Wow.js
      new WOW().init();
       
        wow = new WOW(
        {
        boxClass:     'wow',      
        // default
        animateClass: 'animated', 
        // default
        offset:       0,          
        // default
        mobile:       true,       
        // default
        live:         true        
        // default
      }
      )
      wow.init(); 

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  
window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "10px 5px";
      document.getElementById("logo").style.fontSize = "20px";
    } else {
      document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("logo").style.fontSize = "40px";
    }
  } 
//WhatsHelp.io widget

  (function () {

      var options = {

          whatsapp: "8439705872", // WhatsApp number

          call: "9756316179", // Call phone number

          email: "vanshikasinghal69@gmail.com", // Email

          telegram: "Vanshika5401", // Telegram bot username

          call_to_action: "Queries", // Call to action

          button_color: "rgb(7, 11, 65)", // Color of button

          position: "left", // Position may be 'right' or 'left'

          order: "whatsapp,call", // Order of buttons

      };

      var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;

      var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';

      s.onload = function () { WhWidgetSendButton.init(host, proto, options); };

      var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);

  })();
//WhatsHelp.io widget 


//Code for experiment
var score = 0;
function cFunction1() {
  var x = document.getElementById("correct").innerHTML;
  document.getElementById("cres1").innerHTML = x;
  score++;
}
function wFunction1() {
  var x = document.getElementById("wrong").innerHTML;
  document.getElementById("wres1").innerHTML = x;
}
function cFunction2() {
  var x = document.getElementById("correct").innerHTML;
  document.getElementById("cres2").innerHTML = x;
  score++;
}
function wFunction2() {
  var x = document.getElementById("wrong").innerHTML;
  document.getElementById("wres2").innerHTML = x;
}
function cFunction3() {
  var x = document.getElementById("correct").innerHTML;
  document.getElementById("cres3").innerHTML = x;
  score++;
}
function wFunction3() {
  var x = document.getElementById("wrong").innerHTML;
  document.getElementById("wres3").innerHTML = x;
}
function cFunction4() {
  var x = document.getElementById("correct").innerHTML;
  document.getElementById("cres4").innerHTML = x;
  score++;
}
function wFunction4() {
  var x = document.getElementById("wrong").innerHTML;
  document.getElementById("wres4").innerHTML = x;
}
function cFunction5() {
  var x = document.getElementById("correct").innerHTML;
  document.getElementById("cres5").innerHTML = x;
  score++;
}
function wFunction5() {
  var x = document.getElementById("wrong").innerHTML;
  document.getElementById("wres5").innerHTML = x;
}
function scoreQ(){
  console.log(score);
  document.getElementById("sc").innerHTML = score + "/5";
}

