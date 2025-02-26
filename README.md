# Ranking System

#### System implementation for voting caste

##### Objects && Functions

- **Leaderboard** - A singleton that would encapsulate voters and participants, an algorithms to update the ranking after each vote

- **Voter** - voter can caste vote multiple times giving score from 0 to 100. 50 is default score.

- **Participant** - participant has unique id and total score count.

- **Vote** - It will update the rankings immediately using heapify, It's O(log n) but for now I am logging the ranks after every votes making it O(n), in production there would be separate call for showing ranks.

##### Data Structure & Algorithms used

- For storing ranking, I am creating a priority queue/Max-heap. Participants with higher score would be up in hierarchy.

- Heapify algorithm is used to update the rankings

- Only the last vote would be eligible of a voter.

**_Note: Here I am assuming :-_**

- The voter id and votes are valid and already santizied by previous interface
- All voters and participants would be stored somewhere and persist
