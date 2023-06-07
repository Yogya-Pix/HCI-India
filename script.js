$(".alignthree").click(function(){
    $(".topnav").removeClass("navdont");
    $(".topnav").addClass("navshow");
    $(".alignthree").removeClass("alignthreeshow");
    $(".alignthree").addClass("alignthreedont");
    $(".xmark").removeClass("xmarkdont");
    $(".xmark").addClass("xmarkshow");
})

$(".xmark").click(function(){
    $(".topnav").removeClass("navshow");
    $(".topnav").addClass("navdont");
    $(".alignthree").removeClass("alignthreedont");
    $(".alignthree").addClass("alignthreeshow");
    $(".xmark").removeClass("xmarkshow");
    $(".xmark").addClass("xmarkdont");
})