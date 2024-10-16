const e = document.getElementById("img_profile");
e.addEventListener("mousemove", t => {
    let [s, f] = [
        t.offsetX - e.offsetWidth / 2,
        t.offsetY - e.offsetHeight / 2
    ];
    const o = 15;
    e.style.transform = "rotateX(" + f / o + "deg) rotateY(" + -s / o + "deg)"
});
e.addEventListener("mouseout", () => {
    e.style.transform = "scale(1)"
});
