var classList = ["dwarf", "elf", "halfling", "human", "dragonborn", "gnome", "half-elf", "half-orc", "tiefling"];





$(document).ready(function() {

/* CYCLE THROUGH LIST AND CREATE/APPEND BUTTONS */
for (i = 0; i < classList.length; i++) {
    var classButton = $("<button>");
    classButton.addClass("class-Button")
    classButton.val(classList[i]);
    classButton.text(classList[i]);
    $(".buttons").append(classButton)
}

$(".class-Button").on("click", function() {
    limit = "&limit=10";
    q = "q=" + $(this).val() + "&";
    clickURL = "https://api.giphy.com/v1/gifs/search?" + q + "api_key=dc6zaTOxFJmzC" + limit;
    $.get({
        url: clickURL,
        method: "GET"
    }).then(function(result) {
        var result = result.data;
        console.log(result);
        $(".images").empty();
        for (i = 0; i < result.length; i++) {
            var animated = result[i].images.fixed_height.url;
            var still = result[i].images.fixed_height_still.url; 
            
            var imageDiv = $("<img>")
            imageDiv.attr("src", still);
            imageDiv.attr("data-still", still);
            imageDiv.attr("data-animate", animated);
            imageDiv.attr("data-state", "still");
            imageDiv.addClass("class-Image");

            $(".images").append(imageDiv);
        } 
    })
});


$(document).on("click", "image.", function() {
    console.log(
        $(this).attr("src"),
        $(this).attr("data-state"),
        $(this.dataset),
    )
    var animated = $(this).attr("data-animate");
    var still = $(this).attr("data-still");

    var state = $(this).attr("data-state");

    if(state === "still") {
        $(this).attr("src", $(this).attr("data-animate"))
        $(this).attr("src", animated);
        
    }
    else {
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("src", still)
    }

    console.log(animated)
});


})