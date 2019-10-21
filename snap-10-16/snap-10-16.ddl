CREATE TABLE IF NOT EXISTS task (
	taskId BINARY(20) NOT NULL,
	taskTitle VARCHAR(255) NOT NULL,
	taskStartDate DATETIME,
	taskDueDate DATETIME,
	taskStatus VARCHAR(64) NOT NULL,
	taskPriority VARCHAR(64) NOT NULL,
	taskDescription VARCHAR(256),
	PRIMARY KEY(taskId)
);

/** Challenge 2: For the DDL described in the Data Design Project overview, create an SQL Select statement that gets me
  the following info for the Tweet with the (hexified) id 0536faef082b454e9d444cdbe7887d7a
  - tweetContent
  - profileAtHandle of all users who have liked the Tweet
**/

SELECT tweet.tweetContent, profile.profileAtHandle
FROM tweet
INNER JOIN `like` ON tweet.tweetID = like.likeTweetId
INNER JOIN profile ON like.likeProfileId = profile.profileId
WHERE tweet.tweetId = UNHEX('0536faef082b454e9d444cdbe7887d7a');