function store() {
  var email = document.getElementById("userName");
  var psse = document.getElementById("pw");
  window.localStorage.setItem("email", email.value);
  window.localStorage.setItem("psse", psse.value);

  console.log(pw);
}
var musicarray = [
  "assets/music1.jpg",
  "assets/music2.jpg",
  "assets/music3.jpg",
  "assets/music4.jpg",
  "assets/music5.jpg",
  "assets/music6.jpg",
  "assets/music7.jpg",
];
var artarray = [
  "assets/art1.jpg",
  "assets/art2.jpg",
  "assets/art3.jpg",
  "assets/art4.jpg",
];
var kidsarray = [
  "assets/kidos1.jpg",
  "assets/kidos2.jpg",
  "assets/kidos3.jpg",
  "assets/kidos4.jpg",
];

var images = document.getElementsByClassName("img");
console.log(images);

function showImages(category) {
  var images = document.querySelectorAll(".img");
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  const categoryImages = document.querySelectorAll(`.${category} .img`);
  for (var i = 0; i < categoryImages.length; i++) {
    categoryImages[i].style.display = "block";
  }
}
function showAllImages() {
  var images = document.querySelectorAll(".img");
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "block";
  }
}

var titles = [
  {
    title: "pearl jam",
    src: "assets/music1.jpg",
  },
  {
    title: "festival jam",
    src: "assets/music2.jpg",
  },
  {
    title: "musiqat",
    src: "assets/music3.jpg",
  },
  {
    title: "musiqat",
    src: "assets/music3.jpg",
  },
  {
    title: "musiqat",
    src: "assets/music3.jpg",
  }, {
    title: "musiqat",
    src: "assets/music3.jpg",
  },
  {
    title: "musiqat",
    src: "assets/music3.jpg",
  },
  {
    title: "musiqat",
    src: "assets/music3.jpg",
  },
  {
    title: "musiqat",
    src: "assets/music3.jpg",
  },
  {
    title: "musiqat",
    src: "assets/music3.jpg",
  },
  {
    title: "musiqat",
    src: "assets/music3.jpg",
  },

];

function searchImages(x) {
  var matchingImages = titles.filter((image) =>
    image.title.toLowerCase().includes(x.toLowerCase())
  );
  return matchingImages;
}

var searchButton = document.querySelector(".button");
var gallery = document.getElementById("gallery");

searchButton.addEventListener("click", function () {
  var searchInput = document.querySelector(".input");
  var x = searchInput.value;
  var matchingImages = searchImages(x);
  gallery.innerHTML = "";

  for (var i = 0; i < matchingImages.length; i++) {
    var image = matchingImages[i];
    var imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = image.title;
    imgElement.classList.add("small-img");
    gallery.appendChild(imgElement);
  }
  gallery.style.display = "block";
  gallery.style.margin = "0 auto";
});
