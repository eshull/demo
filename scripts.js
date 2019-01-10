$(document).ready(function() {
    console.log("Script ran");

    // owl carousel function
    $(".owl-carousel").owlCarousel({
        items: 1,
        singleItem: true
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
                console.log(data);           
                // alert('Success Data: '+data);
                // scrollDiv.html( $(data).find('#json-container')).hide().fadeIn(400); 

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