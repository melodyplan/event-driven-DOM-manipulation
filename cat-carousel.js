$(function() {
  $(".jpg").click(function(event) {
    event.stopPropagation();
    $("h2").img($(this).img());
  });
});