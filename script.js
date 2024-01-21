$( document ).ready(function() {

    let video = document.querySelector('video'); 
    // Set the default playing speed 
    video.defaultPlaybackRate = 1.0;  
    video.load(); 
     
    // boxed
    $("#checkBoxed").on("click", function(){
        var boxed = $(this).is(":checked");
        if(boxed){
        //do it
        }
        else{
        // do other thing
        }
    }); 

    // header
    $("#checkHeader").on("change", function(){
        var e = $(this).is(":checked");
        if(e){
        //append header
        }
        else{
        //remove header
        }
    });
});