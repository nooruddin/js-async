window.onload = function() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    console.log(http);
    if (http.readyState == 4 && http.status == 200) {
      console.log(JSON.parse(http.response));
    }
  };
  //    set last argument to false to make it synchronous
  //    tweet data will be printed first if it's synchronous
  //    It will give warning that synchronous XMLHttpRequest is discouraged.
  http.open("GET", "data/tweets.json", true);
  http.send();
  // this should be consoled first while async ajax request is processing
  console.log("I am synchronous");
};

/**
 * ready states
 * 0 - request not initialized
 * 1 - request is setup
 * 2 - request sent
 * 3 - request processing
 * 4 -request complete
 */
