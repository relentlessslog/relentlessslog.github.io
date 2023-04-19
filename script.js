function getText(objectKey) {
    const text = objectKey.text;
    for (const value in text) {
        document.querySelector(`.${value}__${objectKey.id}`).textContent = `${text[value]}`;
    }
}

fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        const header = data.header;
        getText(header);

        data.sections.forEach((section) => getText(section));
    })
    .catch((error) => {
        // Handle any errors
        console.error(error);
    });

// Setting the width of the horizontal rule based on the computed width of the subtitle
const subTitle = document.querySelectorAll(".subtitle");
const hr = document.querySelectorAll("hr");

function hrSet(){
    subTitle.forEach((e, i) => {
        hr[i].style.width = e.clientWidth + "px";
    });
}

// Setting the landing image height based on the text-content height
const landingImage = document.querySelector(".image__landing");
const landingText = document.querySelector(".text-container__landing");

function imageHeight(){
    landingImage.style.height = landingText.clientHeight + "px";
}

// Make it responsive on load and screen resize
window.addEventListener("resize", function () {
    hrSet();
    imageHeight();
});

window.addEventListener("load", function(){
    hrSet();
    imageHeight();
})

