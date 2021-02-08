// // Access to selected color cell
const selected = document.getElementById('selected');

selected.addEventListener('click', () => {
    if (confirm('Voulez vous tout effacer?')) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    };
})

var canvas = document.getElementById('canvas'); // Access to canvas in DOM
var context = canvas.getContext("2d"); // Setting Context
var painting = document.getElementById('board'); // Access to painting zone
var paintStyle = getComputedStyle(painting);

canvas.width = parseInt(paintStyle.getPropertyValue("width")); // width = parent width
canvas.height = parseInt(paintStyle.getPropertyValue("height")); // height = parent height

var mouse = { x: 0, y: 0 }; // Mouse initial position

function changethickness() { // Change thickness function
    thickness = document.getElementById('thickness').value; // Access to thickness input in DOM
    context.lineWidth = thickness;
}

function changecolor() { // Change color function
    color = document.getElementById('color').value; // Access to color input in DOM
    context.strokeStyle = color;

}

canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;

}, false);

context.lineWidth = 2;
context.lineJoin = 'round';
context.lineCap = 'round';

canvas.addEventListener('mousedown', function (e) {
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);
    canvas.addEventListener('mousemove', onPaint, false);

}, false);

canvas.addEventListener('mouseup', function () {
    canvas.removeEventListener('mousemove', onPaint, false)
}, false);

var onPaint = function () {
    context.lineTo(mouse.x, mouse.y)
    context.stroke();
};





