mybutton = document.getElementById("goTop");
window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > document.body.clientHeight ||
    document.documentElement.scrollTop > document.documentElement.clientHeight
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
