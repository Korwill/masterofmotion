
var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbz7AAUOyvqzEYVLsFiEaOsSASZeMqzyQUQ0Wun08t35aArBWyY/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
