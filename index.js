const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});

let slideIndex = 1;

const plusSlides = (n) => {
    slideIndex += n;
    showSlides(slideIndex);
}

const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);

const modal = document.getElementById("myModal");
const openButton = document.getElementById("profile-picture");

// Ketika tombol openButton ditekan
openButton.addEventListener('click', () => {
    modal.style.display = "block";
});

const closeButton = document.getElementById("closeModal");

// Ketika tombol closeButton ditekan
closeButton.addEventListener('click', () => {
    modal.style.display = "none";
});