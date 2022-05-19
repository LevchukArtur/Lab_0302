
function CreateImage1() {
    let cnvs = document.getElementById("canvas1");
    let ctxt = canvas1.getContext("2d");
    ctxt.strokeStyle = "#F26700";
    ctxt.lineWidth = 6;
    ctxt.beginPath();
    ctxt.moveTo(35, 30);
    ctxt.lineTo(75, 20);
    ctxt.lineTo(115, 30);
    ctxt.lineTo(105, 110);
    ctxt.lineTo(75, 120);
    ctxt.lineTo(45, 110);
    ctxt.closePath();
    ctxt.stroke();

}

function CreateImage2() {
    let cnvs = document.getElementById("canvas2");
    let ctxt = canvas2.getContext("2d");
    ctxt.strokeStyle = "#85c200";
    ctxt.lineWidth = 6;
    ctxt.beginPath();
    ctxt.moveTo(10, 15);
    ctxt.bezierCurveTo(40, 40, 100, 20, 140, 90);
    ctxt.quadraticCurveTo(40, 150, 10, 15);
    ctxt.closePath();
    ctxt.stroke();
}

function CreateText() {
    let cnvs = document.getElementById("canvas3");
    let ctxt = canvas3.getContext("2d");
    ctxt.strokeStyle = "black";
    ctxt.font = "bold 30pt sans-serif";
    ctxt.textAlign = "center";
    ctxt.strokeText("HTML5", 75, 70, 120);
    ctxt.fillStyle = "orange";
    ctxt.font = "italic 28pt serif";
    ctxt.textAlign = "center";
    ctxt.fillText("Canvas", 75, 100, 120);
    ctxt.stroke();

}

function CreateAnimation() {
    let cnvs = document.getElementById("canvas4");
    let ctxt = canvas4.getContext("2d");
    let x = 1;
    function animation() {
        ctxt.fillStyle = "blue";
        ctxt.fillRect(x * 10, (Math.sin(x)) * 50 + 75, 2.5, 2.5);
        ctxt.fillStyle = "red";
        ctxt.fillRect(x * 10, (Math.cos(x)) * 50 + 75, 2.5, 2.5);
        x = x + 0.01;
        if (x > 60) {
            x = 1;
            ctxt.clearRect(0, 0, 640, 150);
        }
        setTimeout(animation, 10);
    }
    animation();
}


CreateImage1()
CreateImage2()
CreateText()
CreateAnimation()
