//business logic//
var beep = function(num){
var boop = (num);
var arr = [];
for(var i = 0; i <= num; i++){
  console.log(num);
}
  if (i.toString().includes("0")){
  arr.push("Beep");
}

  else if (i.toString().includes("1")){
  arr.push("Boop");
}
  else if (i % 3 === 0){
   arr.push("I'm sorry, Dave. I'm afraid I can't do that.");
 }


    else {
      arr.push(' ' + i);
    }
    return (arr);
}


//user interface logic//
$(document).ready(function(){
  $("form#formOne").on("submit",function(event){
    event.preventDefault();
    var InPut = $("#formOne").val();
    var boop = beep(InPut);
    $("#output").text(boop);
  });
});
