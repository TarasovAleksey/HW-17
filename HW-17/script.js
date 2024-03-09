setInterval(printTime, 1000);
function printTime() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const h1 = document.createElement('h1');
    const time = document.createTextNode(`${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`);
    const randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
    h1.style.color = randomColor;
    h1.appendChild(time);
    const root = document.getElementById('root');
    if (root.firstElementChild) {
        root.replaceChild(h1, root.firstElementChild);
    } else {
        root.appendChild(h1);
    }
}