//business logic//
var beep = function(num){
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
    else if(i = 0 && i % 3 === 0 ){
   arr.push("I'm sorry, Dave. I'm afraid I can't do that.");
 }
    else if( str === "0"){
      arr.push( "Boop!");
    }
    else if( str ==  "1"){
      arr.push("Beep!");
    }

    else {
      arr.push(i);
    }

}
return (arr);
}
//user interface logic//
$(document).ready(function(){
  $("form#formOne").on("submit",function(event){
    event.preventDefault();
    var InPut = $("#beep-boop").val();
    var bop = beep(InPut);
    $("#outPut").text(bop);
  });
});
});
