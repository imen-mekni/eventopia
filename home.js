// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length} ;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";
// }


function send(){
  var a=$('input')[1].value
  var b=$('input')[2].value
  var c=$('input')[3].value
  var d=$('input')[4].value
     
   if ((a.length>5)&&(b.length>5)&&(c.length>5)&&(d.length>10)){  
     
      swal("", "YOU message has been send", "success")}  
      else
  {swal("", "you need tu full all the inputs", "warning");}
}



  