"use strict";

let $searchForm = $("#search-form");
let $videoList = $("#video-list");
let $nextBtn = $(".carousel-control-next")
let $prevBtn = $(".carousel-control-prev")

$searchForm.on("submit", function (event) {
    event.preventDefault();
    let query = '?limit=10&entity=musicVideo&term=' + $(this).find("[name='search-term']").val();
    getVideo(query);

});

$nextBtn.on("click", function (event) {
    event.preventDefault();

    let $carousel = $('.carousel');

    $carousel.find('video').trigger('pause');

    setTimeout(() => {
        $carousel.find('.active video').trigger('play');
    }, 5000);
})

$prevBtn.on("click", function (event) {
    event.preventDefault();

    let $carousel = $('.carousel');

    $carousel.find('video').trigger('pause');

    setTimeout(() => {
        $carousel.find('.active video').trigger('play');
    }, 5000);
})

function addVideo(data) {

    data.forEach((videos) => {
        $("<div>").addClass("carousel-item")
            .append(`<video ><source src="${videos.previewUrl}"
            type="video/x-m4v"></video>`)
            .appendTo($videoList);
    });

    $('#video-list div:first').addClass('active');
    
}

function getVideo(query) {
    let url = 'https://itunes.apple.com/search';

    $.ajax({
        url,
        method: "GET",
        data: `q=${query}`
    }).done(function (response) {
        addVideo(JSON.parse(response).results);
        let videos = JSON.parse(response).results;
    }).fail((error) => {
        console.log("error", error);
    });
}
