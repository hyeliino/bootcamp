var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "Tom1":
        var tom1 = new Audio("tom-1.mp3");
        tom1.play();
        break;

      case "Tom2":
        var tom2 = new Audio("tom-2.mp3");
        tom2.play();
        break;

      case "Tom3":
        var tom3 = new Audio("tom-3.mp3");
        tom3.play();
        break;

      case "Tom4":
        var tom4 = new Audio("tom-4.mp3");
        tom4.play();
        break;

      case "Snare":
        var snare = new Audio("snare.mp3");
        snare.play();
        break;

      case "Crash":
        var crash = new Audio("crash.mp3");
        crash.play();
        break;

      case "Kick":
        var kick = new Audio("kick-bass.mp3");
        kick.play();
        break;

      default: console.log(buttonInnerHHTML);
    }


  });
}

