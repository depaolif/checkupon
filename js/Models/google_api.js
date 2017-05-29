class GoogleApi {

  // sets the request url to the google NL api
  static requestURL() {
    return "https://language.googleapis.com/v1/documents:analyzeSentiment?key=" + google_api_key
  }

  // creates the response body for the request, using text as the content
  static responseBody(text) {
    return {
      "document":{
        "type":"PLAIN_TEXT",
        "content":text
      },
      "encodingType":"UTF8"
    }
  }

  // makes an ajax request to the google api using this.requestURL and this.requestBody
  static parseSentiment(text, twitterHandle) {
    $.ajax({
      url: this.requestURL(),
      contentType: "application/json",
      type: "POST",
      data: JSON.stringify(this.responseBody(text))
    }).then(function(data) {
      let sentiment = data.documentSentiment.score
      let magnitude = data.documentSentiment.magnitude
      let analyzedText = new TextAnalyzer(sentiment, magnitude, twitterHandle)
      ViewController.displayScore(analyzedText)
    })
  }
}
