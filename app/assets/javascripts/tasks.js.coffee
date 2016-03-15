jQuery.fn.submitOnCheck = ->
  @find('input:submit').remove()
  @find('input:checkbox').on "click", ->
    $ @
      .parent('form').submit()
  this

jQuery ->
  $ '.edit_task'
    .submitOnCheck()
