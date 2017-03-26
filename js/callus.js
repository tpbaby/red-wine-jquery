  
    $(".callus,.callus1").click(function(){
        $(".alertbg, .alertlogin").slideDown();
        return false;
    })
    
    $(".circles").click(function(){
//        $(".bg, .login").hide(0);
//        $(".bg, .login").css("display", "none");
//        $(".bg, .login").fadeOut();
        $(".alertbg, .alertlogin").slideUp();        
    })
    
    $(".remove").click(function(){
        $(".alertbg, .alertlogin").slideUp();
    })
    
    $(".emailus").click(function(){
         $(".alertbg, .alertlogin").slideUp();
    })