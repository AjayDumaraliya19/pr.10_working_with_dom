// Size change function mouseover effect
function sizeChange(element) {
    let widths = Math.floor(Math.random() * 300) + 100;
    let heights = Math.floor(Math.random() * 300) + 100;
    element.style.width = widths + "px";
    element.style.height = heights + "px";
}
// Size change reset function mouseout effect
function resetSize(element) {
    element.style.width = "20%";
    element.style.height = "50%";
}
// Image change function mouseover effect
function imgChange(element) {
    let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg"];
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = "./images/" + images[randomIndex];
    element.style.backgroundImage = "url('" + randomImage + "')";

    const changeContents = document.getElementById("image-content");
    changeContents.innerHTML = "";
}
// Image change reset function
function resetImg(element) {
    element.style.backgroundImage = "none";
    let content = [
        "The purpose of our lives is to be happy.",
        "Life is what happens when you're busy making other plans.",
        "Get busy living or get busy dying.",
        "You only live once, but if you do it right, once is enough.",
        "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        "If you want to live a happy life, tie it to a goal, not to people or things.",
        "Never let the fear of striking out keep you from playing the game.",
        "Money and success don’t change people; they merely amplify what is already there.",
        "Not how long, but how well you have lived is the main thing."
    ];
    const changecontents = document.getElementById("image-content");
    let randomcontentIndex = Math.floor(Math.random() * content.length);
    let randomcontent = content[randomcontentIndex];
    changecontents.innerHTML = randomcontent;
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