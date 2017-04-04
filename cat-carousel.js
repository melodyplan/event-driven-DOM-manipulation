$(function() {
  $(".img").click(function(event) {
    var photoSrc = $(this).find("img").attr("src");
    $(this).append/*Before*/("<a class='thumbnail'><img src='"+photoSrc+"' /></div>");
});

//not sure if i use .appendBefore to put it on top??