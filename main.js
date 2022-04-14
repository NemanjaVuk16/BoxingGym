    function menu() {
        const menuBtn = document.querySelector('.menu-btn');
        const navigationOpen = document.querySelector('.navigation');
        let menuOpen = false;
        menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen= true;
            navigationOpen.classList.add('open');
        }else{
            menuBtn.classList.remove('open');
            menuOpen= false;
            navigationOpen.classList.remove('open');
        }
    });
    }
     
    

    function sticky() {
        
        
        var header = document.querySelector('.header');
        window.addEventListener('scroll', function() {
            var scroll = window.pageYOffset;
            if(scroll > 0) {
                header.classList.add('header-sticky');
            }else {
                header.classList.remove('header-sticky');
            }
        })

    }
    menu();
    sticky();