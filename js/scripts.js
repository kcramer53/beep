$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
var beep = function(num){
var arr = [];
for(var i = 0; i <= num; i++){
  console.log(num);
var str = i.toString();
}

if(i = 0 && i % 3 === 0 ){
   arr.push("I'm sorry, Dave. I'm afraid I can't do that.");
 }
    else if( str === "0"){
      arr.push( "Boop!");
    }
    else if( str ==  "1"){
      arr.push("Beep!");
    }

    else{
      arr.push(i);
    }

}
return (arr);

});
$(document).ready(function(){
  $("#formOne").on("submit",function(event){

    var InPut = $("#beep-boop").val();
    event.preventDefault();

    var bop = beep(InPut);
    $("#outPut").text(bop);
  });
});
});
