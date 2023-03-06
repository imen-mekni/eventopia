function store(){
        var email = document.getElementById('userName');
        var psse = document.getElementById('pw');
         window.localStorage.setItem('email', email.value);
         window.localStorage.setItem('psse', psse.value);
        
        console.log(pw)
        };
        var musicarray = ['assets/music1.jpg', 'assets/music2.jpg', 'assets/music3.jpg', 'assets/music4.jpg', 'assets/music5.jpg', 'assets/music6.jpg', 'assets/music7.jpg'];
        var artarray = ['assets/art1.jpg', 'assets/art2.jpg', 'assets/art3.jpg', 'assets/art4.jpg'];
        var kidsarray = ['assets/kidos1.jpg', 'assets/kidos2.jpg', 'assets/kidos3.jpg', 'assets/kidos4.jpg'];
    
        var images = document.getElementsByClassName('img');
        console.log(images);
        
        function filterImages(category) {
          images = document.getElementsByClassName('img');
          for (var i = 0; i < images.length; i++) {
            if (images[i].classList.contains(category)) {
              images[i].style.display = "block";
            } else {
              images[i].style.display = "none";
            }
          }
        }
        
        console.log(images);
        document.getElementById('art').addEventListener('click', function() {
          filterImages(s);
        });
      
        