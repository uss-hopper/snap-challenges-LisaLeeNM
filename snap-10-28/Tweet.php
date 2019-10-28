<?php

	/**
	 * accessor method for tweet content
	 *
	 * @return string value of tweet content
	 **/
	public function getTweetContent() : string {
		return($this->tweetContent);
}

	/**
	 * mutator method for tweet content
	 *
	 * @param string $newTweetContent new value of tweet content
	 * @throws \InvalidArgumentException if the $newTweetContent is not a string or insecure
	 * @throws \RangeException if $newTweetContent is > 140 characters
	 * @throws \TypeError if $newTweetContent is not a string
	 **/
	public function setTweetContent(string $newTweetContent) : void {
		// verify the tweet content is secure
		$newTweetContent = trim($newTweetContent);
		$newTweetContent = filter_var($newTweetContent, FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
		if(empty($newTweetContent) === true) {
			throw(new \InvalidArgumentException("tweet content is empty or insecure"));
		}

		// verify the tweet content will fit in the database
		if(strlen($newTweetContent) > 140) {
			throw(new \RangeException("tweet content too large"));
		}

		// store the tweet content
		$this->tweetContent = $newTweetContent;
}

	/**
	 * gets tweets by tweet date
	 *
	 * @param \PDO $pdo PDO connection object
	 * @param \DateTime|string|null $tweetDate date and time tweet was sent to search for
	 * @return |SplFixedArray SplFixedArray of tweets found
	 * @throws \PDOException when mySQL related errors occur
	 * @throws \TypeErrorwhen a variable is not the correct data type
	 **/
	public static function getTweetsByTweetDate(\PDO $pdo, string $tweetDate) : \SplFixedArray {
		// create query template
		$query = "SELECT tweetId, tweetProfileId, tweetContent, tweetDate FROM tweet WHERE tweetDate LIKE :tweetDate";
		$statement = $pdo->prepare($query);

		// bind the tweet date to the placeholder in the template
		$tweetDate = "%tweetDate%";
		$parameters = ["tweetDate" => $tweetDate];
		$statement->execute($parameters);

		// build an array of tweets
		$tweets = new \SplFixedArray($statement->rowCount());
		$statement->setFetchMode(\PDO::FETCH_ASSOC);
		while(($row = $statement->fetch()) !== false) {
			try {
				$tweet = new Tweet($row["tweetId"], $row["tweetProfileId"], $row["tweetContent"], $row["tweetDate"]);
				$tweets[$tweets->key()] = $tweet;
				$tweets->next();
			} catch(\Exception $exception) {
				// if the row couldn't be converted, rethrow it
				throw(new \PDOException($exception->getMessage(), 0, $exception));
			}
		}
		return($tweets);
}
