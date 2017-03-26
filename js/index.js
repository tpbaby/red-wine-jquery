 /*================导航栏li====================*/
    $(function(){
        $(".n_list li").hover(function(){
            $(this).css("background-color","white");
            $(this).css("color","#560b1f");
        });
        $(".n_list li").mouseleave(function(){
            $(this).css("background-color","#560b1f");
            $(this).css("color","white");
        });
    });

/*==============图片轮播代码==================*/
$(function(){
    var time;
	var i = 0; //pic的位置
	var wide = $(".pic").width();
	function setTime(){           
	      time = setInterval(function(){
	        if(i < 3){
	            i++;
                $(".ppt_per").animate({"left": -i*wide + "px"});
                $(".cc").eq(i).addClass("h").siblings(".cc").removeClass("h");
	        }
	        else{
	            i = 0;
                 $(".ppt_per").css("left","0");
                $(".cc").eq(i).addClass("h").siblings(".cc").removeClass("h");
	        }
	       
	     },3000);        
	    }
	
    setTime();
    
    $(".lb_bg").mouseover(function(){
        clearInterval(time);
    });
    
    $(".lb_bg").mouseleave(function(){
        setTime();
    });
    
    $(".left").click(function(){
        
        if(i > 0){
            i--;
        }
        else{
            i = 3;
        }
        $(".ppt_per").animate({"left": -i*wide + "px"});  
        $(".cc").eq(i).addClass("h").siblings(".cc").removeClass("h");
    });
    
    $(".right").click(function(){
    	if(i < 3){
            i++;
        }
        else{
            i = 0;
        }
       
        $(".ppt_per").animate({"left": -i*wide + "px"});
        $(".cc").eq(i).addClass("h").siblings(".cc").removeClass("h");
    });

    $(".cc").click(function(){
        var index_ = $(this).index();
        i = index_;
        $(".ppt_per").animate({"left": -i*wide + "px"});
        $(".cc").eq(i).addClass("h").siblings(".cc").removeClass("h");
        
    });
    
    $(".cc").mouseover(function(){
        var index_ = $(this).index();
        i = index_;
        $(".ppt_per").animate({"left": -i*wide + "px"});
        $(".cc").eq(i).addClass("h").siblings(".cc").removeClass("h");
        
    });
});


/*=================透明度==============*/
/*    window.onload = function(){
        var oDiv = document.getElementsByTagName('div');
        for(var i = 0; i<oDiv.length; i++){
            
            oDiv[i].alpha = 30;
            oDiv[i].onmouseover = function(){
                startMove(this,100);
            }
            oDiv[i].onmouseout = function(){
                startMove(this,30);
            }
        }
    }
    
    
    //只要是多物体运动，不能公用
    //var alpha     = 30;
   // var timer = null;
    function startMove(obj,target){
        clearInterval(obj.timer);
       // obj.alpha = 30;
        obj.timer = setInterval(function(){
            var speed = 0;
            
            if(obj.alpha > target){    //alpha设为本身de
                speed = -10;
            }else{
                speed = 10;
            }
            if(obj.alpha == target){    //alpha设为本身de
                clearInterval(obj.timer);
            }else{
                obj.alpha += speed;   //alpha设为本身de
                obj.style.filter = 'alpha(opacity:'+obj.alpha+')';
                obj.style.opacity = obj.alpha/100;    //这里出错！！！！
            }
        },30);
    }*/