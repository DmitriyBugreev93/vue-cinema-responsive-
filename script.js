window.onload = function() {
    document.querySelector('.header__burger').onclick = function() {
        document.querySelector('.header__list').classList.toggle('active');
    };

    window.addEventListener('resize', Event => {
        const element = document.querySelector('.header__list');
        const availableScreenWidth = window.screen.availWidth;
        if(availableScreenWidth > 767 && element.classList.contains('active')) {
            element.classList.remove('active');
        };
    });
};
