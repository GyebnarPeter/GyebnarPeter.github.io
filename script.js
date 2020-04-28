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
        title: "Lamp in the night",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
];

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
    $("#photo").attr("src", imagesData[photoNumber].photo);
};

loadPhoto(currentPhoto);

$("#right-arrow").click(() => {
    if (currentPhoto < 6) {
        currentPhoto++;
    } else if (currentPhoto === 6) {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
});

$("#left-arrow").click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
    } else if (currentPhoto === 0) {
        currentPhoto = 6;
    }
    loadPhoto(currentPhoto);
});

imagesData.forEach((item) => {
    $("#thumbnails-wrapper").append(`<img class="thumbnails">`);
    $(".thumbnails").attr("src", item.photo);
});