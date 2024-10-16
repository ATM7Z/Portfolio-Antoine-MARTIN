const e = document.getElementById("header"),
    s = document.getElementById("menu_mobile"),
    t = document.getElementById("btn_open_menu"),
    d = document.getElementById("btn_close_menu");
let l = window.scrollY;
t.addEventListener("click", () => {
    s
        .classList
        .remove("hidden"),
    s
        .classList
        .add("fixed"),
    s
        .classList
        .add("backdrop-blur-lg")
});
d.addEventListener("click", () => {
    s
        .classList
        .remove("fixed"),
    s
        .classList
        .remove("backdrop-blur-lg"),
    s
        .classList
        .add("hidden")
});
window.onscroll = () => {
    l < window.scrollY
        ? (e.classList.remove("translate-y-0"), e.classList.add("-translate-y-full"))
        : (e.classList.remove("-translate-y-full"), e.classList.add("translate-y-0")),
    window.scrollY > 100
        ? e
            .classList
            .add("backdrop-blur-xl", "border-b")
        : e
            .classList
            .remove("backdrop-blur-xl", "border-b")
};
window.onscrollend = () => {
    l = window.scrollY
};
