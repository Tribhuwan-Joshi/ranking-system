class Leaderboard {
  constructor() {
    this.voters = new Map(); // {vid: Voter}
    this.participants = new Map(); // {pid: Participant}
    this.votes = new Map(); // {vid: {pid,score}}
  }

  // you can add a single voter/participant too but should pass it inside array

  addVoters(voters) {
    for (let v of voters) {
      this.voters.set(v.id, v);
    }
  }
  addParticipants(participants) {
    for (let p of participants) {
      this.participants.set(p.id, p);
    }
  }

  vote(voterId, pid, score) {
    // handle more than duplicates votes
    if (this.votes.has(voterId)) {
      let pc = this.votes.get(voterId);
      const participant = this.participants.get(pc.pid);
      participant.updateScoreBy(0 - pc.score);

      this.votes.set(voterId, { pid, score });
      this.participants.get(pid).updateScoreBy(score);
    } else {
      this.votes.set(voterId, { pid, score });
      this.participants.get(pid).updateScoreBy(score);
    }

    showRanks();
  }
}

module.exports = new Leaderboard(); // singleton
