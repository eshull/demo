$(document).ready(function() {
    console.log("Script ran");

    // owl carousel function
    $(".owl-carousel").owlCarousel({
        items: 1,
        singleItem: true,
        nav: true
    });

    // Search hover
    $("#search").hover(function(){
        $('#form').animate({width: "70px"});
        }, function(){
        $('#form').animate({width: "0px"});
    });

    // header change on scroll 
    window.onscroll = function() {navChange()};

    var header = document.getElementById("nav");
    var sticky = header.offsetTop;

    function navChange() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    
    // layout for fourth feature

    $( ".card-widget-item" ).first( "div" ).css( { "grid-area": "big1", "background-image": "url(images/image1.jpeg)", "background-size": "contain", "box-shadow": "0 0 0 5px #0083c0" });
    $( "#fourth-feature div:nth-child(2)" ).css( {"grid-area": "small1", "background-image": "url(images/image2.jpeg)", "background-size": "contain", "box-shadow": "0 0 0 5px #0083c0"} );
    $( "#fourth-feature div:nth-child(3)" ).css( {"grid-area": "small2", "background-image": "url(images/image3.jpeg)", "background-size": "contain", "box-shadow": "0 0 0 5px #0083c0"});
    $( "#fourth-feature div:nth-child(4)" ).css( {"grid-area": "small3", "background-image": "url(images/image4.jpeg)", "background-size": "contain", "box-shadow": "0 0 0 5px #0083c0"} );
    $( "#fourth-feature div:nth-child(5)" ).css( {"grid-area": "small4", "background-image": "url(images/image5.jpeg)", "background-size": "contain", "box-shadow": "0 0 0 5px #0083c0"} );
    $( ".card-widget-item" ).last( "div" ).css( {"grid-area": "big2", "background-image": "url(images/image6.jpeg)", "background-size": "contain", "box-shadow": "0 0 0 5px #0083c0"} );

    // insert images as placeholders
    var i = 0
    do {
         i++
         $('#fourth-feature div:nth-child(' + i + ') div div').after("<img src='images/image" + i + ".jpeg' style='visibility: hidden;'>");
    } while (i < 7);

    // on hover for images

    $("#fourth-feature p").hide();
    $("#fourth-feature a").hide();
    $( "<div class='color'></div>" ).appendTo( ".card-content" );

      $(".card-widget-item").hover(function(){
        $(this).find(".color").addClass("overlay");
        $(this).find(".card-content").css({"height": "100%", "flex-display": "column" });
        $(this).find("p").show()
        $(this).find("a").show()
        $(this).find("span").hide()
        }, function(){
        $(this).find(".color").removeClass("overlay");
        $(this).find(".card-content").css({"height": "150%", "flex-display": "column-reverse" });
        $(this).find("p").hide()
        $(this).find("a").hide()
        $(this).find("span").show()
      });

    // ajax call

    $('#scroll').on('click', function(e) {
        e.preventDefault();
        var url = 'https://jsonplaceholder.typicode.com/posts'
        var scrollDiv = $('#scroll');

        $.ajax({
            url : url,
            type : 'GET',
            timeout: 2000,
            beforeSend: function() {
                scrollDiv.append('<div id="loading">Loading...</div>');
            },
            complete: function() {
                $('#loading').remove();
            },
            success : function(data) {  

                var i = 0;
                do {
                    var titleText = data[i].title
                    var bodyText = data[i].body
                    titleText = titleText.replace(/\b\w/g, l => l.toUpperCase());
                    bodyText = bodyText.charAt(0).toUpperCase() + bodyText.substr(1);
                    
                    if (titleText.length > 50) {
                        titleText = titleText.substring(0, 50) + '...';
                        };

                    if (bodyText.length > 125) {
                        bodyText = bodyText.substring(0, 125) + '...';
                    };

                    $('#json-container').prepend('<div class="events-content">'
                    + '<img id="content-image" src="images/json' + [i] + '.png" alt="events image" width="80px" height="80px">'
                    + '<h4 class="json-title">' + titleText + '</h4>' 
                    + '<p class="json-body">' + bodyText + '</p>'
                    + '</div>').hide().fadeIn(400);
                i++;
                }
                while (i < 10);
            },
            error : function(request,error)
            {
                alert("Error Request: "+JSON.stringify(request));
            }
        }); 
    });
});