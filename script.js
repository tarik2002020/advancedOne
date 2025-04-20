let rightBtn = document.querySelector('.right-btn-cover');  
let leftBtn = document.querySelector('.left-btn-cover');  
let cover = document.querySelector('.cover');

leftBtn.onclick = function() {
    cover.style.left="-51%";
}
rightBtn.onclick = function() {
    cover.style.left="50%";
}