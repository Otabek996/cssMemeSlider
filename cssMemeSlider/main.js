// ==================== SLIDER ====================
const imgOne = document.getElementById("imgOne");
const imgTwo = document.getElementById("imgTwo");
const imgThree = document.getElementById("imgThree");
const text = document.getElementById("text");

const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");

const textImage = {
    imgOne: "Project start",
    imgTwo: "Night before deadline",
    imgThree: "On deadline day",
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

    img.classList.add("img-active");
    btn.classList.add("active");
    text.innerText = textImage[img.id];
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
