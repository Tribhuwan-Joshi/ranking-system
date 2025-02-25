class Leaderboard {
  constructor() {
    this.isEnd = false;
    this.voters = [];
    this.participants = [];
    this.rankings = new MaxHeap();
  }

  addVoters(voters) {
    this.voters = voters;
  }

  addParticipants(participants) {
    this.participants = participants;
  }

  vote(voterId, participantId, score = 50) {
    if (!this.isEnd) {
    } else {
      console.log('Voting is closed');
    }
  }

  stopVoting() {
    this.isEnd = true;
  }

  // if no votes has been cast yet, it will return the participants that added first
  declareWinner() {
    if (!this.isEnd) {
      console.log('Voting is not closed');
    } else {
      console.log('The Id of winner is ', this.rankings.top().id);
    }
  }
}

module.exports = new Leaderboard();
