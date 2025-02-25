const leaderboard = require('./leaderboard');
const Voter = require('./voter');
const Participant = require('./participant');

// use unique id (uuid) in production

const p1 = new Participant(1);
const p2 = new Participant(2);
const p3 = new Participant(3);

const voter1 = new Voter(1);
const voter2 = new Voter(2);
const voter3 = new Voter(3);
const voter4 = new Voter(4);
const voter5 = new Voter(5);

const voters = [voter1, voter2, voter3, voter4, voter5];
const participants = [p1, p2, p3];
leaderboard.addVoters(voters);
leaderboard.addParticipants(participants);

// simulate voting and updating leaderboard -> after each vote latest ranking would be logged

voter1.vote(p1.id, 50);
voter2.vote(p2.id, 40);
voter3.vote(p3.id, 30);
voter4.vote(p1.id, 20);
voter1.vote(p2.id, 10); // this operation will be idempotent
voter5.vote(p3.id, 10);

// if we want to stop the votings and declared winner
leaderboard.stopVoting();
leaderboard.declareWinner();

voter1.vote(p1.id, 50); // this will return log -> Voting ends!
