<?php

namespace LisaLeeNM\SnapChallenge1021;
require_once("autoload.php");
require_once (dirname(__DIR__, 1) . '/vendor/autoload.php');

use http\Exception\InvalidArgumentException;
use Ramsey\Uuid\Uuid;

/**
 * User Class
 *
 * This class includes data for email and username.
 *
 * @author Lisa Lee <llee28@cnm.edu>
 * @version 0.0.1
 **/
class User implements \JsonSerializable {
	use ValidateUuid;
	/**
	 * id for this User; this is the primary key
	 * @var Uuid $userId
	 **/
	private $userId;
	/**
	 * email for user; this is a unique index
	 * @var string $userEmail
	 **/
	private $userEmail;
	/**
	 * username for user
	 * @var string $userUsername
	 **/
	private $userUsername;
	/**
	 * constructor for this User
	 *
	 * @param string\Uuid $newUserId new user id or null if new
	 * @param string $newUserEmail contains email
	 * @param string $new UserUsername contains account holder's username
	 * @throws \InvalidArgumentException if data types are not InvalidArgumentException
	 * @throws \RangeException if data values are out of bounds (e.g., strings too long, negative integers)
	 * @throws \TypeError if a data type violates type hints
	 * @throws \Exception if some other exception occurs
	 * @documentation https://php.net/manual/en/language.oop5.decon.php
	 **/
	public function __construct($newUserId, string $newUserEmail, string $newUserUsername) {
		try {
			$this->setUserId($newUserId);
			$this->setUserEmail($newUserEmail);
			$this->setUserUsername($newUserUsername);
		}
	}
	/**
	 * accessor method for user id
	 *
	 * @return Uuid value of user id
	 **/
	public function getUserId() : Uuid {
		return ($this->userId);
	}
	/**
	 * mutator method for user id
	 *
	 * @param Uuid\ string $newUserId new value of user id
	 * @throws \RangeException if $newUserId is not positive
	 * @throws \TypeError if $newUserId is not a uuid or string
	 **/
	public function setUserId($newUserId): void {
		try {
			$uuid = self::validateUuid(($newUserId);
		} catch(\InvalidArgumentException | \RangeException | \Exception | \TypeError $exception) {
			$exceptionType = get_class($exception);
			throw(new $exceptionType($exception->getMessage(), 0, $exception));
		}
		// convert and store the user id
		$this->userId = $uuid;
	}
	/**
	 * accessor method for user email
	 *
	 * @return string value of user email
	 **/
	public function getUserEmail(): string {
		return ($this->userEmail):
	}
	/**
	 * mutator method for user email
	 *
	 * @param string $newUserEmail new value of user email
	 * @throws \InvalidArgumentException if $newUserEmail is not a valid email or insecure
	 * @throws \RangeException if $newUserEmail is > 128 characters
	 * @throws \TypeError if $newUserEmail is not a string
	 **/
	public function setUserEmail(string $newUserEmail): void {
		// verify email is secure
		$newUserEmail = trim($$newUserEmail);
		$newUserEmail = filter_var($newUserEmail, FILTER_VALIDATE_EMAIL);
		if(empty($newUserEmail) === true) {
			throw(new \InvalidArgumentException("email is empty or not secure"));
		}
		// verify the user email will fit in the database
		if(strlen($newUserEmail) > 128) {
			throw(new \RangeException("email is too large"));
		}
		// store the user email
		$this->userEmail = $newUserEmail;
	}
	/**
	 * accessor method for username
	 *
	 * @return string value of username
	 **/
	public function getUserUsername(): string {
		return ($this->userUsername);
	}
	/**
	 * mutator method for username
	 *
	 * @param string $newUserUsername new value of username
	 * @throws \InvalidArgumentException if $new UserUsername is not a valid username or insecure
	 * @throws \RangeException if $newUserUsername is > 32 characters
	 * @throws \TypeError if $newUserUsername is not a string
	 **/
	public function setUserUsername(string $newUserUsername): void {
		// verify the username is secure
		$newUserUsername = trim($newUserUsername);
		$newUserUsername = filter_var($newUserUsername, FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
		if(empty($newUserUsername) === true) {
			throw(new \InvalidArgumentException("username is empty or insecure"));
		}
		// verify the username will fit in the database
		if(strlen($newUserUsername) > 32) {
			throw(new \RangeException("username is too large"));
		}
		// store the username
		$this->userUsername = $newUserUsername;
	}
	/**
	 * Formats the state variables for JSON serialization
	 *
	 * @return array resulting state variables to serialize
	 **/
	public function jsonSerialize() {
		$fields = get_object_vars($this);
		$fields["userId"] = $this->userId->toString();
		return ($fields);
	}
}
?>