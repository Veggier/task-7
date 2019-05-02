$('.button').on("click",function(){
    var input= $('#input').val();
    if(!input){
        alert('enter the text');
        return;
    }
        $('#tasks').append(input);
    //alert("we've got a number")
   // $('#result').html("we've got a number");
 });