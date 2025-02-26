const Voter = require('./voter');
const Participant = require('./participant');
const Leaderboard = require('./leaderboard');

const leaderboard = new Leaderboard();

// create voters -> new Voter(leaderboard,id), use uuid in production -> leaderboard to connect to
const v1 = new Voter(leaderboard, 1);
const v2 = new Voter(leaderboard, 2);
const v3 = new Voter(leaderboard, 3);
const v4 = new Voter(leaderboard, 4);
const v5 = new Voter(leaderboard, 5);

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
