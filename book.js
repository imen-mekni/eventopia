function book(){
    var a=$('input')[0].value
    var b=$('input')[1].value
    var c=$('input')[2].value
    var d=$('input')[3].value
       
     if ((a.length>5)&&(b.length>5)&&(c.length>5)&&(d.length>5)){  
       
        swal("", "YOUR ticket has been booked", "success")}  
        else
    {swal("", "you need tu full all the inputs", "warning");}
  }


  function search(){
      var s=$('input')[0].value
      if (s==='Arts') {} 
  }