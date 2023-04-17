const subTitle = document.querySelectorAll(".subtitle");
const hr = document.querySelectorAll("hr");

subTitle.forEach( (e, i) => {
   hr[i].style.width = e.clientWidth + "px";
})
