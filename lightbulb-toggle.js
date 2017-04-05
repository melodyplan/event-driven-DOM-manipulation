$(function() {
  $( "js-lightbulb" ).click(function(bulbOn) {
    //something that gets the lightbulb to turn on
    //var bulbOn = 
    );
  });
  
$( "js-lightbulb" ).on(
  "click change", // Bind handlers for multiple events
  function(bulbOff) {
    //someting that sets all the light bulbs to off
    //( "lightbulb" ).off( "click" ); //?
);
    
var bulbOn = function() { 
  ( "js-lightbulb" ).on( "click" ); 
};
var bulbOff = function() { 
  (" js-lightbulb" ).off( "click" ); 
};
 
$( " js-lightbulb " ).on( "click", /*something about the LB magically turning on*/ );
$( " js-lightbulb " ).off( "click", /*something about the other LBs staying off*/ ); 

/*  
$( "lightbulb" ).on( "click", function(event) {
  this.remove();
  });
});
*/

/*i could also use an if and else right? like, ```if``` one
one light is on all other lights are off? wait, that doesn't
really work because i don't really have an else to go along.
if one light is one, all other lights must be off, and that's
always, and constantly toggled, so no if-else statement.

i just don't know how to make the light go on and off*/   