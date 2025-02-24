class Leaderboard {
  constructor(voters = [], participants = []) {
    this.votes = new Map();  // voterId: {participantID:number, score: number}
    this.participants = [];
    this.ranks = [];
  }

  showRanks() {
    this.ranks.forEach((p, i) => {
      console.log(`Rank - ${i + 1} ParticipantId - ${p.id} Score - ${p.score}`);
    });

    vote(voterId, participantsId){
        const previousVote = this.votes.get(voterId);
        if(previousVote){
            // remove that score from the participants
            const prevParticipant = previousVote.participantId;
            const prevScore = previousVote.score;
        }
    }
  }
}
