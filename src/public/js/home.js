var imageSlider = document.querySelectorAll('.image__slider');
var sliderIconLeft = document.querySelector('.slider__icon-left');
var sliderIconRight = document.querySelector('.slider__icon-right');

function slide() {
    setInterval(function() {
        var index = findIndexActive(imageSlider);

        indexCurrent = index + 1;
        if (indexCurrent >= imageSlider.length) { indexCurrent = 0 }
        imageSlider.forEach(function(item, index) {
            if (indexCurrent === index) {
                imageSlider[index].classList.remove('no_active');
            } else {
                imageSlider[index].classList.add('no_active');
            }
        });
    }, 8000);

    sliderIconRight.addEventListener('click', function() {
        var index = findIndexActive(imageSlider);

        indexCurrent = index + 1;
        if (indexCurrent >= imageSlider.length) { indexCurrent = 0 }
        imageSlider.forEach(function(item, index) {
            if (indexCurrent === index) {
                imageSlider[index].classList.remove('no_active');
            } else {
                imageSlider[index].classList.add('no_active');
            }
        })

    });
    sliderIconLeft.addEventListener('click', function() {
        var index = findIndexActive(imageSlider);

        indexCurrent = index - 1;
        if (indexCurrent <= 0) { indexCurrent = 2 }
        imageSlider.forEach(function(item, index) {
            if (indexCurrent === index) {
                imageSlider[index].classList.remove('no_active');
            } else {
                imageSlider[index].classList.add('no_active');
            }
        })

    });

    function findIndexActive(listSlider) {
        var a = imageSlider.length;
        for (let i = 0; i < a; i++) {
            let indexNoActive = listSlider[i].className.includes('no_active');
            if (indexNoActive == false) {
                return i;
            }
        }
    }
}
slide();