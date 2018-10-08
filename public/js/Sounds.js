var obj = document.createElement("audio");
var obj2 = document.createElement("audio");

$(document).ready(function() {
    //CARGAMOS PISTA
    obj.src = "https://bigsoundbank.com/UPLOAD/mp3/0381.mp3";
    obj.volume = 0.2;
    obj.autoPlay = true;
    obj.preLoad = true;
    obj.controls = false;
    obj.load();

    //CARGAMOS PISTA
    obj2.src = "https://bigsoundbank.com/UPLOAD/mp3/0386.mp3";
    obj2.volume = 0.1;
    obj2.autoPlay = true;
    obj2.preLoad = true;
    obj2.controls = false;
    obj2.load();
    //ÑAPA PARA EL AUDIO

    $('#logo').trigger('click');


    $("h3").mouseenter(function() {
        obj2.play();
        // obj.pause();
    });
});
