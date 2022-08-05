var i = 0;
var text = 'your website.';
var speed = [75, 100, 125, 150, 175];

setTimeout(print, 500);

function print() {
    if (i < text.length) {
        document.getElementById("print").innerHTML += text.charAt(i);
        i++;
        setTimeout(print, speed[Math.floor(Math.random()*speed.length)]);
    } else {
        document.getElementById('print').classList.add('anim');
    }
}