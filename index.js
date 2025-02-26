const leaderboard = require('./leaderboard');
const Voter = require('./voter');
const Participant = require('./participant');

// create voters -> new Voter(id), use uuid in production
const v1 = new Voter(1);
const v2 = new Voter(2);
const v3 = new Voter(3);
const v4 = new Voter(4);
const v5 = new Voter(5);

// create participants
const p1 = new Participant(1);
const p2 = new Participant(2);
const p3 = new Participant(3);

leaderboard.addVoters([v1, v2, v3, v4, v5]);
leaderboard.addParticipants([p1, p2, p3]);

// After every vote the ranking will be logged

v1.vote(p1.id, 89);
v2.vote(p2.id, 23);
v1.vote(p3.id, 43); // voted again, only last vote is eligible to count
// v3.vote(p2.id, 32);
// v4.vote(p1.id, 88);
// v5.vote(p3.id, 32);a
