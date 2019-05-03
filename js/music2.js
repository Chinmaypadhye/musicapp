$(document).ready(() => {
 
    function stopped(){
        
        $("#audd").get(0).pause();
    }
    function stopp(){
        $("#song").get(0).pause();
    }

    $("#List").click(function(){
        $(this).addClass("active");
        $(".grid").removeClass("active");
        $(".gallery").removeClass("active");
        $(".music-player").css("display","none");
        $(".grid-2").css("display","none");
        $(".gallery1,.details").css("display","none");
        $(".list1").css("display","block");
        function alterclass(){
            var wwww = document.body.clientWidth;
            
        if (wwww < 995){
            
            $(".musssics").addClass(" table-responsive");
        }else{
        
            $(".musssics").removeClass(" table-responsive");
        }
    }
    $(window).resize(function(){
        alterclass();
    })
    alterclass();
    stopped();
    })
    
        
  
        
        
    



 $(".grid").click(function(){
  $(".details").css("display","block");
  $(".video-display").css("display","block");
  $(".grid-2,.music-player").css("display","block");
  $("#grid1").css("display","block");
  $("#gallery1,.list1").css("display","none");
  $(".grid").addClass("active");
  $("#List").removeClass("active");
  $(".gallery").removeClass("active");
  
  })

    $(".gallery").click(function(){
        $(".video-display").css("display","none");
        $(".grid-2,.music-player,.list1").css("display","none");
        $("#grid1").css("display","none");
        $("#gallery1").css("display","block");
        $(".gallery").addClass("active");
        $(".grid").removeClass("active");
        $("#List").removeClass("active");
        $(".details").css("display","none");
    })
    $(".audioo").click( ()=>{
        stopped();
    }
    )
    $(".videoo").click(()=>{
        $("#videoes").get(0).pause();

    })

    $(".close").click(function(){
        $(".modal").css("display","none");
        $(".close").css("display","none");
    })
    $(".imges").click(function(){
        $(".modal").css("display","block");
        $(".close").css("display","block");
        $("#img01").attr("src",this.src);
       })
       $(".pop").hover(function(){
           
           let id=`#pope_${this.id}`
          
           
           $(id).slideDown("0.5s","linear")
       },function(){
        let id=`#pope_${this.id}`;
           
           $(id).slideUp("0.9s","linear");
       });

       $(".bor").click(function(){
           $(".stars").removeAttr("src");
           
           var o= `./videos/video_${this.id}.mp4`;
           var z= `./music/music_${this.id}.mp3`;
           $("#audd").attr("src",z);
           
           $("#videoes").attr("src",o);
           var f= `#${this.id}`;
           
           $(f).css("box-shadow","0 0 5px white");
           var noclicked= $(".bor").not(this);
           $(noclicked).css("box-shadow","none");
           var h= `./image/vid_${this.id}.jpg`;
           var a= `./image/msc_${this.id}.jpg`;
           $("#imgee").attr("src",a);
           $("#imgee").css({"width":"100%","height":"100%"});
 
           $("#imgo").attr("src",h);
           $("#imgo").css({"width":"100%","height":"100%"});
           var artists= $(f).attr("data-Artist");
           var geners= $(f).attr("data-Gener");
           var sizes= $(f).attr("data-size");
           var lengths= $(f).attr("data-Length");
           var tracks= $(f).attr("data-track");
           $("#track").html(tracks);
           $("#artist").html(artists);
           $("#gener").html(geners);
           $("#size").html(sizes);
           $("#length").html(lengths);
           $(".detail_1").css("background-color","#151314");
           $("#Rating").css("display","block");
           $("#stare").css("display","block");
           var rate= $(f).data('rate');
           var i;
           for(i=0;i<rate;i++){
               var t= `#1${i}`;
               $(t).attr("src","./image/star.png");
           }
})
    function myFunction(x){ 
       if (x.matches)
       {
           $("#videoes").attr("width","300px");
           $("#videoes").attr("height","200px");
           
       }else{
        $("#videoes").attr("width","556px");
        $("#videoes").attr("height","300px");
        
       }
    };
    var x= window.matchMedia('(max-width: 1024px)');
    myFunction(x);
    window.addEventListener('resize',function(){
    myFunction(x);
   })

   let state=null;
   let prev;
$(".sung").click(function(){
    var zz= `./music/music_${this.id}.mp3`
    $(this).css("box-shadow","0 0 3px white");
    $("#song").attr("src",zz);
    var g=$(".sung").not(this);
    


    if(prev!=this.id){
        
        $(g).children(".status").text("play");
        state= null;
        }
    prev=this.id;

    $(g).css("box-shadow","none");
    var c=$(this).children(".status");
    
    $(c).text("stop");
    var d=$(c).text();
    

    
    if(state =="play"){
        state="stop";
        $(c).text("play");
        $("#song").get(0).pause();

    }
    else if (state =="stop"){
        state="play";
        $(c).text("stop");
        //$("#song").get(0).play();

    }
    else if(state ==null) {
        state="play"

        $(c).text("stop");
        $("#song").get(0).play();
    }
  


    // if (d=="play"){
    //     $(c).text("");
    //     $(c).text("Stop");
        
        

    // }else{
    //     d=$(c).text("Play");
    //     $("#song").get(0).pause();
        
    // }
    

})
})