window.onload = function() {
  $.ajax({
    type: "GET",
    url: "data/tweets.json",
    success: function(data) {
      //  got first load of tweets data
      console.log(data);
      // now grab friends data
      $.ajax({
        type: "GET",
        url: "data/friends.json",
        success: function(data) {
          //  got second load of friends data
          console.log(data);
          //  now grab videos data
          $.ajax({
            type: "GET",
            url: "data/videos.json",
            success: function(data) {
              console.log(data);
            },
            error: function(jqXHR, textStatus, error) {
              console.log(error);
            }
          });
        },
        error: function(jqXHR, textStatus, error) {
          console.log(error);
        }
      });
    },
    error: function(jqXHR, textStatus, error) {
      console.log(error);
    }
  });
};
