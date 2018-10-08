/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */

// -----------
var mouseMoving = 0;
var done = false;
var openTools = false;
var openProject = false

var scroll = 400;



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("#about_container").addClass('about_container_device');
}else{
}

function animate(){
    // HOVER IMAGENES
    $(".image-grid__item")
        .mouseenter(function() {
            // console.log("in");
            $(this).animate({
                marginTop: "0px"
            }, { duration: 300, queue: false }, 'easeOutCirc', function() {});
        })
        .mouseleave(function() {
            //  console.log("out");
            $(this).animate({
                marginTop: "0px"
            }, { duration: 300, queue: false }, 'easeOutCirc', function() {});
        });

  // HOVER MENUS

    var outMenu = false;

    $(".menu")
        .hover(function() {
            outMenu = true;
            $(this).animate({
                opacity: 1
            }, 10, 'easeOutCirc', function() {
                $(this).animate({
                    opacity: 1
                }, 100, 'easeInCirc', function() {
                    $(this).children(".underLine").animate({
                        opacity: 1,
                        width: "90px"
                    }, { duration: 1200, queue: false }, 'easeOutCirc', function() {});
                });
            });
        }, (function() {
            outMenu = false;
            $(this).animate({
                opacity: 1,
                letterSpacing: "1px"
            }, { duration: 300, queue: false }, 'easeOutCirc', function() {})
            $(this).children(".underLine").animate({
                opacity: 0,
                width: "0px"
            }, { duration: 300, queue: false }, 'easeInCirc', function() {});
        }));

    // correccion overouts
    $(document).mousemove((function() {
        //console.log(mouseMoving + "------"+ outMenu);
        mouseMoving++;
        if (!outMenu || mouseMoving >= 100) {
            mouseMoving = 0;
            //console.log("Clear");
            $(".underLine").animate({
                opacity: 0,
                width: "0px"
            }, { duration: 300, queue: false }, 'easeInCirc', function() {});
        }
    }));


    // ABOUT ME

    $("#menu_left").children("h3").click(function() {
        //alert("Handler for .click() called.");
        $("#menu_left").children("h3, div").animate({
            opacity: 0
        }, 300, 'easeOutCubic', function() {
            $("#menu_left").children("h3, div").text("About Tizell");
            $("#menu_left").children("h3, div").animate({
                opacity: 1,
            }, { duration: 2400, queue: false }, 'easeOutCubic', function() {});
        });
        $("#about_container").animate({
            opacity: "1",
            top: "10vh"
        }, 600, 'easeOutExpo', function() {});
        $("#exit").show();
        $("#exit").animate({ // FONDO COLOR
            opacity: "0.7"
        }, 400, 'easeOutCirc', function() {});
    });

    $("#exit").click(function() {
        //alert("Handler for .click() called.");
        $("#about_container").animate({
            opacity: "0",
            top: "500px"
        }, 400, 'easeOutCirc', function() {});
        $("#exit").animate({
            opacity: "0.0"
        }, 400, 'easeOutCirc', function() {
            $("#exit").hide();
        });

        $("#menu_left").children("h3, div").animate({
            opacity: 0
        }, 300, 'easeOutCubic', function() {
            $("#menu_left").children("h3, div").text("?????");
            $("#menu_left").children("h3, div").animate({
                opacity: 1
            }, { duration: 2400, queue: false }, 'easeOutCubic', function() {});
        });
    });

    
    // TOOLS

    $("#menu_top").children("h3").click(function() {
        //alert("Handler for .click() called.");
        var toolTiming = 1800;
        if (done) {
            if (!openTools) {
                $("#menu_top").children("h3, div").animate({
                    opacity: 0
                }, 300, 'easeOutCubic', function() {
                    $("#menu_top").children("h3").text("Close Toolkit");
                    $("#menu_top").children("h3, div").animate({
                        opacity: 1
                    }, { duration: 2400, queue: false }, 'easeOutCubic', function() {});
                });

                $(".image-grid__item").animate({
                    opacity: "0",
                    marginTop: "30px"
                }, toolTiming, 'easeOutCubic', function() {
                    openTools = true;
                });
                $("#logo, #logoDevice").animate({
                    opacity: 0,
                    marginTop: "10px"
                }, toolTiming, 'easeOutCubic', function() {});

                $("#tools").animate({
                    opacity: 1
                }, { duration: 1400, queue: false }, 'easeOutCubic', function() {});
                $(".tools-text ").animate({
                    marginTop: 0
                }, { duration: 1400, queue: false }, 'easeOutCubic', function() {});

            } else {

                $("#menu_top").children("h3, div").animate({
                    opacity: 0
                }, 300, 'easeOutCubic', function() {
                    $("#menu_top").children("h3").text("Open Toolkit");
                    $("#menu_top").children("h3, div").animate({
                        opacity: 1
                    }, { duration: 2400, queue: false }, 'easeOutCubic', function() {});
                });

                $("#logo, #logoDevice").animate({
                    opacity: 1,
                    marginTop: "10px"
                }, 2500, 'easeInCubic', function() {});

                $(".image-grid__item").animate({
                    opacity: "1",
                    marginTop: "0px"
                }, 900, 'easeInCubic', function() {
                    openTools = false;
                });
                $("#tools").animate({
                    opacity: 0
                }, { duration: 600, queue: false }, 'easeOutCubic', function() {});
                $(".tools-text ").animate({
                    marginTop: "10px"
                }, { duration: 600, queue: false }, 'easeOutCubic', function() {});
            }
        }
    });

    // GO TO

    $("#menu_right").children("h3").click(function() {
          location.href = '/';       
    });

}

function menuShow(){

    // CARGA INICIAL
    $(".menu").animate({
        opacity: 1
    }, 3300, 'easeOutCubic', function() {
    });

}


$(window).scroll(function (event) {
        scroll = $(window).scrollTop();
        //console.log(scroll);
        if(scroll<= 5){
            // HACER ALGO ARRIBA
            rMap = Math.random(3, 5);
            touch += 300;
            rAcc += 300;
            //console.log(touch);
            dirRot = Math.random(-1, 1);
        }else{
        }
});


var DarkorLight = $(document.body).attr('class');
var delayDay = 1000;

function Dark_Light(){
    if(DarkorLight == "light_project"){
        $("#project-background").css('height','100vh');
        $("#project-background").animate({
            height: "0vh"
        }, 2500, 'easeOutCubic', function() {})
    }else{
        delayDay = 0;
    }
}

function getImages(){
    $('#project-img_5-container').css('background-image', 'url(' + $('#project-img_5-container').attr("info") + ')');
    $('#project-header-featured_image').css('background-image', 'url(' + $('#project-header-featured_image').attr("info") + ')');
    $('#project-img_01-img0').css('background-image', 'url(' + $('#project-img_01-img0').attr("info") + ')');
    $('#project-img_01-img1').css('background-image', 'url(' + $('#project-img_01-img1').attr("info") + ')');
    $('#project-img_2-container').css('background-image', 'url(' + $('#project-img_2-container').attr("info") + ')');
    $('#project-img_34-img3').css('background-image', 'url(' + $('#project-img_34-img3').attr("info") + ')');
    $('#project-img_34-img4').css('background-image', 'url(' + $('#project-img_34-img4').attr("info") + ')');
    
}

$(document).ready(function() {
    Dark_Light();
    getImages(); 
    setTimeout(function() {
        menuShow();
        animate();
    },delayDay);
});

// --------------------------------------