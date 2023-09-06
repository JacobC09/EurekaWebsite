// 
// Navigation Underline Anmation
// 

const underline = document.querySelector(".underline");
const links = document.querySelectorAll(".nav-middle > a");
const ul = document.querySelector(".nav-middle");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", changeNavUnderline);
}

function changeNavUnderline() {
    for (let i = 0; i < links.length; i++) {
        links[i].style.opacity = "0.25";
    }

    this.style.opacity = "1";

    const width = this.getBoundingClientRect().width;
    const height = this.getBoundingClientRect().height;
    const left = this.getBoundingClientRect().left;
    const top = this.getBoundingClientRect().top;
    underline.style.width = `${width}px`;
    underline.style.height = `${height}px`;
    underline.style.left = `${left}px`;
    underline.style.top = `${top}px`;
    underline.style.transform = "none";
}

function navUnderlineNotActive() {
    underline.style.width = '0px';
    for (let i = 0; i < links.length; i++) {
        links[i].style.opacity = "1";
    }
}

window.addEventListener("resize", navUnderlineNotActive, updateNavBg);
ul.addEventListener("mouseleave", navUnderlineNotActive);

// 
// Navigation Background Change
// 

const navOpaqueBg = getComputedStyle(document.body).getPropertyValue("--main-bg-color");
const mainHeader = document.getElementById("header");
const mainNav = document.getElementById("main-nav")

function updateNavBg() {
    const isTransparent = mainHeader.getBoundingClientRect().bottom > 0;
    mainNav.style.backgroundColor = isTransparent ? "transparent" : navOpaqueBg;
}

// 
// Navigation Hide On Scroll
// 

var lastScrollY = 0;

window.addEventListener("scroll", (e) => {
    updateNavBg();

    if (lastScrollY > window.scrollY)
        mainNav.classList.remove("nav-hidden");

    lastScrollY = window.scrollY;
});

window.addEventListener("wheel", (e) => {
    if (e.wheelDeltaY < 0) {
        mainNav.classList.add("nav-hidden");
    } else {
        mainNav.classList.remove("nav-hidden");
    }
});



// 
// Faq Question Animations
// 

const questions = document.querySelectorAll(".question");

function toggleQuestion() {
    const isOpen = this.dataset.open;

    for (i = 0; i < questions.length; i++) {
        questions[i].dataset.open = false;
    }

    if (isOpen !== "true") {
        this.dataset.open = true;
    }
}

questions.forEach(q => q.addEventListener('click', toggleQuestion));

// 
// Scroll To Element
// 

function scrollToElement(identifier) {
    const element = document.getElementById(identifier);
    window.scrollTo(0, element.offsetTop - mainNav.offsetHeight * 1.5);
}
