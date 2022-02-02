/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const tweetFeedItem = document.getElementsByClassName('tweet-feed-item')
  $(tweetFeedItem).on('mouseenter', function(){
    $('.tweet-feed-item').addClass('shadow')
  })
  $(tweetFeedItem).on('mouseleave', function(){
    $('.tweet-feed-item').removeClass('shadow')
  })
  $('#icon1').on('mouseenter', function(){
    $('#icon1').addClass('icon-hover')
  })
  $('#icon1').on('mouseleave', function(){
    $('#icon1').removeClass('icon-hover')
  })
  $('#icon2').on('mouseenter', function(){
    $('#icon2').addClass('icon-hover')
  })
  $('#icon2').on('mouseleave', function(){
    $('#icon2').removeClass('icon-hover')
  })
  $('#icon3').on('mouseenter', function(){
    $('#icon3').addClass('icon-hover')
  })
  $('#icon3').on('mouseleave', function(){
    $('#icon3').removeClass('icon-hover')
  })
})