const hSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulles');

window.addEventListener('load', () => {
    //pause: true (not necessary)
    const TL = gsap.timeline({ paused: true });

    //For animate elements one by one ".staggerFrom()"
    //".from()" will be for just one element /!\ and ".staggerFrom()" for a group of elements
    TL
        .staggerFrom(hSpans, 1, { top: -50, opacity: 0, ease: 'power2.out' }, 0.3)
        .staggerFrom(btns, 1, { opacity: 0, ease: 'power2.out' }, 0.3, '-=1')
        .from(logo, 1, { transform: 'scale(0)', ease: 'power2.out' }, '-=2')
        .staggerFrom(medias, 1, { right: -200, ease: 'power2.out' }, 0.3, '-=1');

    TL.play();
})