class Participant {
  constructor(id, score = 0) {
    this.id = id;
    this.score = score;
  }

  get score() {
    return this.score;
  }

  updateScoreBy(score) {
    this.score += score;
    return this;
  }
}

module.exports = Participant;
