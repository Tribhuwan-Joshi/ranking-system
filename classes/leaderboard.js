const MaxHeap = require('../max-heap');

class Leaderboard {
  constructor() {
    this.voters = new Map(); // {vid: Voter}
    this.participants = new Map(); // {pid: Participant}
    this.votes = new Map(); // {vid: {pid,score}}
    this.maxHeap = new MaxHeap();
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
      this.maxHeap.push(p);
    }
  }

  // As I am using heap, update rankings is O(log n)

  vote(voterId, pid, score) {
    // handle duplicates votes
    if (this.votes.has(voterId)) {
      let pc = this.votes.get(voterId);
      const participant = this.participants.get(pc.pid);
      participant.updateScoreBy(0 - pc.score);
      this.maxHeap.updateScore(pc.pid, participant.score);
    }
    this.votes.set(voterId, { pid, score });
    const participant = this.participants.get(pid);
    participant.updateScoreBy(score);
    this.maxHeap.updateScore(pid, participant.score); // Update heap incrementally

    this.showRanks();
  }
  showRanks() {
    const sortedParticipants = this.maxHeap.toArray();
    console.log('Current Rankings:');
    sortedParticipants.forEach((p, index) => {
      console.log(
        `Rank - ${index + 1}, Participant Id - ${p.id},  Score: ${p.score}`
      );
    });
  }
}

module.exports = Leaderboard; // singleton
