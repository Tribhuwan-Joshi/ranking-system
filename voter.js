const leaderboard = require('./leaderboard');

class Voter {
  constructor(id) {
    this.id = id;
  }

  vote(pid, score) {
    if (score < 1 || score > 100)
      throw new Error('Voter can give score between 1 to 100 only.');
    leaderboard.vote(this.id, pid, score); // vote-> voterid, pid, score
  }
}

module.exports = Voter;
