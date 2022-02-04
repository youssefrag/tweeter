/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// import * as timeago from 'timeago.js';

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

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
        <div class='tweet-content'>${escape(tweet.content.text)}</div>
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
  };

  const emptyTweet = () => {
    return (`
      <div class="error"><i class="error-icon fas fa-exclamation-triangle"></i>Cannot submit empty tweet.<i class="error-icon fas fa-exclamation-triangle"></i></div>
    `);
  };

  const tooLongTweet = () => {
    return(`
      <div class="error"><i class="error-icon fas fa-exclamation-triangle"></i>Characted limit exceeded<i class="error-icon fas fa-exclamation-triangle"></i></div>
    `);
  };

  $('#new-tweet-form').on('submit', (evt) => {
    evt.preventDefault();
    const param = $('#new-tweet-form').serialize();
    if (Number($('.counter').val()) === 140) {
      $('#error-messages').empty();
      $('#error-messages').append(emptyTweet()).slideDown("slow");
      
    } else if ($('.counter').val() < 0) {
      $('#error-messages').empty();
      $('#error-messages').append(tooLongTweet()).slideDown("slow");
    } else {
      $('#error-messages').empty();
      $.post('/tweets', param).then(() => {
        $.ajax('/tweets', { method: 'GET'}).then((results) => {
          // console.log(results);
          const lastTweetAdded = results[results.length - 1];
          // console.log(lastTweetAdded)
          const $lastTweetAdded = createTweetElement;(lastTweetAdded)
          console.log($lastTweetAdded)
          $('#tweet-container').append($lastTweetAdded);
        });
      });
    }
    // $("#new-tweet-form").reset();
    document.getElementById("new-tweet-form").reset();
  });

  const renederTweets = function(tweets) {
    for (tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').append($tweet);
    }
  }

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET'}).then((results) => {
      renederTweets(results);
    })
  }
  loadTweets();
})
