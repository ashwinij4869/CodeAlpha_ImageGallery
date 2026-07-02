const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

/* OPEN LIGHTBOX */
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

function showImage(){
    lightboxImg.src = images[currentIndex].src;
}

/* NEXT */
nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

/* PREV */
prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

/* CLOSE */
closeBtn.onclick = () => {
    lightbox.style.display = "none";
}

/* CLICK OUTSIDE */
lightbox.onclick = (e) => {
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
}

/* FILTER */
const buttons = document.querySelectorAll(".btn");
const items = document.querySelectorAll(".gallery img");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        items.forEach(img => {
            if(filter === "all" || img.classList.contains(filter)){
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    });
});