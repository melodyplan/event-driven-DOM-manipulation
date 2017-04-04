//console.log("HELLO");
/*$(function() {
  $(".img").click(function(event) {
    var photoSrc = $(this).find("img").attr("src");
    $(this).appendBefore("<a class='thumbnail'><img src='"+photoSrc+"' /></div>");
});*/

$(function() {
  $(".thumbnail").click(function(event) {
    var photoSrc = $(this).find("img").attr("src");
    var bigImage = "<div class='big-img-cont'><img src='"+photoSrc+"' /></div>"
    $(this).append(bigImage);
  });
});

//struggling.