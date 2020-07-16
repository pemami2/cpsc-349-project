$(document).ready(function(){
    var game_title = window.location.search.substring(1).split('=')[1];
    console.log(game_title);

    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.rawg.io/api/games/'.concat(game_title));

    request.onload = () => {
        var data = JSON.parse(request.response);
        $('#game-art').attr("src", data.background_image);
        $('#game-name').append(data.name_original);
        $('#game-text').append(data.description);
        $('#game-release').append(data.released);

    };

    request.send();
    // (window.location.search.substring(1).split('=')[1]);

    // window.location.search.substring(1).split('=')[1];
});

