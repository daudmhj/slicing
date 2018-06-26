
$(window).load(function() {

    setTimeout(function() {
        $(".left-part").css("left", "0").addClass("fadeInLeft").removeClass("fadeOutLeft");
        $(".middle-part").css("left", "50vw").addClass("fadeInRight").removeClass("fadeOutRight");
        $("#firefly-wrap").addClass("").removeClass("opacity-0");
    }, 2400);

    
    setTimeout(function() {
        $(".loading").addClass("fadeOut");
    }, 3600);

    
    setTimeout(function() {
        $('.digit').each(function(i) {
            (function(self) {
                setTimeout(function() {
                    $(self).addClass('fadeInDown').removeClass("opacity-0");
                }, (i * 150) + 150);
            })(this);
        });
    }, 3200);

    
    setTimeout(function() {
        $(".text-day").addClass("fadeInRight").removeClass("opacity-0");
        $("#chevron-mobile").addClass("bounce").removeClass("opacity-0");
    }, 4050);

    
    setTimeout(function() {
        $(".countdown-block h2").addClass("fadeInUp").removeClass("opacity-0");
    }, 4200);

    
    setTimeout(function() {
        $("#alert-button-1").addClass("fadeInUp").removeClass("opacity-0");
        $(".social-icons").addClass("fadeInDown").removeClass("opacity-0");
        $(".loading").addClass("display-none");
    }, 4700);

    
    setTimeout(function() {
        $("#alert-button-1").addClass("shake").removeClass("fadeInUp");
        $("#chevron-mobile").addClass("fadeOutDown").removeClass("bounce");
    }, 5900);

    setTimeout(function() {
        $("#alert-button-1").addClass("").removeClass("shake");
        $("#chevron-mobile").addClass("display-none").removeClass("fadeOutDown");
    }, 7100);

});


