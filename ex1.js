const colorChangeBtn = document.querySelector('.btn-randomizer');
const text = document.querySelector('h1');
const bodyEl = document.body;
// could rename the const to something that works better
function changeBGColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    // console.log("hello");
}

function changeTextColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.color = `#${randomColor}`;
    // console.log("white text");
}




colorChangeBtn.addEventListener('click', changeBGColor);
colorChangeBtn.addEventListener('click', changeTextColor);