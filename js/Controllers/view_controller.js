class ViewController {
  static displayScore(analyzedText) {
    $("#sentiment").text(analyzedText.snippet)
    $("#sentiment").attr('style','color: ' + analyzedText.color)
    $("#sentiment-score").text(analyzedText.sentiment)
    $("#magnitude-score").text(analyzedText.magnitude)
    $("#twitterfly-photo").css("display", "none")
    $("#results").show()
  }
}