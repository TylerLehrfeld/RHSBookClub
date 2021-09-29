var Width = 0;
var out = false;

document.getElementById("box").addEventListener("click", moveOut)
window.addEventListener("load", format);
window.addEventListener("resize", format);
function moveOut() {
    document.getElementById("body").style.pointerEvents = "none";
    if (!(out)) {


        if (Width == 0) {
            document.getElementById("optionOne").style.display = "relative";
            document.getElementById("optionTwo").style.display = "relative";
            document.getElementById("optionOne").style.left = "50px";
            document.getElementById("optionTwo").style.left = "50px";
            document.getElementById("optionOne").style.top = "100px";
            document.getElementById("optionTwo").style.top = "150px";
        }
        if (Width < 200) {
            /*document.getElementById("optionOne").style.left = (Width - 150) + "px";
            document.getElementById("optionTwo").style.left = (Width - 150) + "px";*/
            document.getElementById("menu").style.left = Width-200+"px";
            format();
            Width+=4;
            if (Width != 200) {
                setTimeout(moveOut, 1);
            }

        }
    } else {
        if (Width >= 0) {
            Width-=4;
            /*document.getElementById("optionOne").style.left = (Width - 150) + "px";
            document.getElementById("optionTwo").style.left = (Width - 150) + "px";*/
            document.getElementById("menu").style.left = Width-200 + "px";
            format();
            if (Width > 0) {
                setTimeout(moveOut, 1);
            }

        } else {
            Width = 0;

        }
    }
    if (Width == 200) {
        document.getElementById("body").style.pointerEvents = "auto";
        out = true;
    } else if (Width == 0) {
        document.getElementById("body").style.pointerEvents = "auto";
        out = false;
    }
}

function format() {
    //document.getElementById("description").style.width = window.innerWidth - 220 + "px";
    //document.getElementById("mainPage").style.height = window.innerHeight - document.getElementById("header").style.height +"px";
    if(window.location.href=="https://www.reservoirbookclub.xyz/Calendar.html"||window.location.href=="file:///C:/Users/14107/BookClub/docs/Calendar.html") {
        document.getElementById("form2").style.marginLeft = (window.innerWidth-800)/2+"px";
    } else {
        document.getElementById("form").style.marginLeft = (window.innerWidth-640)/2+"px";
    }
    
}