window.onload = function() {
  function getTweets() {
    return new Promise((resolve, reject) => {
      $.get("data/tweets.json")
        .done(tweets => {
          resolve({ tweets: tweets });
        })
        .fail(() => {
          reject(console.log("Error fetching tweets"));
        });
    });
  }

  function getFriends(data) {
    return new Promise((resolve, reject) => {
      $.get("data/friends.json")
        .done(friends => {
          resolve({ tweets: data.tweets, friends: friends });
        })
        .fail(() => {
          reject(console.log("Error fetching friends"));
        });
    });
  }

  function getVideos(data) {
    return new Promise((resolve, reject) => {
      $.get("data/videos.json")
        .done(videos => {
          resolve({
            tweets: data.tweets,
            friends: data.friends,
            videos: videos
          });
        })
        .fail(() => {
          reject(console.log("Error fetching videos"));
        });
    });
  }

  getTweets().then(data =>
    getFriends(data).then(data =>
      getVideos(data).then(data => console.log(data))
    )
  );
};
