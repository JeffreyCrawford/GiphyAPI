var classList = ["dwarf", "elf", "halfling", "human", "dragonborn", "gnome", "half-elf", "half-orc", "tiefling"];



$(document).ready(function() {

function makeButtons(valText) {
    var classButton = $("<button>");
    classButton.addClass("class-Button")
    classButton.val(valText);
    classButton.text(valText);
    $(".buttons").append(classButton)
}


for (i = 0; i < classList.length; i++) {
    makeButtons(classList[i]);
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


$(document).on("click", "img", function() {

    var state = $(this).attr("data-state");

    if(state === "still") {
        $(this).attr("src", $(this).attr("data-animate"))
        $(this).attr("data-state", "animated") 
    }
    else {
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("data-state", "still")
    }
});


$("form").on("submit", function(event) {

    var valText = $("input:first").val();
    
    classList.push(valText);
    
    makeButtons(valText)

    event.preventDefault();
});


})