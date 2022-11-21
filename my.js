function changeColor() {
app = document.querySelector("body");

setTimeout(() => {
  app.classList.add("fadein")
    app.classList.add("prim-bg")
}, 2000);

setTimeout(() => {
    app.classList.add("red-bg")
    app.classList.remove("prim-bg")
}, 4000);

setTimeout(() => {
    app.classList.add("blue-bg")
    app.classList.remove("red-bg")
}, 6000);

setTimeout(() => {
    app.classList.add("dark-bg")
    app.classList.remove("blue-bg")
}, 8000);

setTimeout(() => {
    changeColor()
}, 10000);
}
