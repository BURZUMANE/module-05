let sliderImages = document.querySelectorAll('.slide');
let arrowRight = document.querySelector('#arrowRight');
let arrowLeft = document.querySelector('#arrowLeft');
let current  = 0;

// SLIDER RESET
function reset(){
    for(let i=0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

// SLIDER INIT
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

startSlide();

// PREV
function slideLeft(){
    reset();
    sliderImages[current -1].style.display = 'block';
    current--;
}
// NEXT
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// LEFT ARROW CLICK
arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

// RIGHT ARROW CLICK
arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});



startSlide();