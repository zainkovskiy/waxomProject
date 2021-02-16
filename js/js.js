'use strict';

let vd = document.querySelector('.waxom_video');
let but = document.querySelector('.waxom_video_btn');
let wrp = document.querySelector('.waxom_video_wrp');

but.addEventListener('click', () => {
    if (vd.pause) {
        vd.play();
        vd.setAttribute("controls", "controls");
    } else {
        vd.pause();
    }
}, false)

vd.addEventListener('play', function () {
    wrp.classList.remove('waxom_video_wrp');
    wrp.classList.add('waxom_video_wrp_hide');
    vd.classList.remove('waxom_video');
    vd.classList.add('waxom_video_play');
}, false);

vd.addEventListener('pause', function () {
    wrp.classList.remove('waxom_video_wrp_hide');
    wrp.classList.add('waxom_video_wrp');
    vd.classList.remove('waxom_video_play');
    vd.classList.add('waxom_video');
}, false);