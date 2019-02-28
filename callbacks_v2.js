window.onload = function() {
  function handleError(jqXHR, textStatus, error) {
    console.log({ error: error, textStatus: textStatus, jqXHR: jqXHR });
  }
  $.ajax({
    type: "GET",
    url: "data/tweets.json",
    success: callBackTweets,
    error: handleError
  });

  function callBackTweets(data) {
    //  got first load of tweets data
    console.log(data);
    // now grab friends data
    $.ajax({
      type: "GET",
      url: "data/friends.json",
      success: callBackFriends,
      error: handleError
    });
  }

  function callBackFriends(data) {
    //  got second load of friends data
    console.log(data);
    //  now grab videos data
    $.ajax({
      type: "GET",
      url: "data/videos.json",
      success: function(data) {
        console.log(data);
      },
      error: handleError
    });
  }
};
