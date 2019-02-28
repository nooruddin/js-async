window.onload = async function() {
  const tweets = await $.get("data/tweets.json");
  console.log(tweets);

  const friends = await $.get("data/friends.json");
  console.log({ tweets: tweets, friends: friends });

  const videos = await $.get("data/videos.json");
  console.log({ tweets: tweets, friends: friends, videos: videos });
};
