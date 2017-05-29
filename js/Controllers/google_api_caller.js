function googleCall() {
  let twitterHandle = $("#search-field").val()
  $("#results").hide()
  $("#twitterfly-photo").css("display", "block")
  $.ajax({
    url: `http://check-up-on.herokuapp.com/users/${twitterHandle}/get_tweet_text_block`,
    success: (data) => {
      let userPhoto = data.user_photo
      GoogleApi.parseSentiment(data.tweet_text, twitterHandle)
      $("#twitter-photo").attr("src", userPhoto)
      $("#profile").attr("href", data.link)
    },
    error: () => { 
      setNoUserFound(twitterHandle)
      $("#twitterfly-photo").css("display", "none")
    }
  })
}
