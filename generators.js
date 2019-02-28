window.onload = function() {
  //

  //  helper function to console.log
  function logData(promise) {
    promise.then(data => {
      console.log(data);
    });
  }
  // call our generator wrapper
  function* generatorTweeter() {
    yield $.get("data/tweets.json");
    yield $.get("data/friends.json");
    yield $.get("data/videos.json");
  }

  //
  // our generator wrapper function
  gen = generatorTweeter();

  // get to the tweets yield and return
  const tweetsPromise = gen.next().value;
  logData(tweetsPromise);

  // get to the friends yield and return
  const friendsPromise = gen.next().value;
  logData(friendsPromise);

  // get to the friends yield and return
  const videosPromise = gen.next().value;
  logData(videosPromise);

  //  lets wait for all data to come in
  setTimeout(function() {
    console.log("Waiting for all data to come in");
    console.log(gen.next());
  }, 1000);
};
