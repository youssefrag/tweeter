/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

import * as timeago from 'timeago.js';

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
        <div class='time'>${tweet.created_at}</div>
        <div class='icons'>
          <i class="fas fa-flag icon"></i>
          <i class="fas fa-retweet icon"></i>
          <i class="fas fa-heart icon"></i>
        </div>
      </footer>
    </article>
  `);
}

const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

const $tweet = createTweetElement(tweetData)

console.log(timeago.format(1461116232227))

console.log($tweet)

$(() => {
  $('#tweet-container').append($tweet);
})