import {
    h as l,
    H as g,
    p as h,
    j as o,
    r as p,
    b as c,
    c as d,
    d as u
} from "./vendor-c58892d2.js";
window.onload = () => {
    const n = document.querySelector("#article"),
        s = l(g);
    s.registerLanguage("php", h),
    s.registerLanguage("javascript", o),
    s.registerLanguage("ruby", p),
    s.registerLanguage("python", c),
    s.registerLanguage("bash", d),
    s.registerLanguage("shell", u),
    s.highlightAll();
    const t = n.getElementsByTagName("pre");
    for (let i in t) 
        if (t[i].tagName === "PRE") {
            let r = t[i].firstChild,
                e = r
                    .innerHTML
                    .split(`
`);
            for (let a in e) 
                e[a].startsWith("+") && (
                    e[a] = '<span class="hljs-addition">' + e[a] + "</span>"
                ),
                e[a].startsWith("-") && (
                    e[a] = '<span class="hljs-deletion">' + e[a] + "</span>"
                );
            r.innerHTML = e.join(`
`)
        }
    };
