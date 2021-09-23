var Width = 0;
var out = false;

document.getElementById("box").addEventListener("click", moveOut)
window.addEventListener("load", format);
window.addEventListener("resize", format);
function moveOut() {
    document.getElementById("body").style.pointerEvents = "none";
    if (!(out)) {


        if (Width == 0) {
            document.getElementById("optionOne").style.display = "block";
            document.getElementById("optionTwo").style.display = "block";
            document.getElementById("optionOne").style.left = "-150px";
            document.getElementById("optionTwo").style.left = "-150px";
            document.getElementById("optionOne").style.top = "100px";
            document.getElementById("optionTwo").style.top = "150px";
        }
        if (Width < 200) {
            document.getElementById("optionOne").style.left = (Width - 150) + "px";
            document.getElementById("optionTwo").style.left = (Width - 150) + "px";
            document.getElementById("menu").style.width = Width + "px";
            format();
            Width+=2;
            if (Width != 200) {
                setTimeout(moveOut, 1);
            }

        }
    } else {
        if (Width >= 0) {
            Width-=2;
            document.getElementById("optionOne").style.left = (Width - 150) + "px";
            document.getElementById("optionTwo").style.left = (Width - 150) + "px";
            document.getElementById("menu").style.width = Width + "px";
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
    document.getElementById("description").style.width = window.innerWidth - 200 + "px";
}