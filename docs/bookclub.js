var Width = 0;
var Radius = 10;
var out = false;
var Opacity = 0;

document.getElementById("box").addEventListener("click", moveOut);
document.getElementById("buttonprotector").addEventListener("click", moveOut);
document.getElementById("shield").addEventListener("click", moveOut);
window.addEventListener("load", format);
window.addEventListener("resize", format);
function moveOut() {
    document.getElementById("body").style.pointerEvents = "none";
    if (!(out)) {


        if (Width == 0) {
            document.getElementById("shield").style.width = "100%";
            document.getElementById("shield").style.height = "1400px";
            document.getElementById("optionOne").style.display = "relative";
            document.getElementById("optionTwo").style.display = "relative";
            document.getElementById("optionOne").style.left = "25px";
            document.getElementById("optionTwo").style.left = "25px";
            document.getElementById("optionOne").style.top = "25px";
            document.getElementById("optionTwo").style.top = "50px";
        }
        if (Width < 200) {
            /*document.getElementById("optionOne").style.left = (Width - 150) + "px";
            document.getElementById("optionTwo").style.left = (Width - 150) + "px";*/
            document.getElementById("menu").style.left = Width-200+"px";
            document.getElementById("header").style.borderBottomLeftRadius = Radius+"px";
            document.getElementById("shield").style.opacity= Opacity+"%";
            format();
            Width+=4;
            Radius--;
            Opacity++;
            
            if (Width != 200) {
                setTimeout(moveOut, 1);
            }

        }
    } else {
        if (Width >= 0) {
            Width-=4;
            
                Radius++;
                Opacity--;
            /*document.getElementById("optionOne").style.left = (Width - 150) + "px";
            document.getElementById("optionTwo").style.left = (Width - 150) + "px";*/
            document.getElementById("menu").style.left = Width-200 + "px";
            document.getElementById("header").style.borderBottomLeftRadius = Radius+"px";
            document.getElementById("shield").style.opacity= Opacity+"%";
            
            format();
            if (Width > 0) {
                setTimeout(moveOut, 1);
            }

        } else {
            Width = 0;
            Radius = 0;
            Opacity = 0;
            

        }
    }
    if (Width == 200) {
        document.getElementById("body").style.pointerEvents = "auto";
        out = true;
    } else if (Width == 0) {
        document.getElementById("body").style.pointerEvents = "auto";
        out = false;
        document.getElementById("shield").style.width = "0px";
    document.getElementById("shield").style.height = "0px";
    }
}

function format() {
    document.getElementById("buttonprotector").style.position = "absolute";
    document.getElementById("buttonprotector").style.width = "40px";
    document.getElementById("buttonprotector").style.height = "40px";
    document.getElementById("buttonprotector").style.top = "8px";
    document.getElementById("buttonprotector").style.left = "8px";
    //document.getElementById("description").style.width = window.innerWidth - 220 + "px";
    //document.getElementById("mainPage").style.height = window.innerHeight - document.getElementById("header").style.height +"px";
    if(window.location.href=="https://www.reservoirbookclub.xyz/Calendar.html"||window.location.href=="file:///C:/Users/14107/bookclub/docs/Calendar.html") {
        document.getElementById("form2").style.marginLeft = (window.innerWidth-800)/2+"px";
    } else {
        document.getElementById("form").style.marginLeft = (window.innerWidth-640)/2+"px";
    }
    
}