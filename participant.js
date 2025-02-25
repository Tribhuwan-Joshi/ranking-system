class Participant {
  #score;
  constructor(id) {
    this.id = id;
    this.#score = 0;
  }
  get score() {
    return this.#score;
  }
}
module.exports = Participant;
