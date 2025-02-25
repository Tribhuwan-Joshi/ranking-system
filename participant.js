class Participant {
  constructor(id) {
    this.id = id;
    this.score = 0;
  }
  addScore(points) {
    this.score += points;
  }

  deductScore(points) {
    this.score -= points;
  }
}

module.exports = Participant;