$(document).ready(function($) {

    $('#countdown_dashboard').countDown({
        targetDate: {
            'day': 3,
            'month': 04,
            'year': 2017,
            'hour': 11,
            'min': 13,
            'sec': 0
        },
        omitWeeks: true
    });


    $('button.open-left-part').on('click', function() {

        var onMobile = false;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            onMobile = true;
        }

        if ((onMobile === false)) {

            $(".part-1").addClass('fadeInLeft').removeClass("fadeOutLeft").css("left", "0");

        } else {

            $(".part-1").addClass('').removeClass("fadeOutLeft").css("left", "0");

        }

        if ($(window).width() <= 1024) {
            $(".social-icons").addClass("fadeOutUp").removeClass("fadeInDown");
            $('html, body').animate({
                scrollTop: $(".left-part").offset().top
            }, 700);
        }

        setTimeout(function() {
            $("button.close-left-part").css("left", "0");
            $("button.close-left-part").addClass("fadeInLeft").removeClass("fadeOutLeft").css("left", "0");
        }, 850);

        setTimeout(function() {
            $("button.close-left-part i").addClass("bounceInDown");
        }, 1200);

        setTimeout(function() {
            $("button.close-left-part i").addClass("flash").removeClass("bounceInDown");
        }, 2401);

    });

    // Close left-part popup
    $('button.open-left-part2').on('click', function() {

        var onMobile = false;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            onMobile = true;
        }

        if ((onMobile === false)) {

            $(".part-2").addClass('fadeInLeft').removeClass("fadeOutLeft").css("left", "0");

        } else {

            $(".part-2").addClass('').removeClass("fadeOutLeft").css("left", "0");

        }

        if ($(window).width() <= 1024) {
            $(".social-icons").addClass("fadeOutUp").removeClass("fadeInDown");
            $('html, body').animate({
                scrollTop: $(".left-part").offset().top
            }, 700);
        }

        setTimeout(function() {
            $("button.close-left-part").css("left", "0");
            $("button.close-left-part").addClass("fadeInLeft").removeClass("fadeOutLeft").css("left", "0");
        }, 850);

        setTimeout(function() {
            $("button.close-left-part i").addClass("bounceInDown");
        }, 1200);

        setTimeout(function() {
            $("button.close-left-part i").addClass("flash").removeClass("bounceInDown");
        }, 2401);

    });
    // end of close popup 
    
    $('button.close-left-part').on('click', function() {
        $(".part-1").addClass('fadeOutLeft').removeClass("fadeInLeft");
        $("button.close-left-part").addClass("fadeOutLeft").removeClass("fadeInLeft");
        $("button.close-left-part i").removeClass("flash");
        if ($(window).width() <= 1024) {
            $(".social-icons").addClass("fadeInDown").removeClass("fadeOutUp");
        }
        setTimeout(function() {
            $("button.close-left-part").css("left", "-100px");
            $(".part-1").css("left", "-50vw");   

            $('.item-plus').animate({
                scrollTop: $(".left-part").offset().top
            }, 0);
        }, 800);
    });

    $(".middle-part").hover(
        function() {
            $('#alert-button-1').toggleClass('shake');
        }
    );

    $('#alert-button-1').click(function() {
        if ($(window).width() >= 1025) {

            $('.list-sections').addClass('left-50');
            $("#alert-button-1").addClass("bounceOutRight").removeClass("bounceInLeft");
            $(".part-1").addClass('fadeOutLeft').removeClass("fadeInLeft");
            $("button.close-left-part").addClass("fadeOutLeft").removeClass("fadeInLeft");
            $("button.close-left-part i").removeClass("rotateIn");

            setTimeout(function() {
                $("#alert-button-1").addClass("display-none").removeClass("");
                $("#alert-button-2").addClass("fadeIn").removeClass("display-none");
            }, 500);

            setTimeout(function() {
                $("button.close-left-part").css("left", "-100px");
                $(".part-1").css("left", "-50vw");
            }, 800);

        } else if ($(window).width() <= 1024) {
            $('html, body').animate({
                scrollTop: $(".right-part").offset().top
            }, 700);
        }

    });

    $('#alert-button-2').click(function() {
        $('.list-sections').removeClass('left-50');
        $("#alert-button-2").addClass("fadeOut").removeClass("fadeIn");
        setTimeout(function() {
            $("#alert-button-1").addClass("bounceInLeft").removeClass("bounceOutRight display-none");
            $("#alert-button-2").addClass("display-none").removeClass("fadeOut");
        }, 500);
        setTimeout(function() {
            $("#alert-button-1").addClass("").removeClass("bounceInLeft");
        }, 1750);
    });

    $('#locate-us').click(function() {
        $(".left-part").addClass("fadeOutLeft").removeClass("fadeInLeft");
        $(".middle-part").addClass("fadeOutRight").removeClass("fadeInRight");
        $(".social-icons").addClass("fadeOutUp").removeClass("fadeInDown");
        $(".overlay-map").addClass("display-none").removeClass("");
        $("#wrapper_mbYTP_bgndVideo").addClass("animated-middle fadeOut").removeClass("fadeIn");
        $("#backstretch-cloud").addClass("fadeOut").removeClass("fadeIn");
        $("#cloudy").addClass("fadeOut").removeClass("fadeIn");
        setTimeout(function() {
            $("button.close-map").addClass("fadeInLeft").removeClass("fadeOutLeft").css("left", "0");
        }, 850);
        setTimeout(function() {
            $("button.close-map i").addClass("bounceInDown");
            $("#wrapper_mbYTP_bgndVideo").addClass("index-9999").removeClass("fadeOut");
            $("#backstretch-cloud").addClass("index-9999").removeClass("fadeOut");
            $("#cloudy").addClass("index-9999").removeClass("fadeOut");
        }, 1200);
        setTimeout(function() {
            $("button.close-map i").addClass("flash").removeClass("bounceInDown");
        }, 2401);
        setTimeout(function() {
            $("#map-container").css("z-index", "8");
            $(".left-part").css("left", "-50vw");
            $(".middle-part").css("left", "100vw");
            $(".social-icons").addClass("display-none").removeClass("");
        }, 1000);
    });

    $('button.close-map').on('click', function() {
        $(".left-part").css("left", "0").addClass("fadeInLeft").removeClass("fadeOutLeft");
        $(".middle-part").css("left", "50vw").addClass("fadeInRight").removeClass("fadeOutRight");
        $(".social-icons").addClass("fadeInDown").removeClass("fadeOutUp display-none");
        $("button.close-map").addClass("fadeOutLeft").removeClass("fadeInLeft");
        $("button.close-map i").removeClass("flash");
        $("#map-container").css("z-index", "-10");
        $("#wrapper_mbYTP_bgndVideo").addClass("fadeIn").removeClass("index-9999");
        $("#backstretch-cloud").addClass("fadeIn").removeClass("index-9999");
        $("#cloudy").addClass("fadeIn").removeClass("index-9999");
        setTimeout(function() {
            $("button.close-map").css("left", "-100px");
        }, 800);
        setTimeout(function() {
            $(".overlay-map").addClass("").removeClass("display-none");
        }, 1250);
    });


    $("#notifyMe").notifyMe();


    $('.venobox').venobox({
        border: '1px',             
        bgcolor: '#000',         
        titleattr: 'data-title', 
        numeratio: true,         
        infinigall: true         
    });

    $("#firstlink").venobox().trigger('click');

});

google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', init);

function init() {

    var center = new google.maps.LatLng(-7.2782380,112.7924587);

    var mapOptions = {

        zoom: 16,
        scrollwheel: false,
        draggable: false,
        center: center,

        styles: [{
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 33
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2e5d4"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c5dac6"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c5c6c6"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e4d7c6"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fbfaf7"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#acbcc9"
            }]
        }]
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions, center);
    
    var locations = [
        ['<h6>Sekretariat HMSI</h6><p>Departemen Sistem Informasi<br><i class="fa fa-home"></i> Lets meet</p>', -7.2782380,112.7924587,20.25],
    ];

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}