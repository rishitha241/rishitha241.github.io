
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  if(window.scrollY > 50) {
    header.style.background = "#ff66b2";
  } else {
    header.style.background = "#ff99cc";
  }
});
