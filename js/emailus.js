var name = document.getElementById("name").value;
    var adda = document.getElementById("adda").firstChild.nodeValue;
    var tel = document.getElementById("tel").value;
    var order = document.getElementById("order").firstChild.nodeValue;
    
    $(".name").focus(function(){
        var test = $(".name").val();
        if(test == "请填写姓名"){
            $(".name").attr("value","");
        }
    })
    
    $("#tel").focus(function(){
        var test = $("#tel").val();
        if(test == "请填写手机号"){
            $("#tel").attr("value","");
        }
    })
    
    $("#adda").focus(function(){
       var test = document.getElementById("adda").value;
       if(test == "请填写地址"){
           document.getElementById("adda").innerText = "";
       }
    })
    
    $("#order").focus(function(){
        var test = document.getElementById("order").firstChild.nodeValue;
        if(test == "请把您所需要的东西写给我们，我们会根据您的需要提供相应的服务。"){
            document.getElementById("order").innerText = "";
        }
    })
   
   

    $(".confirm").click(function(){
        name = document.getElementById("name").value;
        tel = document.getElementById("tel").value;
        adda = $("#adda").val();
        order = $("#order").val();
        /*
        alert(adda);*/
        if(name != "" && adda != "" && tel != "" && order != "" && name != "请填写姓名" && tel != "请填写手机号" && adda != "请填写地址" && order != "请把您所需要的东西写给我们，我们会根据您的需要提供相应的服务。"){
            $(".conbg, .alertconfirm").css("display","block");
            /*alert(0);*/
            var duration = 6000;
            var timer = null;
            var endTime = new Date().getTime() + duration;
            function interval() {
                var n = (endTime - new Date().getTime()) / 1000;
                if (n < 0) return;
                document.getElementById("timeout").innerHTML = n.toFixed(0);
                setTimeout(interval, 10);
            }
            function stopJump() {
                clearTimeout(timer);
                document.getElementById("jumphint").style.display = "none";
            }
            
            //倒计时函数的调用
            timer = setTimeout("window.history.go(-1)", duration);
            interval();
                
            
        }else{
            alert("请将信息填写完整，以便我们交流配送");
        }
    })
    
     $(".backindex").click(function(){
        window.history.go(-1);
    })