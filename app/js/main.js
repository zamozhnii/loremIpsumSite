window.addEventListener('DOMContentLoaded', init);

function init() {
    $('.maincontent__parallax').parallax({ imageSrc: '../img/image.jpg' });

    const d = document,
          html = d.documentElement,
          widthScreen = html.clientWidth;

    const paragraphs = d.querySelector('.maincontent__descr-invitations-wrap'),
          slider = d.querySelector('.maincontent__slider'),
          title = d.querySelectorAll('.maincontent__fotogal-title'),
          pictures = d.querySelectorAll('.maincontent__image');

    function myOpacityBlocks(block) {
        let opacity = 0;
        let id = setInterval(function () {
            if (opacity == 1) {
                clearInterval(id);
            } else {
                opacity += 0.01;
                block.style.opacity = opacity;
            }
        }, 1);
    }

    function myMoveBlocks(block, value, posIncrement) {
        let xPosition = 0;
        let id = setInterval(function () {
            if (xPosition == value) {
                clearInterval(id);
            } else {
                xPosition += posIncrement;
                block.style.transform = 'translateX(' + xPosition + 'px)';
            }
        }, 1);
    }


    if (widthScreen > 1026 && widthScreen < 1921) {

        let k = 0;

        window.addEventListener('scroll', () => {
            const pageY = window.pageYOffset || html.scrollTop;
            if (pageY > 300 && k < 1) {
                $('.maincontent__slider').animate({
                    opacity: 1
                }, 1000);
                myMoveBlocks(paragraphs, 900, 9);
                k += 1;
            }
            if (pageY > 600 && k < 2) {
                $('.maincontent__foto-title').animate({
                    opacity: 1
                }, 1500)
                k += 2;
            }
        });
    }

    /** SLIDER */
    const images = d.querySelectorAll('.slider-image');
    const sliderBtns = d.querySelectorAll('#slider-btn');
    const sliderCircle = d.querySelectorAll('.slider-circle-item');
    const sliderDiv = d.querySelector('.maincontent__slider');
    //let selectedBtn = d.querySelector('#btn-first');
   // let selectedImg = d.querySelector('#img-first');
    
   // sliderBtns.forEach(el => {
        sliderDiv.addEventListener('click', (event) => {
            let target = event.target;            
            if(target.tagName === 'DIV' || target.tagName === 'SPAN') {
                if (target.classList.contains('triangle-right') || target.parentNode.classList.contains('triangle-right')) {
                    for( let i = 0; i < images.length; i++) {
                        if(images[i].classList.contains('active-img')) {
                            let active = images[i];
                            active.classList.remove('active-img');
                            let nextActive = active.nextElementSibling;
                            nextActive.classList.add('active-img');
                            if(nextActive.tagName !== "IMG") {
                                images[images.length-1].classList.remove('active-img');
                                images[0].classList.add('active-img');
                            }
                            if(sliderCircle[i].classList.contains('current-circle')) {
                                let activeBtn = sliderCircle[i];
                                activeBtn.classList.remove('current-circle');
                                let nextActiveBtn = activeBtn.nextElementSibling;
                                if(nextActiveBtn === null) {
                                    sliderCircle[sliderCircle.length-1].classList.remove('current-circle');
                                    sliderCircle[0].classList.add('current-circle');
                                }
                                if(nextActiveBtn !== null)
                                nextActiveBtn.classList.add('current-circle');
                            }
                            break;
                        }
                    }
                }
                if(target.classList.contains('triangle-left') || target.parentNode.classList.contains('triangle-left')) {
                    for( let i = 0; i < images.length; i++) {
                        if(images[i].classList.contains('active-img')) {
                            let active = images[i];
                            active.classList.remove('active-img');
                            let prevActive = active.previousElementSibling;
                            prevActive.classList.add('active-img');
                            if(prevActive.tagName !== "IMG") {
                                images[0].classList.remove('active-img');
                                images[images.length-1].classList.add('active-img');
                            }
                            if(sliderCircle[i].classList.contains('current-circle')) {
                                let activeBtn = sliderCircle[i];
                                activeBtn.classList.remove('current-circle');
                                let prevActiveBtn = activeBtn.previousElementSibling;
                                if(prevActiveBtn === null) {
                                    sliderCircle[0].classList.remove('current-circle');
                                    sliderCircle[sliderCircle.length-1].classList.add('current-circle');
                                }
                                if(prevActiveBtn !== null)
                                prevActiveBtn.classList.add('current-circle');
                            }
                            break;
                        }
                    }
                }
            }
            if(target.tagName === 'LI') {
                for(let l = 0; l < sliderCircle.length; l++) {
                   if(sliderCircle[l].classList.contains('current-circle')) {
                       let selectedBtn = sliderCircle[l];
                        function showBtn(node) {
                            if(selectedBtn) {
                                selectedBtn.classList.remove('current-circle');
                            }
                            selectedBtn = node;
                            selectedBtn.classList.add('current-circle');
                        }
                    }
                }

                for(let im = 0; im < images.length; im++) {
                    if(images[im].classList.contains('active-img')) {   
                        selectedImg = images[im];     
                        function showImg(id) {
                            let rev = d.querySelector('#'+id);
                            if(selectedImg) {
                                selectedImg.classList.remove('active-img');
                            }
                            selectedImg = rev;
                            selectedImg.classList.add('active-img');
                        }
                    }
                }
                let idImg = target.getAttribute('data-number');
                showBtn(target);
                showImg(idImg);
            }
        });
    



    /** ./SLIDER */
}