let myHeading = document.querySelector("h2");
myHeading.textContent = "Hello world!";



let count = 0;

document.body.onmousedown = function () {
    count += 1;
    document.querySelector("#pop").textContent = count;
    changeImage("s0135_13_0");
}
document.body.onmouseup = function () {
    changeImage("s0135_22_0");
}