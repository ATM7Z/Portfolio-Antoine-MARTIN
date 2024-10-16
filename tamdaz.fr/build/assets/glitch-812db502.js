import {s as i} from "./vendor-c58892d2.js";
window.onload = async () => {
    await document
        .querySelector("#raspberry_img")
        .classList
        .add("animate-glitch"),
    await document
        .querySelector("#presentation")
        .classList
        .add("animate-zoom-avatar"),
    i
        .PowerGlitch
        .glitch("#raspberry", {
            timing: {
                duration: 1e3,
                iterations: 1
            },
            glitchTimeSpan: !1,
            shake: {
                amplitudeX: .004,
                amplitudeY: .004
            },
            slice: {
                count: window.innerWidth > 600
                    ? 3
                    : 2,
                velocity: window.innerWidth > 600
                    ? 8
                    : 4,
                minHeight: 2 / 1e3,
                maxHeight: 4 / 1e3,
                hueRotate: !0
            }
        })
};
