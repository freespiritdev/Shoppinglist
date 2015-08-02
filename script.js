$(document).ready(function() {
  var addItem = function() {
    var toAdd = $('input[name=checkList]').val();
    if(toAdd.length != 0){
        $('.list').append('<li class="item">' + toAdd + '</li>');
        $('.item').sortable();
        status();
        $('input').val("");
        }
        else {
            alert("Cannot be blank!")
        }
    };
  
});