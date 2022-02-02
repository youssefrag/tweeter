$(document).ready(function() {
  const newTweetForm = document.getElementById('new-tweet-form')
  newTweetForm.addEventListener('input', function() {
    let length = $(this).find('#tweet-text').val().length
    $(this).find('.btnAndCount').find('.counter').val(140 - length);
  })
})