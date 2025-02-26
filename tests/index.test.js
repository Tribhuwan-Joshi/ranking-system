const { describe, it } = require('node:test');
const assert = require('node:assert');
const Leaderboard = require('../classes/leaderboard');
const Voter = require('../classes/voter');
const Participant = require('../classes/participant');

describe('Leaderboard', () => {
  const leaderboard = new Leaderboard();
  const p1 = new Participant(1);
  const p2 = new Participant(2);
  const v1 = new Voter(leaderboard, 1);
  const v2 = new Voter(leaderboard, 2);

  leaderboard.addParticipants([p1, p2]);
  leaderboard.addVoters([v1, v2]);
  it('should add participants and voters correctly', () => {
    assert.strictEqual(leaderboard.participants.size, 2);
    assert.strictEqual(leaderboard.voters.size, 2);
  });
  it('should handle multiple voters and participants correctly', () => {
    v1.vote(p1.id, 50); // Voter 1 votes for participant 1
    v2.vote(p2.id, 70); // Voter 2 votes for participant 2

    assert.strictEqual(p1.score, 50);
    assert.strictEqual(p2.score, 70);
  });
  it('should show correct rankings after votes', () => {
    const rankings = leaderboard.maxHeap.toArray();
    assert.strictEqual(rankings[0].id, 2); // Participant 2 should be first
    assert.strictEqual(rankings[1].id, 1); // Participant 1 should be second
  });
});
