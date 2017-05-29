class TextAnalyzer {
  constructor(sentiment, magnitude, twitterHandle) {
    this.sentiment = sentiment
    this.magnitude = magnitude
    this.twitterHandle = twitterHandle
    let res = this.getViewMood()
    this.mood = res[0]
    this.snippet = res[1]
    this.color = res[2]
  }

  getViewMood() {
    let mood, color, snippet = this.twitterHandle

    switch (true) {
      case (this.sentiment > 0.7):
        mood = 'Great'
        snippet += " is doing great"
        color = 'blue'
        break
      case (this.sentiment > 0.3):
        mood = 'Good'
        snippet += " is doing pretty well"
        color = 'green'
        break
      case (this.sentiment >= 0):
        mood = 'Ok'
        snippet += " is doing ok"
        color = 'yellowgreen'
        break
      case (this.sentiment > -0.3):
        mood = 'Poor'
        snippet += " isn't doing that great"
        color = 'orange'
        break
      case (this.sentiment > -0.7):
        mood = 'Bad'
        snippet += " is having a hard time"
        color = 'sienna'
        break
      case (this.sentiment >= -1):
        mood = 'Miserable'
        snippet += " is miserable."
        color = 'red'
        break
      default:
        snippet += " is unclear how they feel"
    }
    return [mood, snippet, color]
  }

}
