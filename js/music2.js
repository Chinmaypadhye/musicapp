/*function myfunction(evt,typeofview){
var i, tabcontent,links;
tabcontent=document.getElementsByClassName("tabcontent");
console.log(tabcontent)

for(i=0;i<tabcontent.length;i++){
    tabcontent[i].style.display= "none";
}
links=document.getElementsByClassName("links");
for(i=0;i<links.length;i++){
    links[i].className=links[i].className.replace(" active","");
}

document.getElementById(typeofview).style.display= "block";
evt.currentTarget.className += " active";

}*/
$(document).ready(() => {

    // $('#gallery').click(()=> {alert("hiii")})
    

    $("#grid").click(function(){
        $("#grid1").css("display","block");
        $("#gallery1").css("display","none");
        $("#grid").addClass("active");
        $("#gallery").removeClass("active");

        
    })
    $("#gallery").click(function(){
        $("#grid1").css("display","none");
        $("#gallery1").css("display","block");
        $("#gallery").addClass("active");
        $("#grid").removeClass("active");
    })
    $(".close").click(function(){
        $(".modal").css("display","none");
        $(".close").css("display","none");
    })
    $(".imges").click(function(){
        $(".modal").css("display","block");
       // var src=$(this).find("img").attr("src");
        $(".close").css("display","block");
    


        

        $("#img01").attr("src",this.src);

    })
    /*$(".Accordian").click(function(){
        $(this).toggleClass("main");
        var r=$(this).next();
        if($(r).css("display")=="block"){
            $(r).css("display","none")
        }else{
            $(r).css("display","block")
        }
       
       })*/
     /* $("#popup").click(()=>{
        
        if($("#pope").css("display")=="block"){
            $("#pope").css("display","none")
        }else{
            $("#pope").css("display","block")
        }
       })*/
        $(".pop").hover(function(){
           
           let id=`#pope_${this.id}`
          // ele.slideDown(); 
           
           //let id=`#pope_${this.id}`;
           
           $(id).slideDown("0.5s","linear")
       },function(){
        let id=`#pope_${this.id}`;
           
           $(id).slideUp("0.9s","linear");
       });
      /* $("#popup").hover(function(){
           
        $(".pope").slideDown("0.5s","linear")
    },function(){
        
        $(".pope").slideUp("0.9s","linear");
    })*/

   
    // $(".collapse").collapse();
    
    
    

});



