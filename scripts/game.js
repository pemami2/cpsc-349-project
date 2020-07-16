$(document).ready(function(){
    var game_id = window.location.search.substring(1).split('=')[1];
    
    initialize(game_id);                // Get Searched Game Info
    laod_recommendations(game_id);      // Load Suggestions
    
});

function initialize(game_id) {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.rawg.io/api/games/'.concat(game_id));

    request.onload = () => {
        var data = JSON.parse(request.response);
        // console.log(data.name_original);
        $('#search-game').append(data.name_original);
    };

    request.send();
}

function laod_recommendations(game_id) {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.rawg.io/api/games/[game_id]/suggested?page_size=1'.replace('[game_id]', game_id));

    request.onload = () => {
        var data = JSON.parse(request.response);

        data.results.forEach(game => {
            // console.log(game.name);
            $('#game-art').attr("src", game.background_image);
            $('#game-name').append(game.name);
            $('#game-text').append(game.short_description);
            $('#game-release').append(game.released);
        });
    };

    request.send();
}