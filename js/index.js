// Size change function
function sizeChange(element) {
    let width = Math.floor(Math.random() * 300) + 100;
    let height = Math.floor(Math.random() * 300) + 100;
    element.style.width = width + "px";
    element.style.height = height + "px";
}
// Size change reset function
function resetSize(element) {
    element.style.width = "20%";
    element.style.height = "50%";
}
// Image change function
function imgChange(element) {
    let images = [
        "img1.jpg",
        "img2.jpg",
        "img3.jpg",
        "img4.jpg",
        "img5.jpg",
        "img6.jpg",
        "img7.jpg",
        "img8.jpg",
        "img9.jpg"
    ];
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage ="./images/" + images[randomIndex];
    element.style.backgroundImage = "url('" + randomImage + "')";
}
// Image change reset function
function resetImg(element) {
    element.style.backgroundImage = "none";
}
// Color change function
function colorChange(element) {
    let Change_color = "#" + Math.floor(Math.random() * 16737230).toString(16);
    element.style.backgroundColor = Change_color;
    element.style.borderRadius = "10%";
}
// Color change reset function
function resetColor(element) {
    element.style.backgroundColor = "#6f8120";
    element.style.borderRadius = "10px";
}
