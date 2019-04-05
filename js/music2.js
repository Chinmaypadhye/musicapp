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
    //  $(document).on('click','#gallery',() =>{
    //     $("#gallery1").css("display","block")
    //     $("#grid1").css("display","none")
    //  })
});
