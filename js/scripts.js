//business logic//
var arr = []
var num = []

function arrayMaker(numberEntry){
for(var i = 0; i <= numberEntry; i++){
arr.push(i);
}
}
  if (i.toString().includes("1")){
  arr.push("Beep");
}
  else if (i.toString().includes("2")){
  arr.push("Boop");
}
  else if (i.toString().includes("3")){
   arr.push("I'm sorry, Dave. I'm afraid I can't do that.");
 }
  else {
      arr.push(' ' + i);
    }
  return (arr);
}


//user interface logic//
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    console.log("reachedthispoint");
    var input = $("#number-input").val();
    arrayMaker(input);
    console.log(arr);
    $("#output").text(arr);
  });
});

