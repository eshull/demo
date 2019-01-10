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
    // grid-column: <start-line> / <end-line> | <start-line> / span <value>;
    // grid-row: <start-line> / <end-line> | <start-line> / span <value>;

    //  $( ".card-widget-item" ).first( "div" )
    // .css( {"grid-column-start": "col1-start",
    // "grid-column-end": "span col3-start",
    // "grid-row-start": "row1-start",
    // "grid-row-end": "span 2"} );

    // $( "#fourth-feature div:nth-child(2)" )
    // .css( {"grid-column-start": "0",
    // "grid-column-end": "span col2-start",
    // "grid-row-start": "1",
    // "grid-row-end": "span 2"} );

    // $( "#fourth-feature div:nth-child(3)" )
    // .css( {"grid-column-start": "0",
    // "grid-column-end": "span col2-start",
    // "grid-row-start": "1",
    // "grid-row-end": "span 2"} );

    // $( "#fourth-feature div:nth-child(4)" )
    // .css( {"grid-column-start": "0",
    // "grid-column-end": "span col2-start",
    // "grid-row-start": "1",
    // "grid-row-end": "span 2"} );

    // $( "#fourth-feature div:nth-child(5)" )
    // .css( {"grid-column-start": "0",
    // "grid-column-end": "span col2-start",
    // "grid-row-start": "1",
    // "grid-row-end": "span 2"} );

    // $( ".card-widget-item" ).last( "div" )
    // .css( {"grid-column-start": "0",
    // "grid-column-end": "span col2-start",
    // "grid-row-start": "1",
    // "grid-row-end": "span 2"} );

    

    $( ".card-widget-item" ).first( "div" ).css(  "grid-area", "big1" );
    $( "#fourth-feature div:nth-child(2)" ).css( "grid-area", "small1"  );
    $( "#fourth-feature div:nth-child(3)" ).css( "grid-area", "small2"  );
    $( "#fourth-feature div:nth-child(4)" ).css( "grid-area", "small3" );
    $( "#fourth-feature div:nth-child(5)" ).css( "grid-area", "small4"  );
    $( ".card-widget-item" ).last( "div" ).css( "grid-area", "big2"  );

    // $( ".card-widget-item" ).first( "div" ).css(  {"width": "50%", "position": "absolute", "top": "0px"} );
    // $( "#fourth-feature div:nth-child(2)" ).css( {"width": "25%", "position": "absolute", "top": "0px"}   );
    // $( "#fourth-feature div:nth-child(3)" ).css( {"width": "25%", "position": "absolute", "top": "-183px", "left": "183px"}   );
    // $( "#fourth-feature div:nth-child(4)" ).css( {"width": "25%", "position": "absolute", "top": "0px"}   );
    // $( "#fourth-feature div:nth-child(5)" ).css( {"width": "25%", "position": "absolute", "top": "0px"}   );
    // $( ".card-widget-item" ).last( "div" ).css( {"width": "50%", "position": "absolute", "top": "0px"}   );
    

    // $( "#fourth-feature" ).find("div:nth-child(1)").css("border", "solid black 3px")

    // var top = $( "#fourth-feature:first-child" ).addClass( "yourClass" );

    // function changeImageSize(width) {
    //     var parent = document.getElementById('fourth-feature');
    //     var child = parent.firstChild
    //     console.log(child.className);
        
    //   }

    //   changeImageSize("50%")
    // parent = findele
    // var top = $( "div:first-child" )
    // console.log(top.attr("id"));
    
    
    // insert images 
    var i = 0
    do {
        $( "#fourth-feature div:nth-child(" + i + ")" ).find( ".image-container" ).html("<img src='images/image" + i + ".jpeg'>");
        i++
    } while (i < 7);

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