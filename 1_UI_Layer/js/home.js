/**
 * @author Perron
 */
$(document).ready(function() {
    //$( "#homeNavPanel" ).panel( "close" );
});

function operatePanel() {
    $("#homeNavPanel").panel("toggle");
}

/*
 * initializes the home page
 */
$(document).on('pageshow', '#home', function(event, ui) {
    console.log("Map loaded!");
    if (map == null) {
        initialize();
    }

});