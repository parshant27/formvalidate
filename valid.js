$(document).ready(function() {
 
  $('#first').submit(function(e) {
    e.preventDefault();
    var user_name = $('#name').val();
    var password = $('#pass').val();
 
    $(".error").remove();
 
    if (user_name.length < 1) {
      $('#name').after('<span class=" error ">This field is required</span>');
    }
   
    
    // } else {
    //   // var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    //   // var validEmail = regEx.test(email);
    //   // if (!validEmail) {
    //     // $('#email').after('<span class="error">Enter a valid email</span>');
    //   }
    // }
      if (password.length < 8) {
      $('#pass').after('<span class="error">Password must be at least 8 characters long</span>');
    }


    else{
      var pass_regex =/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;

      var ValidPass = pass_regex.test(password);
      if(!ValidPass) {
        $('#pass').after('<span class="error">Enter a valid combination password(a-zA-Z0-9_)</span>');
      }

      else if(ValidPass==1 && user_name.length>1)

    {
      // $("#pass").removeClass(".error");
      // alert("thank you");
      
//       $("#snoAlertBox").fadeIn();
//    closeSnoAlertBox();


//         function closeSnoAlertBox(){
//         window.setTimeout(function () {
//         $("#snoAlertBox").fadeOut(300)
// }, 3000);
// } 
       alert("gugu");
        
    }
    
    }

    


  });
 
});
