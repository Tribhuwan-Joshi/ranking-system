class Voter {
  constructor(id) {
    this.id = id;
    this.voteData = { voteFor: null, score: 0 };
  }
  vote(participantId, score = 50) {
    this.voteData.voteFor = participantId;
    this.voteData.score = score;
  }
}

module.exports = Voter;
