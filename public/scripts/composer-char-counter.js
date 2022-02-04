$(document).ready(function() {
  const newTweetForm = document.getElementById('new-tweet-form');
  newTweetForm.addEventListener('input', function() {
    let length = $(this).find('#tweet-text').val().length;
    $(this).find('.btnAndCount').find('.counter').val(140 - length);
    if ($(".counter").val() < 0) {
      $('.counter').addClass('too-long');
    } else {
      $('.counter').removeClass('too-long');
    }
  });
});