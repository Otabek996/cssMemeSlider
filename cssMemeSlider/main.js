const imgOne = document.getElementById("imgOne");
const imgTwo = document.getElementById("imgTwo");
const imgThree = document.getElementById("imgThree");
const text = document.getElementById("text");

const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");

const changeImg = (img) => {
    if (imgOne.classList.value == "img img-active") imgOne.classList.remove("img-active");
    if (imgTwo.classList.value == "img img-active") imgTwo.classList.remove("img-active");
    if (imgThree.classList.value == "img img-active") imgThree.classList.remove("img-active");

    img.classList.add("img-active");
}

btnOne.addEventListener("click", () => {
    changeImg(imgOne);
})
btnTwo.addEventListener("click", () => {
    changeImg(imgTwo);
})
btnThree.addEventListener("click", () => {
    changeImg(imgThree);
})