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
                    $('#json-container').prepend('<div class="json-data">' 
                    +'<h2>Title ' + data[i].title + '</h2>' 
                    + '<h2>Body </h2> ' + data[i].body + '</h2>'
                    + '</div>').hide().fadeIn(400);
                // $('#scroll').html('<h1>Title ' + data[i].title + '</h1>').hide().fadeIn(400);
                

                i++;
                }
                while (i < 10);


                // $('#scroll').html('<h1>Success ' + data[0].title + '</h1>').hide().fadeIn(400);
            },
            error : function(request,error)
            {
                alert("Error Request: "+JSON.stringify(request));
            }
        }); 
    });
});