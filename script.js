var array = [{ email: "arbi@moussi.com", passe: "12345" }];
// function store() {
//   for(var i=0;i<array.length;i++){
//   if ((array[i]['email']===document.getElementById("userName").value)&& (array[i]['passe']===document.getElementById("pw").value))

//      {window.location="book.html"}
//    else
//    {swal("", "you don't have a compte ", "warning");}
// }}

$("#submit").click(function (event) {
  event.preventDefault();
  for (var i = 0; i < array.length; i++) {
    if (
      document.getElementById("userName").value === array[i]["email"] &&
      document.getElementById("pw").value === array[i]["passe"]
    ) {
      window.location = "http://127.0.0.1:5500/eventlist.html";
    } else {
      swal("Please Sign in up first");
    }
  }
});

function creation() {
  for (var i = 0; i < array.length; i++) {
    if (
      array[i]["email"] != document.getElementById("userName").value &&
      array[i]["passe"] != document.getElementById("pw").value
    ) {
      var obj = {};
      obj.username = document.getElementById("userName").value;
      obj.passe = document.getElementById("pw").value;
      array.push(obj);
      swal("", "WELCOME", "success");
      // alert("you compte created")
    } else if (
      array[i]["email"] === document.getElementById("userName").value &&
      array[i]["passe"] === document.getElementById("pw").value
    ) {
      swal("", "you already have ACCOUNT ", "warning");
    }
  }
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
  var categoryImages = document.querySelectorAll(`.${category} .img`);
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
    title: "ultramusical",
    src: "assets/music4.jpg",
  },
  {
    title: "kids",
    src: "assets/kidos2.jpg",
  },
  {
    title: "art",
    src: "assets/art3.jpg",
  },
  {
    title: "yoga",
    src: "assets/sport3.jpg",
  },
];
function searchImages(x) {
  var matchinim = titles.filter((image) =>
    image.title.toLowerCase().includes(x.toLowerCase())
  );
  return matchinim;
}

var searchButton = document.querySelector(".button");
var gallery = document.getElementById("gallery");

searchButton.addEventListener("click", function () {
  var input = document.querySelector(".input");
  var x = input.value;
  var matchyimages = searchImages(x);
  gallery.innerHTML = "";

  for (var i = 0; i < matchyimages.length; i++) {
    var image = matchyimages[i];
    var imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = image.title;
    imgElement.classList.add("small-img");
    gallery.appendChild(imgElement);
  }
  gallery.style.display = "block";
  gallery.style.margin = "0 auto";
});
