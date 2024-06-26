const links = document.querySelectorAll(".py-3");

const main = document.querySelector("#content");
const about = document.querySelector("#about");
const ecommerce = document.querySelector("#ecommerce");
const business = document.querySelector("#business");
const editorial = document.querySelector("#editorial");

const header = document.querySelector(".text-4xl");

document.addEventListener("scroll", function () {
    const headerTop = header.getBoundingClientRect().top;

    if (main.getBoundingClientRect().top <= 0 && business.getBoundingClientRect().top >= headerTop) {
        links.forEach((l) => l.classList.remove("active"));
        links[1].classList.add("active");
    }

    if (business.getBoundingClientRect().top <= headerTop && business.getBoundingClientRect().bottom >= headerTop) {
        links.forEach((l) => l.classList.remove("active"));
        links[2].classList.add("active");
    }

    if (ecommerce.getBoundingClientRect().top <= headerTop) {
        links.forEach((l) => l.classList.remove("active"));
        links[3].classList.add("active");
    }

    if (editorial.getBoundingClientRect().top <= headerTop) {
        links.forEach((l) => l.classList.remove("active"));
        links[4].classList.add("active");
    }

    const sticky = document.querySelectorAll(".sticky");

    sticky.forEach((s) => {
        if (s.getBoundingClientRect().top === 0){
            s.classList.add("line");
        } else {
            s.classList.remove("line");
        }
    });
});