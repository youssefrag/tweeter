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

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const renederTweets = function(tweets) {
    for (tweet of tweets) {
      const $tweet = createTweetElement(tweet)
      $('#tweet-container').append($tweet);
    }
  }
  renederTweets(data)
})
