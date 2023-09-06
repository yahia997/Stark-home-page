var ham = document.getElementById("ham"),
  menu = document.getElementById("menu"),
  hamFirstChild = document.querySelector("#ham .f"),
  hamMidChild = document.querySelector("#ham .m"),
  hamLastChild = document.querySelector("#ham .l");

ham.addEventListener("click", () => {
  hamFirstChild.classList.toggle("rotate-45");
  hamMidChild.classList.toggle("visually-hidden");
  hamLastChild.classList.toggle("rotate--45");
  menu.classList.toggle("open-menu");
  document.body.classList.toggle("overflow-hidden");
  document.querySelector("html").classList.toggle("overflow-hidden");
});
/////////////////////////////////////////////////////////
// change image
var parent = document.getElementById("slider"),
  img = document.getElementById("img");
let childrenArr = Array.from(parent.childNodes);

for (let i = 0; i < childrenArr.length; i++) {
  if (i % 2 !== 0) {
    childrenArr[i].addEventListener("click", () => {
      let path = childrenArr[i].getAttribute("data-img");
      img.src = path;
      childrenArr[1].classList.remove("sel");
      childrenArr[3].classList.remove("sel");
      childrenArr[5].classList.remove("sel");
      childrenArr[7].classList.remove("sel");
      childrenArr[i].classList.add("sel");
    });
  }
}
