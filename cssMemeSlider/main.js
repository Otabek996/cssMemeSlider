// ==================== SLIDER ====================
const imgOne = document.getElementById("imgOne");
const imgTwo = document.getElementById("imgTwo");
const imgThree = document.getElementById("imgThree");
const imgFour = document.getElementById("imgFour");
const text = document.getElementById("text");

const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");

const textImage = {
    imgOne: "Project start",
    imgTwo: "Night before deadline",
    imgThree: "On deadline day",
    imgFour: "We are ******"
};

const textSwiping = [
    { transform: "translateX(100%)" },
    { transform: "translateX(0%)" },
];
  
const textTiming = {
    duration: 350,
    iterations: 1
};

const changeImg = (img, btn) => {
    if (imgOne.classList.value == "img img-active") {
        imgOne.classList.remove("img-active");
        btnOne.classList.remove("active");
    };
    if (imgTwo.classList.value == "img img-active") {
        imgTwo.classList.remove("img-active");
        btnTwo.classList.remove("active");
    };
    if (imgThree.classList.value == "img img-active") {
        imgThree.classList.remove("img-active");
        btnThree.classList.remove("active");
    };
    if (imgFour.classList.value == "img img-active") {
        imgFour.classList.remove("img-active");
        btnFour.classList.remove("active");
    };

    img.classList.add("img-active");
    btn.classList.add("active");
    text.innerText = textImage[img.id];
    text.animate(textSwiping, textTiming);
}

btnOne.addEventListener("click", () => {
    changeImg(imgOne, btnOne);
})
btnTwo.addEventListener("click", () => {
    changeImg(imgTwo, btnTwo);
})
btnThree.addEventListener("click", () => {
    changeImg(imgThree, btnThree);
})
btnFour.addEventListener("click", () => {
    changeImg(imgFour, btnFour);
})
