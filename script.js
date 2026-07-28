const images = document.querySelectorAll(".track img");

const modal = document.querySelector(".modal");
const bigImage = document.querySelector("#bigImage");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Open Image
images.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        bigImage.src = images[currentIndex].src;

        modal.style.display = "flex";

    });

});

// Next
nextBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    bigImage.src = images[currentIndex].src;

});

// Previous
prevBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    bigImage.src = images[currentIndex].src;

});

// Close Modal
modal.addEventListener("click", () => {

    modal.style.display = "none";

});