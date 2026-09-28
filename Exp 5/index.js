let images = [
    "images/product 1.jpg",
    "images/product 2.jpg",
    "images/product 3.jpg",
    "images/product 4.jpg"
];

let gallery = document.getElementById("gallery");

images.forEach((image) => {

    let img = document.createElement("img");

    img.src = image;

    gallery.appendChild(img);
});