var classList = ["dwarf", "elf", "halfling", "human", "dragonborn", "gnome", "half-elf", "half-orc", "tiefling"];



$(document).ready(function() {

/* CREATES A BUTTON WITH CLASSES TEXT AND VALUE = VALTEXT */
function buttonGeneration(valText) {
    var classButton = $("<button>");
    classButton.addClass("class-Button btn btn-primary btn-lg")
    classButton.val(valText);
    classButton.text(valText);
    $(".buttons").append(classButton)
}


/* INITIAL PAGE LOAD BUTTON CREATION */
for (i = 0; i < classList.length; i++) {
    buttonGeneration(classList[i])
}


/* SUBMIT NEW BUTTON FORM */
$("form").submit( function(event) {

    /* PREVENTS PAGE RELOAD AFTER SUBMIT */
    event.preventDefault();

    /* IF THE TEXT BOX IS EMPTY, DO NOTHING */
    if($("input:first").val() === "") {}

    /* IF TEXT BOX HAS CONTENT, CREATE A BUTTON */
    else {
        /* PUSHES SUBMISSION TO LIST ARRAY */
        classList.push(valText);

        /* CREATES A NEW BUTTON FROM THE SUBMISSION */
        var valText = $("input:first").val();
        buttonGeneration(valText);

        /* EMPTIES THE FORM FIELD */
        $("input:first").val("")
    }
});


/* CLICK EXISTING BUTTON EVENT */
$(document).on("click",".class-Button", function() {

    /* EMPTY ALL EXISTING IMAGES */
    $(".images").empty();

    /* VARIABLES USED FOR GENERATING THE URL */
    /* LIMIT = NUMBER OF RETRIEVED IMAGES */
    limit = "&limit=10";
    /* Q = THE SEARCH TERM AS DEFINED BY THE VALUE OF THE BUTTON */
    q = "q=" + $(this).val() + "&";
    /* THE GENERATED URL USED IN THE FOLLOWING GET REQUEST */
    clickURL = "https://api.giphy.com/v1/gifs/search?" + q + "api_key=dc6zaTOxFJmzC" + limit;
    
    /* GET THE GIFS FROM THE GENERATED URL */
    $.get({
        url: clickURL,
        method: "GET"

    /* ONCE THE GIFS ARE RETRIEVED... */
    }).then(function(result) {
        var result = result.data;

        /* RUN THROUGH THE RETRIEVED IMAGES */
        for (i = 0; i < result.length; i++) {
            /* DEFINE RATING AND URLS FOR ANIMATED/STILL STATES */
            var animated = result[i].images.fixed_height.url;
            var still = result[i].images.fixed_height_still.url; 
            var ratingResult = result[i].rating;

            /*  */
            var imageCard = $("<div class='imageCard'>");
            var rating = $("<p>").text("Rating: " + ratingResult);
                        
            /* CREATE <IMG> TAGS AND ASSIGN ANIMATED/STILL URLS AND STATES */
            var imageDiv = $("<img>")
            imageDiv.attr("src", still);
            imageDiv.attr("data-still", still);
            imageDiv.attr("data-animate", animated);
            imageDiv.attr("data-state", "still");
            
            imageCard.append(imageDiv);
            imageCard.append(rating);


            /* PLACE THE NEW <IMG> TAGS AND RATINGS INTO THE IMAGES DIV */
            $(".images").append(imageCard);

        } 
    })
});


/* PAUSE AND UNPAUSE THE GIFS */
$(document).on("click", "img", function() {

    /* SETS VARIABLE STATE TO THE GIFS CURRENT DATA-STATE */
    var state = $(this).attr("data-state");

    /* IF STATE IS STILL, ANIMATE AND SET STATE TO ANIMATED */
    if(state === "still") {
        $(this).attr("src", $(this).attr("data-animate"))
        $(this).attr("data-state", "animated") 
    }
    /* IF STATE IS ANIMATED, FREEZE AND SET STATE TO STILL */
    else {
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("data-state", "still")
    }
});


})