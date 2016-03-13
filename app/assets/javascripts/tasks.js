jQuery.fn.submitOnCheck = function () {
  this.find('input:submit').remove();
  this.find('input:checkbox').on("click", function () {
    $(this).parent('form').submit();
    return this;
  });
}

$( function () {
  $('.edit_task').submitOnCheck();
} )
