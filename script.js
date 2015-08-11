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
    $('#add').click(function() {
        addItem();
    });
  $('input').keypress(function(e){
    if(e.keyCode == '13'){
      e.preventDefault();
      addItem();
    }
  });
  $('#clearAll').mousedown(function() {
    $('.item').remove();
    status(); 
  });
  $('#clearChecked').mousedown(function(){
    $('.checked').remove();
    status();
  });
  var status = function() {
    total = $('.item').length;
    console.log(total);
    done = $('.checked').length;
    console.log(done);
    $('span').html('<span>' + (total-done) + '/' + total + '</span>');
  };
});