const slide = ['2.jpg','3.jpg'];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero > slide.length -1)
    numero = 0;
    if (numero < slide.lengthc -1)
    numero = 0;
   document.getElementById('slide').src = 'img/slider/' + slide [numero];
}

setInterval("ChangeSlide (1)", 4000)
