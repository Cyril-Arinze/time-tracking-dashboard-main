$(window).on("load", function () {

    $(" .timeline>p ").click( function () {
        
        const timeline=$(this);

        $(".timeline>p").removeClass("active");

        timeline.addClass("active")

        $(".user-activity div:last-of-type").fadeOut(700, "easeOutCirc", function () {
            if ( timeline.html()=== "Daily" ) {
                // work
                $(".work h2").html("5hrs")
                $(".work p").html("Yesterday - 7hrs")
                // Play
                $(".play h2").html("1hr")
                $(".play p").html("Yesterday - 2hrs")
                // Study
                $(".study h2").html("0hr")
                $(".study p").html("Yesterday - 1hr")
                // Exercise
                $(".exercise h2").html("1hr")
                $(".exercise p").html("Yesterday - 1hr")
                // Social
                $(".social h2").html("1hr")
                $(".social p").html("Yesterday - 3hrs")
                // Self-care
                $(".self-care h2").html("0hr")
                $(".self-care p").html("Yesterday - 1hr")
    
    
            }else if( timeline.html() === "Weekly" ){
                 // work
                 $(".work h2").html("32hrs")
                 $(".work p").html("Last Week- 36hrs")
                 // Play
                 $(".play h2").html("10hrs")
                 $(".play p").html("Last Week - 8hrs")
                 // Study
                 $(".study h2").html("4hrs")
                 $(".study p").html("Last Week - 7hrs")
                 // Exercise
                 $(".exercise h2").html("4hrs")
                 $(".exercise p").html("Last Week - 5hrs")
                 // Social
                 $(".social h2").html("5hrs")
                 $(".social p").html("Last Week - 10hrs")
                 // Self-care
                 $(".self-care h2").html("2hrs")
                 $(".self-care p").html("Last Week - 2hrs")
            }
            else{
                 // work
                 $(".work h2").html("103hrs")
                 $(".work p").html("Last Month- 128hrs")
                 // Play
                 $(".play h2").html("23hrs")
                 $(".play p").html("Last Month - 29hrs")
                 // Study
                 $(".study h2").html("13hrs")
                 $(".study p").html("Last Month - 19hrs")
                 // Exercise
                 $(".exercise h2").html("11hrs")
                 $(".exercise p").html("Last Month - 18hrs")
                 // Social
                 $(".social h2").html("21hrs")
                 $(".social p").html("Last Month - 23hrs")
                 // Self-care
                 $(".self-care h2").html("7hrs")
                 $(".self-care p").html("Last Month - 11hr")
            }

            $(".user-activity div:last-of-type").fadeIn(700, "easeInCirc" )
    
        })
        
    });
});
