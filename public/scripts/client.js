/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// import * as timeago from 'timeago.js';

$(() => {
  const createTweetElement =  (tweet) => {
  return (`
    <article class='tweet-feed-item'>
      <div class='name-username'>
          <div class='name-picture'>
            <img
              class='user-img'
              src=${tweet.user.avatars}
            />
            <div class="name">${tweet.user.name}</div>
          </div>
          <div>${tweet.user.handle}</div>
        </div>
      <div class='tweet-content'>${tweet.content.text}</div>
      <footer class='properties'>
        <div class='time'>${timeago.format(tweet.created_at)}</div>
        <div class='icons'>
          <i class="fas fa-flag icon"></i>
          <i class="fas fa-retweet icon"></i>
          <i class="fas fa-heart icon"></i>
        </div>
      </footer>
    </article>
  `);
  }

  $('#new-tweet-form').on('submit', (evt) => {
    evt.preventDefault();
    const param = $('#new-tweet-form').serialize()
    if ($('.counter').val() == 140) {
      alert('Cannot post empty tweet')
    } else if ($('.counter').val() < 0) {
      alert('Exceeded character limit')
    } else {
      $.post('/tweets', param).then(() => {
        $.ajax('/tweets', { method: 'GET'}).then((results) => {
          const lastTweetAdded = results[results.length - 1]
          const $lastTweetAdded = createTweetElement(lastTweetAdded)
          $('#tweet-container').append($lastTweetAdded);
        })
      })
    }
  })

  const renederTweets = function(tweets) {
    for (tweet of tweets) {
      const $tweet = createTweetElement(tweet)
      $('#tweet-container').append($tweet);
    }
  }

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET'}).then((results) => {
      renederTweets(results)
    })
  }
  loadTweets();
})
