window.addEventListener("keydown", moveObject, false);



var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;

var pic = document.getElementById("pic");
var speed = 20;

var deg = 0;



function moveObject(event){
        var key = event.keyCode;
        if (event.altKey && key == LEFT_KEY) {
                deg -= 10;
                pic.style.transform = "rotate(" + deg + "deg)";
        }

        else if (event.altKey && key == RIGHT_KEY) {
                deg+= 10;
                pic.style.transform = "rotate(" + deg + "deg)";
        }


        if (key == LEFT_KEY) {
                pic.style.left = pic.offsetLeft - speed + "px";
        }
        else if (key == UP_KEY) {
                pic.style.top = pic.offsetTop - speed + "px";
        }

        else if (key == RIGHT_KEY) {
                pic.style.left = pic.offsetLeft + speed + "px";
        }

        else if (key == DOWN_KEY) {
                pic.style.top = pic.offsetTop + speed + "px";
        }


}
