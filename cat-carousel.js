/*$(function() {
  $(".img").click(function(event) {
    var photoSrc = $(this).find("img").attr("src");
    $(this).appendBefore("<a class='thumbnail'><img src='"+photoSrc+"' /></div>");
});*/

$(function() {
  $(".img").click(function(event) {
    event.stopPropagation();
    var photoSrc = $(this).find("img").attr("src");
    $(this).append("<div class='big-img-cont'><img src='"+photoSrc+"' /></div>");
  });
});

//struggling.