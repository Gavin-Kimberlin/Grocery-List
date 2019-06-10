$(document).ready(function () {
  var items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
  var itemArray = [];
  console.log('jquery is enabled');

  $('.btn').click(function (event) {
    event.preventDefault();

    items.forEach(function (input) {
      var itemValue = $('#' + input).val().toUpperCase();
      itemArray.push(itemValue);
      itemArray.sort();
      console.log(itemArray);
    }); //for each loop
    itemArray.forEach(function (toList) {
      $('ul#grocery-list').append('<li>' + toList + '</li>');
    });
    $('#grocery-list').show();
    $('form.lists').hide();
  }); //click event
}); //jquery


  // $('#grocery-input').submit(function (event) {
  //   event.preventDefault();
  //   var groceryInputs = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
  //
  //
  //   groceryInputs.forEach(function (input) {
  //
  //     var userInput = $('input#' + input).val();
  //     groceryInputs.push(userInput);
  //   });
  //   console.log(groceryItems);
  //   event.preventDefault();
  // });
