$(document).ready(() => {
    var ide1;
    var ide2;
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
        $("#audioe").get(0).pause();
        
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
  $("#gallery1,.list1,.gallery1,.gdetails2").css("display","none");
  $(".grid").addClass("active");
  $("#List").removeClass("active");
  $(".gallery").removeClass("active");
  $("#audioe").get(0).pause();
  stopp();
})

    $(".gallery").click(function(){
        $(".stard").attr("src","");
        $(".video-display").css("display","none");
        
        $(".grid-2,.music-player,.list1").css("display","none");
        $("#grid1").css("display","none");
        $("#gallery1,.gallery1,.gdetails,.gdetails2").css("display","block");
        $(".gallery").addClass("active");
        $(".grid").removeClass("active");
        $("#List").removeClass("active");
        $(".details").css("display","none");
        $("#track2").html($(".flipster__item--current").children().find("video").attr("data-track"));
        $("#artist2").html($(".flipster__item--current").children().find("video").attr("data-artist"));
        $("#gener2").html($(".flipster__item--current").children().find("video").attr("data-gener"));
        $("#size2").html($(".flipster__item--current").children().find("video").attr("data-size"));
        $("#length2").html($(".flipster__item--current").children().find("video").attr("data-length"))
        rate= $(".flipster__item--current").children().find("video").attr("data-rate");
         var i;
           for(i=0;i<rate;i++){
               var t= `#111${i}`;
               
               $(t).attr("src","./image/star.png");
               
           }

        
})
$(".audioo").click(function(){
    stopp();
})
    let videodetails1;
    let videodetails2;
    let videodetails3;
    let videodetails4;
    let videodetails5;

    let selectedVideo=null;
    $(".galvid").click(function(){
    
    $(".stard").attr("src","");;    
    videodetails1= $(this).attr("data-track");
    videodetails2= $(this).attr("data-artist");
    videodetails3= $(this).attr("data-gener");
    videodetails4= $(this).attr("data-size");
    videodetails5= $(this).attr("data-length");
    var rate= $(this).attr("data-rate");
    $("#track2").html(videodetails1);
    $("#artist2").html(videodetails2);
    $("#gener2").html(videodetails3);
    $("#size2").html(videodetails4);
    $("#length2").html(videodetails5);
    console.log(selectedVideo)
    var i;
           for(i=0;i<rate;i++){
               var t= `#111${i}`;
               
               $(t).attr("src","./image/star.png");
               
           }
    
    
    if(!selectedVideo){
        selectedVideo=this;
        
    }
    else {
        $(selectedVideo).get(0).pause();
        selectedVideo.load();
        selectedVideo=this;
    }
 })
 $(".flipster__button").click(function(){
    $(".stard").attr("src","");
   
    $("#track2").html($(".flipster__item--current").children().find("video").attr("data-track"));
    $("#artist2").html($(".flipster__item--current").children().find("video").attr("data-artist"));
    $("#gener2").html($(".flipster__item--current").children().find("video").attr("data-gener"));
    $("#size2").html($(".flipster__item--current").children().find("video").attr("data-size"));
    $("#length2").html($(".flipster__item--current").children().find("video").attr("data-length"))
    var rate= $(".flipster__item--current").children().find("video").attr("data-rate");
    var i;
      for(i=0;i<rate;i++){
          var t= `#111${i}`;
          
          $(t).attr("src","./image/star.png");
          
      }


    if(selectedVideo){
        $(selectedVideo).get(0).pause();
        selectedVideo.load();

    }
    
})

    


   

    
    $(".galsong").click(function(){
        $(".stard").attr("src","");
        var myid=`./music/music_${this.id}.mp3`;
        $("#audioe").attr("src",myid);
        var gimggg= `./image/msc_${this.id}.jpg`;
        $(".gimage").css("display","block");
        $("#galim").attr("src",gimggg);
        var iddd= `#${this.id}`;
           $("#track1").html($(iddd).attr("data-track"));
           $("#artist1").html($(iddd).attr("data-artist"));
           $("#gener1").html($(iddd).attr("data-gener"));
           $("#size1").html($(iddd).attr("data-size"));
           $("#length1").html($(iddd).attr("data-Length"));
           $("#staree").css("display","block");
           $(".gdetail").css("display","block");
           $("#Ratings").css("display","block");
           var rate= $(iddd).data("rate");
           
           var i;
           for(i=0;i<rate;i++){
               var t= `#11${i}`;
               
               $(t).attr("src","./image/star.png");
               
           }

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
})
})