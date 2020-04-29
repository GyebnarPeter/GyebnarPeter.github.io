let imagesData = [
    {
        photo: "img/pencil.jpg",
        title: "Colored pencils",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        photo: "img/cassette.jpg",
        title: "Old school cassette",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        photo: "img/cat.jpg",
        title: "Cute cat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        photo: "img/chameleon.jpg",
        title: "Chameleon from the jungle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        photo: "img/house.jpg",
        title: "Pretty houses",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        photo: "img/lamp.jpg",
        title: "Lamps in the night",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
];


// FIRST IMAGE
let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
    $("#photo").attr("src", imagesData[photoNumber].photo);
    $("h3").text(imagesData[photoNumber].title);
    $("p").text(imagesData[photoNumber].description);
};

loadPhoto(currentPhoto);

//NEXT IMAGE
$("#right-arrow").click(() => {
    currentPhoto < 6 ? currentPhoto++ : currentPhoto = 0;
    loadPhoto(currentPhoto);
});

//PREVIOUS IMAGE
$("#left-arrow").click(() => {
    currentPhoto > 0 ? currentPhoto-- : currentPhoto = 6;
    loadPhoto(currentPhoto);
});

//THUMBNAILS
let thumbnailsId = 0;
imagesData.forEach((item) => {
    $("#thumbnails-wrapper").append(`<img id="thumbnails${thumbnailsId}">`);
    $("#thumbnails" + thumbnailsId).attr("src", item.photo);
    ++thumbnailsId;
});

$("#thumbnails0").click(() => {
    currentPhoto = 0;
    loadPhoto(currentPhoto);
});

$("#thumbnails1").click(() => {
    currentPhoto = 1;
    loadPhoto(currentPhoto);
});

$("#thumbnails2").click(() => {
    currentPhoto = 2;
    loadPhoto(currentPhoto);
});

$("#thumbnails3").click(() => {
    currentPhoto = 3;
    loadPhoto(currentPhoto);
});

$("#thumbnails4").click(() => {
    currentPhoto = 4;
    loadPhoto(currentPhoto);
});

$("#thumbnails5").click(() => {
    currentPhoto = 5;
    loadPhoto(currentPhoto);
});