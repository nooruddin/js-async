window.onload = function() {
  $.get("data/tweets.json", function(data) {
    console.log(data);
  });
  console.log("I am synchronous");
};
