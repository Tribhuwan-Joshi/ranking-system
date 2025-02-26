class Participant {
  constructor(id) {
    this.id = id;
    this.score = 0;
  }

  /**
   * @param {number} val
   */
  updateScoreBy(val) {
    this.score += val;
  }
}
module.exports = Participant;
