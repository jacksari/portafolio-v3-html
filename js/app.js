const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
const navBtn1 = document.getElementById("nav-toggle-sidebar");
// add event listener
navBtn.addEventListener("click", () => {
    console.log('123')
    links.classList.toggle("sidebar-active");
});
navBtn1.addEventListener("click", () => {
    console.log('1234')
    links.classList.toggle("sidebar-active");
});
