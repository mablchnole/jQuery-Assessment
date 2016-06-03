// global variable
var buttonClicks = 0;
var colorArray = ['yellow', 'red'];

$(function(){
  // create generateButton on DOM
  $('#generateButton').on('click', function(){
    buttonClicks++;
    console.log('generateButton clicked');

    // create a newDiv container onto the DOM
    var newDiv = document.createElement('div');
    // set a class name to the div container
    newDiv.className = 'container';

    // create delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.className = 'deleteButton';
    // append deleteButton to the container newDiv
    newDiv.appendChild(deleteButton);

    // create change button
    var changeButton = document.createElement('button');
    changeButton.textContent = 'change';
    changeButton.className = 'changeButton';
    // append changeButton to the container newDiv
    newDiv.appendChild(changeButton);

    // create a new paragraph tag
    var newParagraph = document.createElement('p');
    // append newParagraph to the container
    newDiv.appendChild(newParagraph);

    // append the container newDiv to the DOM body
    $('body').append(newDiv);
    // set the buttonClick counter to appear inside paragraphs
    $('p').text(buttonClicks);
  });

  // function to toggle the background color of the parent container from yellow to red
  $(document).on('click', '.changeButton', function(){
    console.log('changeButton clicked');
    // change the background color
    $(this).parent().toggleClass('red');
  });

  // function to delete the parent container of the deleteButton
  $(document).on('click', '.deleteButton', function(){
    // remove the parent container
    $(this).parent().remove();
  });
});
