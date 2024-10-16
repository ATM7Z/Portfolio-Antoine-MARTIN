const u = document.querySelector("#hi"),
    d = document.querySelector("#title"),
    n = document.querySelector("#name"),
    s = document.querySelector("#desc");
d && l(d, 8, 30);
u && l(u, 8, 30);
n && (n.style.visibility = "hidden", setTimeout(() => {
    n && (n.style.visibility = "visible", l(n, 10, 30))
}, 500));
s && (s.style.visibility = "hidden", setTimeout(() => {
    s && (s.style.visibility = "visible", l(s, 10, 30))
}, 1e3));
function l(t, e = 4, f = 8) {
    const [y, c] = [t.innerText, t.innerText.length];
    let o = 0;
    for (t.textContent = ""; o < c + e * 2;) {
        let r = [];
        for (let i = -e; i <= o + e; i++) 
            i >= o - e + 1
                ? r[i - e] = String.fromCodePoint(m(32, 126))
                : r[i] = y[i];
        setTimeout(() => {
            t.textContent = r
                .splice(0, c)
                .join("")
        }, f * o),
        o++
    }
}
function m(t, e) {
    return Math.floor(Math.random() * (e - t) + t)
}
