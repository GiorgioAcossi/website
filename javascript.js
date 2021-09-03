document.addEventListener("DOMContentLoaded", function() {

    // let body = document.querySelector('body');
    // body.classList.toggle('');


    setTimeout(() => {
        load.classList.remove('load');
    }, 200);


    window.addEventListener('scroll', function() {
        var nav = document.getElementById('navbar');
        console.log(nav);
        let windowPosition = window.scrollY > 0;
        nav.classList.toggle('bg-light-dark', windowPosition);
    })

    ScrollReveal().reveal('.reveal_left', { origin: 'left', distance: '20%', duration: 1000, easing: 'cubic-bezier(.215, .61, .355, 1)', interval: 500 });

    ScrollReveal().reveal('.reveal_right', { origin: 'right', distance: '20%', duration: 1000, easing: 'cubic-bezier(.215, .61, .355, 1)', interval: 500 });

    ScrollReveal().reveal('.reveal_buttom', { distance: '20%', duration: 1500, easing: 'cubic-bezier(.215, .61, .355, 1)', interval: 250 });

    ScrollReveal().reveal('.reveal_buttom_speed', { distance: '20%', duration: 1000, easing: 'cubic-bezier(.215, .61, .355, 1)', interval: 100 });

    ScrollReveal().reveal('.reveal', { duration: 2000, easing: 'cubic-bezier(.215, .61, .355, 1)', interval: 500 });



    var nav = document.getElementById('navbar');
    if (nav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#navbar',
            offset: 400,
        });
    };

});